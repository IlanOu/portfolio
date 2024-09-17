<script>
    import { onMount } from 'svelte';
    import Notification from './Notification.svelte';
  
    let notifications = [];
  
    function showNotification(message, icon, type = 'info', duration = 3000) {
      const id = Date.now();
      notifications = [...notifications, { id, message, icon, type, duration }];
      setTimeout(() => {
        notifications = notifications.filter(n => n.id !== id);
      }, duration);
    }
  
    onMount(() => {
      if (typeof window !== 'undefined') {
        window.showNotification = showNotification;
      }
    });
  </script>
  
  <div class="fixed top-4 right-4 z-50">
    {#each notifications as notification (notification.id)}
      <Notification {...notification} />
    {/each}
  </div>