import React from 'react';
import { StaticTimePicker } from '@mui/lab';
import { Card, CardContent, Stack, TextField } from '@mui/material';
import TimeDisplay from './TimeDisplay';

interface TimePickerCardProps {
  time: Date;
  onChange: (time: Date) => void;
}

const TimePickerCard: React.FC<TimePickerCardProps> = ({ time, onChange }) => {
  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing="8px" alignItems="center">
          <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={time}
            onChange={(newDate: any) => {
              if (newDate) onChange(new Date(newDate));
            }}
            renderInput={(params: any) => <TextField {...params} />}
            toolbarTitle="Go off at:"
            ToolbarComponent={(f: any) => (
              <TimeDisplay
                {...f}
                onChange={(d: any, ss: any) => {
                  f.onChange(d, ss);
                  if (d) onChange(d);
                }}
              />
            )}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TimePickerCard;
