export const formatMinute = (minute: number): string => {
  return minute < 10 ? `0${minute}` : String(minute);
};

export const formatHour = (hour: number): string => {
  const adjHour = hour > 12 ? hour - 12 : hour;
  return String(adjHour === 0 ? 12 : adjHour); // 12AM return 0
};

export const formatTime = (hour: number, minute: number): string => {
  return `${formatHour(hour)}:${formatMinute(minute)}`;
};

export const getAmPm = (hour: number) => (hour >= 12 ? 'PM' : 'AM');
