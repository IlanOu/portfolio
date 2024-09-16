<script lang="ts">
    import { onMount } from 'svelte';
    import { achievements, isAchievementUnlocked, type Achievement } from '@utils/achievementStore';
    
    export let achievementId: string;
    let isUnlocked = false;
    let achievement: Achievement | undefined;
    
    onMount(() => {
      const unsubscribe = achievements.subscribe(currentAchievements => {
        isUnlocked = isAchievementUnlocked(achievementId);
        if (isUnlocked) {
          achievement = currentAchievements.find(a => a.id === achievementId);
        }
      });
    
      return () => {
        unsubscribe();
      };
    });
</script>
    
<div class="card-base z-10 px-6 md:px-9 pt-6 pb-6 relative w-full flex flex-col pl-6 md:pl-9 pr-6 md:pr-2 md:pt-7">
    {#if isUnlocked && achievement}
        <span class="transition group w-full block font-bold mb-3 text-3xl text-90
        hover:text-[var(--primary)] dark:hover:text-[var(--primary)]
        active:text-[var(--title-active)] dark:active:text-[var(--title-active)]
        before:w-1 before:h-5 before:rounded-md before:bg-[var(--primary)]
        before:absolute before:top-[35px] before:left-[18px] before:hidden md:before:block
        ">{achievement.name}</span>
        <span class="transition text-75 pr-4">{achievement.description}</span>
    {:else}
        <span class="text-sm text-black/30 dark:text-white/30 flex gap-4 transition">Succès verrouillé</span>
    {/if}
</div>