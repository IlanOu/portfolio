import { writable } from 'svelte/store';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
}

export const allAchievements: Achievement[] = [
  { id: 'explorer', name: 'Explorer', description: 'Visiter 5 pages différentes', unlocked: false },
  { id: 'all-posts-viewed', name: 'Tous les posts vus', description: 'Voir tous les posts du blog', unlocked: false },
];

export const achievements = writable<Achievement[]>([]);

export function initAchievements() {
  if (typeof window !== 'undefined') {
    const storedAchievements = JSON.parse(localStorage.getItem('achievements') || JSON.stringify(allAchievements));
    achievements.set(storedAchievements);
  }
}

export function unlockAchievement(id: string) {
  achievements.update(currentAchievements => {
    const updatedAchievements = currentAchievements.map(a => 
      a.id === id ? {...a, unlocked: true} : a
    );
    if (typeof window !== 'undefined') {
      localStorage.setItem('achievements', JSON.stringify(updatedAchievements));
    }
    return updatedAchievements;
  });
}

export function isAchievementUnlocked(id: string): boolean {
  let unlocked = false;
  achievements.subscribe(currentAchievements => {
    unlocked = currentAchievements.find(a => a.id === id)?.unlocked || false;
  })();
  return unlocked;
}

export function getAchievement(id: string): Achievement | undefined {
  let achievement: Achievement | undefined;
  achievements.subscribe(currentAchievements => {
    achievement = currentAchievements.find(a => a.id === id);
  })();
  return achievement;
}