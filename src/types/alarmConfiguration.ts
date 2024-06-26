type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

type AlarmConfiguration = {
  id: string;
  enabled: boolean;
  hour: number;
  minute: number;
  schedule?: DayOfWeek[];
  fadeInDuration: number
};

export type { AlarmConfiguration, DayOfWeek };
