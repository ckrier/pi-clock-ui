import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { CloseRounded } from '@mui/icons-material';

import Page from '../Page/Page';
import TimePickerCard from './TimePickerCard/TimePickerCard';
import DayPickerCard from './DayPickerCard/DayPickerCard';
import { DayOfWeek } from '../../types/alarmConfiguration';

interface EditAlarmDialogProps {
  defaultDate?: Date;
  defaultSchedule?: DayOfWeek[];
  isOpen: boolean;
  onCancel: () => void;
  onSave: (date: Date, schedule?: DayOfWeek[]) => void;
  schedule?: DayOfWeek[];
}

const EditAlarmDialog: React.FC<EditAlarmDialogProps> = ({
  defaultDate,
  defaultSchedule,
  isOpen,
  onCancel,
  onSave,
}) => {
  const [date, setDate] = useState(defaultDate || new Date());
  const [isScheduleEnabled, setIsScheduleEnabled] = useState(!!defaultSchedule);
  const [schedule, setSchedule] = useState<DayOfWeek[] | undefined>(
    defaultSchedule
  );

  useEffect(() => {
    setDate(defaultDate || new Date());
    setIsScheduleEnabled(!!defaultSchedule);
    setSchedule(defaultSchedule);
  }, [defaultDate, defaultSchedule]);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onCancel}
      TransitionComponent={DialogTransition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onCancel}
            aria-label="close"
          >
            <CloseRounded />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {`${defaultDate ? 'Edit' : 'New'} Alarm`}
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={() =>
              onSave(
                date,
                isScheduleEnabled && schedule && schedule.length > 0
                  ? schedule
                  : undefined
              )
            }
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <Page>
        <Stack direction="column" spacing="8px">
          <TimePickerCard time={date} onChange={(t) => setDate(t)} />
          <DayPickerCard
            isScheduleEnabled={isScheduleEnabled}
            onScheduleToggled={setIsScheduleEnabled}
            schedule={schedule || []}
            onScheduleChanged={setSchedule}
          />
        </Stack>
      </Page>
    </Dialog>
  );
};

const DialogTransition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export default EditAlarmDialog;
