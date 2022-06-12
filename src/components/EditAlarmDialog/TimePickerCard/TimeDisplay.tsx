import React from 'react';
import {
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { ToolbarComponentProps } from '@mui/lab/internal/pickers/typings/BasePicker';
import { DateTime } from 'luxon';
import { formatHour, formatMinute } from '../../../util/timeHelpers';
import { AllAvailableViews } from '@mui/lab/internal/pickers/typings/Views';

const TimeDisplay: React.FC<ToolbarComponentProps<Date | null>> = ({
  date,
  toolbarTitle,
  onChange,
  openView,
  setOpenView,
}) => {
  const dt = DateTime.fromJSDate(date ? new Date(date) : new Date());
  const time = dt.toLocaleString(DateTime.TIME_SIMPLE);
  const amPm = time.slice(time.length - 2, time.length);

  const theme = useTheme();

  const generateTypographyProps = (
    view?: AllAvailableViews
  ): TypographyPropsVariantOverrides => {
    return {
      variant: 'h3',
      component: 'span',
      color:
        openView === view
          ? theme.palette.text.primary
          : theme.palette.text.secondary,
      onClick: () => (view ? setOpenView(view) : undefined),
    };
  };

  return (
    <>
      <Typography>{toolbarTitle}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <div>
          <Typography {...generateTypographyProps('hours')}>
            {formatHour(dt.hour)}
          </Typography>
          <Typography {...generateTypographyProps()}>:</Typography>
          <Typography {...generateTypographyProps('minutes')}>
            {formatMinute(dt.minute)}
          </Typography>
        </div>
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
