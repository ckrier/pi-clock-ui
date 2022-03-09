import React from 'react';
import {
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { ToolbarComponentProps } from '@mui/lab/internal/pickers/typings/BasePicker';
import { DateTime } from 'luxon';

const TimeDisplay: React.FC<ToolbarComponentProps<Date | null>> = ({
  date,
  toolbarTitle,
  onChange,
}) => {
  const dt = DateTime.fromJSDate(date ? new Date(date) : new Date());
  const time = dt.toLocaleString(DateTime.TIME_SIMPLE);
  const amPm = time.slice(time.length - 2, time.length);

  return (
    <>
      <Typography>{toolbarTitle}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">{time.slice(0, time.length - 3)}</Typography>
        <ToggleButtonGroup
          color="primary"
          value={time.slice(time.length - 2, time.length)}
          exclusive
          size="large"
          sx={{ height: '48px' }}
          onChange={(_, v: string) => {
            if (amPm !== v && v === 'AM') {
              onChange(dt.minus({ hours: 12 }).toJSDate());
            } else if (amPm !== v && v === 'PM') {
              onChange(dt.plus({ hours: 12 }).toJSDate());
            }
          }}
        >
          <ToggleButton value="AM">AM</ToggleButton>
          <ToggleButton value="PM">PM</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default TimeDisplay;
