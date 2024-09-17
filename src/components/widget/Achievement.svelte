<script lang="ts">
  import { onMount } from 'svelte';
  import { achievements, isAchievementUnlocked, type Achievement } from '@utils/achievementStore';
  import Icon from '@iconify/svelte';

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
  
    return unsubscribe;
  });
</script>

<div class="card-base z-10 px-6 md:px-6 pt-6 pb-6 relative w-full flex flex-col items-start rounded-lg bg-[var(--card-bg)] transition">
  {#if isUnlocked && achievement}
    <div class="flex items-center gap-4 mb-4">
      {#if achievement.icon}
        <Icon icon={achievement.icon} width="50" height="50" class="transition text-[var(--primary)]" />
      {/if}
      <span class="text-2xl font-bold text-[var(--primary)]">{achievement.name}</span>
    </div>
    <span class="transition text-75 pr-4 text-gray-700 dark:text-gray-300">
      {achievement.description}
    </span>
  {:else}
    <div class="flex items-center gap-4 mb-4">
      <div class="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 opacity-50 flex items-center justify-center">
        <Icon icon="lock" width="24" height="24" class="text-gray-500 dark:text-gray-400" />
      </div>
      <span class="text-2xl font-bold text-gray-500 dark:text-gray-400">Succès verrouillé</span>
    </div>
    <span class="text-sm text-gray-500 dark:text-gray-400 transition">Débloquez ce succès pour voir les détails.</span>
  {/if}
</div>