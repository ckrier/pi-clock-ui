import { AlarmConfiguration, DayOfWeek } from '../types/alarmConfiguration';

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
  const response = await fetch(BASE_URL, {
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
