<script>
  import { onMount, createEventDispatcher, onDestroy } from 'svelte';
  import Icon from '@iconify/svelte';

  export let message = '';
  export let icon = '';
  export let type = 'info';
  export let duration = 3000;
  export let position = 0;

  const emojis = {
    info: '📌',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    achievement: '🏆'
  };

  let visible = false;
  let notificationElement;

  const dispatch = createEventDispatcher();

  onMount(() => {
    document.body.appendChild(notificationElement);
    
    // Déclencher la transition après un court délai
    setTimeout(() => {
      visible = true;
    }, 50);

    setTimeout(() => {
      visible = false;
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

  $: typeClass = {
    'info': 'bg-blue-500',
    'success': 'bg-green-500',
    'warning': 'bg-yellow-500',
    'error': 'bg-red-500',
    'achievement': 'bg-[var(--primary)]'
  }[type];
</script>

<div
  bind:this={notificationElement}
  class={`flex items-center fixed right-4 p-3 rounded-lg text-white text-sm z-50 max-w-xs break-words shadow-md transition-all duration-300 ease-in-out ${typeClass}`}
  style="opacity: {visible ? 1 : 0}; top: {1 + position * 4}rem; transform: translateX({visible ? '0' : '100%'});"
>
  {#if icon}
    <Icon icon={icon} width="25" height="25" class="transition text-[var(--primary)]" />
  {:else}
    <span class="mr-2 text-xl">{emojis[type]}</span>
  {/if}
  <span class="flex-1">{message}</span>
</div>