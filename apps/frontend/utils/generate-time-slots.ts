export function generateTimeSlots(
  startTime: string,
  endTime: string,
  interval: number
): string[] {
  const start = startTime.split(":").map(Number);
  const end = endTime.split(":").map(Number);
  const startDate = new Date();
  startDate.setHours(start[0], start[1], 0, 0);
  const endDate = new Date();
  endDate.setHours(end[0], end[1], 0, 0);

  const diffInMinutes = (endDate.getTime() - startDate.getTime()) / 60000;
  const intervals = Math.floor(diffInMinutes / interval);

  return Array.from({ length: intervals + 1 }, (_, i) => {
    const date = new Date(startDate.getTime() + i * interval * 60000);
    return date.toTimeString().split(" ")[0].substring(0, 5);
  });
}
