import { DateTime } from 'luxon';
import { AlarmConfiguration, DayOfWeek } from '../types/alarmConfiguration';

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

export const isToday = (al: AlarmConfiguration): boolean => {
  const dt = DateTime.fromObject({ hour: al.hour, minute: al.minute });
  const midnight = DateTime.now().plus({ days: 1 }).startOf('day');

  const isTimeToday =
    dt.diffNow('minutes').minutes > 0 &&
    dt.diff(midnight, 'minutes').minutes < 0;

  if (al.schedule) {
    return isScheduledToday(al.schedule) && isTimeToday;
  }

  return isTimeToday;
};

export const getNextScheduledDay = (
  schedule: DayOfWeek[],
  date: Date = new Date()
): DayOfWeek => {
  const dt = DateTime.fromJSDate(date);
  const lcSched = schedule.map((dow) => dow.toLowerCase());

  for (let dayOffset = 0; dayOffset < 7; ++dayOffset) {
    const nextDay = dt.plus({ days: dayOffset });
    if (lcSched.includes(nextDay.weekdayLong.toLowerCase())) {
      return nextDay.weekdayLong as DayOfWeek;
    }
  }

  return dt.weekdayLong as DayOfWeek;
};

export const getDayNumber = (day: DayOfWeek) => {
  switch (day) {
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    case 'Saturday':
      return 6;
    case 'Sunday':
      return 7;
  }
};

export const isScheduledToday = (schedule: DayOfWeek[]): boolean => {
  const today = DateTime.now().weekdayLong.toLowerCase();
  return schedule.map((d) => d.toLowerCase()).includes(today);
};

export const isScheduledTomorrow = (schedule: DayOfWeek[]): boolean => {
  const tomorrow = DateTime.now().plus({ days: 1 }).weekdayLong.toLowerCase();
  return schedule.map((d) => d.toLowerCase()).includes(tomorrow);
};

export const toDateTime = (al: AlarmConfiguration): DateTime => {
  let dt = DateTime.fromObject({ hour: al.hour, minute: al.minute });

  if (al.schedule) {
    dt = dt.set({ weekday: getDayNumber(getNextScheduledDay(al.schedule)) });
  }

  if (dt.diffNow().minutes < 0) {
    dt = dt.plus({ days: 1 });
  }

  return dt;
};
