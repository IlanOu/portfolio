<script lang="ts">
  import { notifications } from '@utils/notifications-store';
  import Notification from './Notification.svelte';

  function closeNotification(event: CustomEvent<string>) {
    notifications.remove(event.detail);
  }
</script>

<div class="notifications flex flex-col gap-1">
  {#each $notifications as notification (notification.id)}
    <Notification {notification} on:close={closeNotification} />
  {/each}
</div>

<style>
  .notifications {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 300px;
    z-index: 1000;
  }
</style>