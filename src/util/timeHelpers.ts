const formatNumberForTime = (num: number): string => {
  return num < 10 ? `0${num}` : String(num);
};

export const formatTime = (hour: number, minute: number): string => {
  const adjHour = hour > 12 ? hour - 12 : hour;
  return `${adjHour === 0 ? 12 : adjHour}:${formatNumberForTime(minute)}`;
};

export const getAmPm = (hour: number) => (hour >= 12 ? 'PM' : 'AM');
