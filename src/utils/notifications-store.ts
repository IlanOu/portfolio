import { writable } from 'svelte/store';

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  icon?: string;
  timeout?: number;
}

function createNotificationsStore() {
  const { subscribe, update } = writable<Notification[]>([]);

  function remove(id: string) {
    update(notifications => notifications.filter(n => n.id !== id));
  }

  return {
    subscribe,
    add: (notification: Omit<Notification, 'id'>) => {
      const id = Date.now().toString();
      update(notifications => [...notifications, { ...notification, id }]);
      
      if (notification.timeout) {
        setTimeout(() => {
          remove(id);
        }, notification.timeout);
      }
    },
    remove,
    clear: () => {
      update(() => []);
    }
  };
}

export const notifications = createNotificationsStore();