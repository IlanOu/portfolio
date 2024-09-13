declare global {
    interface Window {
        showNotification: (message: string, type?: string, duration?: number) => void;
    }
}
  
export {};