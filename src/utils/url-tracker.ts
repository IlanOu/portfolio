import { getAllSortedPosts } from "@utils/content-utils";

declare global {
  interface Window {
    showNotification: (message: string, type?: string, duration?: number) => void;
  }
}

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
      
      checkAllPostsViewed(viewedPosts.length);
    }
  }
}

function checkAllPostsViewed(viewedCount: number) {
  // console.log(`Checking posts viewed: ${viewedCount} out of ${totalPosts}`);
  if (viewedCount >= totalPosts) {
    // console.log('All posts viewed, attempting to show notification');
    if (typeof window !== 'undefined' && window.showNotification) {
      window.showNotification("Tous les posts ont été vus !", "achievement", 10000);
    } else {
      console.error('window.showNotification is not available');
    }
  }
  // else {
  //   console.log(`You have viewed ${viewedCount} out of ${totalPosts} posts.`);
  // }
}