import { getAllSortedPosts } from "@utils/content-utils";
import { unlockAchievement, getAchievement } from "@utils/achievement-store";

let totalPosts: number;

export async function initUrlTracking() {
  totalPosts = (await getAllSortedPosts()).length;

  if (typeof window !== 'undefined') {
    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleUrlChange();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleUrlChange();
    };
  }
}

function handleUrlChange() {
  const currentUrl = window.location.href;
  const postMatch = currentUrl.match(/\/posts\/([^\/]+)/);
  if (postMatch) {
    const postName = postMatch[1];
    const viewedPosts = JSON.parse(localStorage.getItem('viewedPosts') || '[]');
    
    if (!viewedPosts.includes(postName)) {
      viewedPosts.push(postName);
      localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts));
      
      const explorerAchievement = getAchievement('explorer');
      const allPostsAchievement = getAchievement('all-posts-viewed');
      
      if (explorerAchievement && !explorerAchievement.unlocked) {
        checkFivePostsViewed(viewedPosts.length);
      }
      
      if (allPostsAchievement && !allPostsAchievement.unlocked) {
        checkAllPostsViewed(viewedPosts.length);
      }
    }
  }
}

function checkAllPostsViewed(viewedCount: number) {
  const achievementId = 'all-posts-viewed';
  const achievement = getAchievement(achievementId);

  if (viewedCount >= totalPosts && achievement && !achievement.unlocked) {
    if (typeof window !== 'undefined') {
      unlockAchievement(achievementId);
    } else {
      console.error('window.showNotification is not available');
    }
  }
}

function checkFivePostsViewed(viewedCount: number) {
  const achievementId = 'explorer';
  const achievement = getAchievement(achievementId);

  if (viewedCount >= 2 && achievement && !achievement.unlocked) {
    if (typeof window !== 'undefined') {
      unlockAchievement(achievementId);
    } else {
      console.error('window.showNotification is not available');
    }
  }
}