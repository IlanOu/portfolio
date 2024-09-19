import { writable } from 'svelte/store';
import { notifications } from '@utils/notifications-store';
// import { boolean } from 'astro:schema';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

export const allAchievements: Achievement[] = [
  { 
    id: 'explorer', 
    name: 'Fouineur professionnel', 
    description: '5 projets visités ? Vous êtes en train de devenir accro...', 
    unlocked: false,
    icon: "fluent-emoji:eyes",
  },
  { 
    id: 'all-posts-viewed', 
    name: 'Explorateur Infatigable',
    description: 'Vous avez vraiment lu tous mes projets ? Vous êtes sûr ??', 
    unlocked: false,
    icon: "fluent-emoji:detective",
  },
  { 
    id: 'all-success-won', 
    name: 'Complétiste compulsif',
    description: 'Tous les succès débloqués... Vous n\'avez rien de mieux à faire ?', 
    unlocked: false,
    icon: "fluent-emoji:smiling-face-with-sunglasses",
  },
  {
    id: 'night-visitor',
    name: 'Visiteur nocturne',
    description: 'Des problèmes de sommeil ou un fan inconditionnel ?',
    unlocked: false,
    icon: "fluent-emoji:sleeping-face",
  }
];

export const achievements = writable<Achievement[]>([]);

export function initAchievements() {
  if (typeof window !== 'undefined') {
    const storedAchievements = JSON.parse(localStorage.getItem('achievements') || JSON.stringify(allAchievements));
    achievements.set(storedAchievements);
  }
}

export function unlockAchievement(id: string) {
  const achievement = getAchievement(id);
  if (achievement){
    
    notifications.add({
      message: achievement.name,
      type: 'success',
      timeout: 10000,
      icon: achievement.icon,
    });
  }

  achievements.update(currentAchievements => {
    const updatedAchievements = currentAchievements.map(a => 
      a.id === id ? {...a, unlocked: true} : a
    );
    if (typeof window !== 'undefined') {
      localStorage.setItem('achievements', JSON.stringify(updatedAchievements));
    }
    return updatedAchievements;
  });


  if (checkAllAchievementsUnlocked()){
    const explorerAchievement = getAchievement('all-success-won');
    if (explorerAchievement && !explorerAchievement.unlocked) {
      unlockAchievement(explorerAchievement.id);
    }
  }
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

function checkAllAchievementsUnlocked() {
  let achievement: Achievement | undefined;
  let unlockedItems:Achievement[] = [];
  achievements.subscribe(currentAchievements => {
    unlockedItems = currentAchievements.filter(a => a.unlocked);
  })();

  console.log("checkAllAchievementsUnlocked : ", unlockedItems.length > 1);
  return unlockedItems.length > 1;
}