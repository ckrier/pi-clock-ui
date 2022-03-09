const formatNumberForTime = (num: number): string => {
  return num < 10 ? `0${num}` : String(num);
};

export const formatTime = (
  hour: number,
  minute: number,
  amPm: string
): string => {
  return `${formatNumberForTime(hour)}:${formatNumberForTime(
    minute
  )} ${amPm.toUpperCase()}}`;
};
