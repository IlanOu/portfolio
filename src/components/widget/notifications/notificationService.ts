type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'achievement';

export function showNotification(message: string, type: NotificationType = 'info', duration: number = 3000) {
  if (typeof window !== 'undefined' && typeof window.showNotification === 'function') {
    window.showNotification(message, type, duration);
  } else {
    console.error("La fonction showNotification n'est pas disponible");
  }
}