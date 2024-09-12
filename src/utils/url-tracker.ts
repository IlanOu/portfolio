import {getAllSortedPosts} from "@utils/content-utils";


// Déclaration du type global pour TypeScript
declare global {
    interface Window {
      showNotification: (message: string, type?: string, duration?: number) => void;
    }
  }

async function getTotalPostCount() {
    const allPosts = await getAllSortedPosts();
    return allPosts.length;
  }

export async function initUrlTracking() {

    const totalPosts = await getTotalPostCount();

  
    function handleUrlChange() {
      const currentUrl = window.location.href;
  
      const postMatch = currentUrl.match(/\/posts\/([^\/]+)/);
      if (postMatch) {
        const postName = postMatch[1];
  
        const viewedPosts = JSON.parse(localStorage.getItem('viewedPosts') || '[]');
  
        if (!viewedPosts.includes(postName)) {
          viewedPosts.push(postName);
          localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts));
  
          const viewedCount = viewedPosts.length;
  
          checkAllPostsViewed(viewedCount);
        }
      }
    }
  
    function checkAllPostsViewed(viewedCount: number) {
      if (viewedCount >= totalPosts) {
        window.showNotification("Tous les posts ont été vus !", "achievement", 10000);
      } 
    //   else {
    //     console.log(`You have viewed ${viewedCount} out of ${totalPosts} posts.`);
    //   }
    }
  
    window.addEventListener('popstate', handleUrlChange);
  
    // Surveiller les changements d'URL via pushState ou replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
  
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleUrlChange();
    };
  
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleUrlChange();
    };
  
    handleUrlChange();
  }