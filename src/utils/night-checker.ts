export function isNightLogin(): boolean {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 0 && hour < 4;
  }
  