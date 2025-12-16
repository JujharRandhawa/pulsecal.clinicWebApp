import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from './firebase';
import { logger } from './logger';

/**
 * Sign up a new user with email and password
 */
export const signUp = async (
  email: string,
  password: string,
  displayName?: string
): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name if provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });
    }
    
    return userCredential;
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
};

/**
 * Sign up with Google (same as sign in, but creates account if doesn't exist)
 */
export const signUpWithGoogle = async (): Promise<UserCredential> => {
  try {
    // Google sign-in automatically creates account if it doesn't exist
    return await signInWithGoogle();
  } catch (error) {
    console.error('Google sign up error:', error);
    throw error;
  }
};

/**
 * Sign in with email and password
 */
export const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};

/**
 * Sign in with Google
 */
export const signInWithGoogle = async (): Promise<UserCredential> => {
  try {
    const provider = new GoogleAuthProvider();
    // Request additional scopes if needed
    provider.addScope('profile');
    provider.addScope('email');
    
    return await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Google sign in error:', error);
    throw error;
  }
};

/**
 * Sign out current user
 */
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
};

/**
 * Get Firebase ID token for API requests
 */
export const getIdToken = async (forceRefresh: boolean = false): Promise<string | null> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return null;
    }
    return await user.getIdToken(forceRefresh);
  } catch (error) {
    console.error('Get ID token error:', error);
    return null;
  }
};

/**
 * Get current user
 */
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

/**
 * Sync user profile with backend after authentication
 * Automatically extracts name from Firebase user if not provided
 */
export const syncUserProfile = async (
  firstName?: string,
  lastName?: string,
  phone?: string,
  dateOfBirth?: Date,
  profileImage?: string
): Promise<void> => {
  try {
    const token = await getIdToken();
    if (!token) {
      throw new Error('No authentication token available');
    }

    const user = getCurrentUser();
    
    // If name not provided, try to extract from Firebase user
    let finalFirstName = firstName;
    let finalLastName = lastName;
    let finalProfileImage = profileImage;

    if (user) {
      if (!finalFirstName && !finalLastName && user.displayName) {
        const nameParts = user.displayName.split(' ');
        finalFirstName = nameParts[0] || '';
        finalLastName = nameParts.slice(1).join(' ') || '';
      }
      
      if (!finalProfileImage && user.photoURL) {
        finalProfileImage = user.photoURL;
      }
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    
    const response = await fetch(`${apiUrl}/api/v1/auth/sync-profile`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: finalFirstName,
        lastName: finalLastName,
        phone,
        dateOfBirth: dateOfBirth?.toISOString(),
        profileImage: finalProfileImage,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to sync profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Sync profile error:', error);
    throw error;
  }
};

