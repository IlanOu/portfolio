export function isNightLogin(): boolean {
    console.log("Checking night login");
    const now = new Date();
    const hour = now.getHours();
    return hour >= 0 && hour < 4;
  }
  