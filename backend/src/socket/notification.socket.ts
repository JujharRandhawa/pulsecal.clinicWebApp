import { Server as SocketIOServer } from 'socket.io';
import { logger } from '../utils/logger';

export const setupNotificationSocket = (io: SocketIOServer): void => {
  const notificationNamespace = io.of('/notifications');

  notificationNamespace.on('connection', (socket) => {
    logger.info(`Notification socket connected: ${socket.id}`);

    socket.on('subscribe', () => {
      socket.join(`user-${socket.data.user.id}`);
      socket.emit('subscribed', { userId: socket.data.user.id });
    });

    socket.on('disconnect', () => {
      logger.info(`Notification socket disconnected: ${socket.id}`);
    });
  });

});

// Helper function to send notification to a user
export const sendNotification = (
  io: SocketIOServer,
  userId: string,
  notification: {
    type: string;
    title: string;
    message: string;
    data?: unknown;
  }
): void => {
  const notificationNamespace = io.of('/notifications');
  notificationNamespace.to(`user-${userId}`).emit('notification', notification);
};

