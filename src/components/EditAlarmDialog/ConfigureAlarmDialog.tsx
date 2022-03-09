import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Dialog,
  Divider,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { StaticTimePicker } from '@mui/lab';
import { DateTime, Duration } from 'luxon';

import Page from '../Page/Page';
import TimePickerCard from './TimePickerCard/TimePickerCard';
import DayPickerCard from './DayPickerCard/DayPickerCard';

interface EditAlarmDialogProps {
  defaultDate?: Date;
  isOpen: boolean;
  onCancel: () => void;
  onSave?: () => void;
}

const EditAlarmDialog: React.FC<EditAlarmDialogProps> = ({
  defaultDate,
  isOpen,
  onCancel,
}) => {
  const [date, setDate] = useState(defaultDate || new Date());
  return (
    <Dialog fullScreen open={isOpen} onClose={onCancel}>
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
          <Button autoFocus color="inherit" onClick={onCancel}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <Page>
        <Stack direction="column" spacing="8px">
          <TimePickerCard time={date} onChange={(t) => setDate(t)} />
          <DayPickerCard isScheduleEnabled={true} />
        </Stack>
      </Page>
    </Dialog>
  );
};

export default EditAlarmDialog;
