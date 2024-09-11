<script>
  import { onMount, createEventDispatcher, onDestroy } from 'svelte';

  export let message = '';
  export let type = 'info';
  export let duration = 3000;
  export let position = 0;
  
  let visible = true;
  let notificationElement;

  const dispatch = createEventDispatcher();

  onMount(() => {
    document.body.appendChild(notificationElement);

    setTimeout(() => {
      visible = false;
      // Attendre la fin de la transition avant de retirer l'élément du DOM
      notificationElement.addEventListener('transitionend', () => {
        if (notificationElement && notificationElement.parentNode) {
          notificationElement.parentNode.removeChild(notificationElement);
        }
        dispatch('notificationClosed');
      });
    }, duration);
  });

  onDestroy(() => {
    if (notificationElement && notificationElement.parentNode) {
      notificationElement.style.opacity = '0';
      notificationElement.parentNode.removeChild(notificationElement);
    }
  });
</script>

<div
  bind:this={notificationElement}
  class="notification {type}"
  style="opacity: {visible ? 1 : 0}; position: fixed; right: 1rem; padding: 0.75rem; border-radius: 0.25rem; color: white; font-size: 0.875rem; z-index: 9999; max-width: 20rem; word-wrap: break-word; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: all 0.3s ease-in-out; top: {1 + position * 4}rem;"
>
  {message}
</div>

<style>
  .notification.info { background-color: #3498db; }
  .notification.success { background-color: #2ecc71; }
  .notification.warning { background-color: #f39c12; }
  .notification.error { background-color: #e74c3c; }
</style>