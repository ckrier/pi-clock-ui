type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

type AlarmConfiguration = {
  id: string;
  enabled: boolean;
  hour: number;
  minute: number;
  schedule?: DayOfWeek[];
};

export type { AlarmConfiguration, DayOfWeek };
