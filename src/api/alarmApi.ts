import { AlarmConfiguration, DayOfWeek } from '../types/alarmConfiguration';

// trailing slash is import in firefox because after CORS preflight it adds it
const BASE_URL = 'http://localhost:5000/alarms';

export const getAlarms = async () => {
  const response = await fetch(BASE_URL);
  return (await response.json()) as AlarmConfiguration[];
};

export const createAlarm = async (
  hour: number,
  minute: number,
  schedule?: DayOfWeek[]
) => {
  // trailing slash is reuired for some reason for POST specifically
  // likely because firefox adds it after CORS preflight options check
  const response = await fetch(BASE_URL + '/', {
    method: 'POST',
    body: JSON.stringify({
      enabled: false,
      hour,
      minute,
      schedule,
    }),
  });

  return (await response.json()) as AlarmConfiguration;
};

export const updateAlarm = async (alarm: AlarmConfiguration) => {
  const { id, ...rest } = alarm;
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(rest),
  });

  return (await response.json()) as AlarmConfiguration;
};

export const deleteAlarm = async (alarmId: string) => {
  await fetch(`${BASE_URL}/${alarmId}`, {
    method: 'DELETE',
  });
};
