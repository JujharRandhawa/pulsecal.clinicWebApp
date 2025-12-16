import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvP51E08sZXZdks8fkDBG6IgVZslhsfV4",
  authDomain: "pulsecal-72bb4.firebaseapp.com",
  projectId: "pulsecal-72bb4",
  storageBucket: "pulsecal-72bb4.firebasestorage.app",
  messagingSenderId: "375873590290",
  appId: "1:375873590290:web:847716fd25fc8f05de74cb",
  measurementId: "G-7SXLKFL822"
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let analytics: Analytics | null = null;

if (typeof window !== 'undefined') {
  // Only initialize on client side
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  
  auth = getAuth(app);
  
  // Initialize Analytics only in browser
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} else {
  // Server-side: create minimal app instance
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  // Auth is not available on server side
  auth = {} as Auth;
}

export { app, auth, analytics };

