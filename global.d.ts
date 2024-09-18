declare global {
    interface Window {
        showNotification: (message: string, icon?: string, type?: string, duration?: number) => void;
    }
}
  
export {};