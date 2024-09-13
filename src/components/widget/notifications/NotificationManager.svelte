<script>
    import { onMount } from 'svelte';
    import Notification from './Notification.svelte';
  
    let notifications = [];
  
    function showNotification(message, type = 'info', duration = 3000) {
    //   console.log('showNotification called:', { message, type, duration });
      const id = Date.now();
      notifications = [...notifications, { id, message, type, duration }];
    //   console.log('Current notifications:', notifications);
      setTimeout(() => {
        notifications = notifications.filter(n => n.id !== id);
        // console.log('Notification removed, remaining:', notifications);
      }, duration);
    }
  
    onMount(() => {
    //   console.log('NotificationManager mounted');
      if (typeof window !== 'undefined') {
        window.showNotification = showNotification;
        // console.log('showNotification function attached to window');
      }
    });
  </script>
  
  <div class="fixed top-4 right-4 z-50">
    {#each notifications as notification (notification.id)}
      <Notification {...notification} />
    {/each}
  </div>