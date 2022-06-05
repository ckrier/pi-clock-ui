const formatNumberForTime = (num: number): string => {
  return num < 10 ? `0${num}` : String(num);
};

export const formatTime = (hour: number, minute: number): string => {
  return `${formatNumberForTime(hour)}:${formatNumberForTime(minute)} ${
    hour < 12 ? 'AM' : 'PM'
  }`;
};
