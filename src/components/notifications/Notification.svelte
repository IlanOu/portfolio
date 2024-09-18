<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import type { Notification } from '@utils/notifications-store';
    import Icon from '@iconify/svelte';
    import {url} from "@utils/url-utils";

    export let notification: Notification;
  
    const dispatch = createEventDispatcher();
    let visible = false;
  
    onMount(() => {
      visible = true;
    });
  
    function close() {
        visible = false;
        setTimeout(() => dispatch('close', notification.id), 300);
    }
  
    $: typeText = {
      'success': 'Succès obtenu !',
      'info': 'Information',
      'warning': 'Attention',
      'error': 'Erreur'
    }[notification.type];

</script>
  
{#if visible}
<a href={url("success/")}>
    <div 
      class="rounded-xl cursor-pointer transition bg-[var(--enter-btn-bg)] hover:bg-[var(--enter-btn-bg-hover)] active:bg-[var(--enter-btn-bg-active)] active:scale-95 btn-regular shadow-md p-4 mb-4 flex justify-between items-center max-w-sm"
      in:fly="{{ y: 20, duration: 300, opacity: 0 }}"
      out:fade="{{ duration: 300 }}"
    >
      <div class="flex items-center">
        {#if notification.icon}
          <div class="mr-3">
            <Icon icon={notification.icon} width="24" height="24" />
          </div>
        {/if}
        <div>
          <h3 class="text-lg text-[var(--primary)] font-bold uppercase tracking-wide mb-1">
            {typeText}
          </h3>
          <p class="text-sm">
            {notification.message}
          </p>
        </div>
      </div>
    </div>
</a>
{/if}