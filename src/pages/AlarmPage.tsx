import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { AddAlarm } from '@mui/icons-material';

import Page from '../components/Page/Page';
import AlarmCard from '../components/AlarmCard/AlarmCard';
import Fab from '../components/Fab/Fab';
import EditAlarmDialog from '../components/EditAlarmDialog/ConfigureAlarmDialog';

const alarms = [
  { alarmTime: '08:35 AM', isToggled: true },
  { alarmTime: '12:20 PM', isToggled: false },
  { alarmTime: '09:15 AM', isToggled: true },
  { alarmTime: '06:58 PM', isToggled: false },
  { alarmTime: '08:35 AM', isToggled: true },
  { alarmTime: '12:20 PM', isToggled: false },
  { alarmTime: '09:15 AM', isToggled: true },
  { alarmTime: '06:58 PM', isToggled: false },
  { alarmTime: '08:35 AM', isToggled: true },
  { alarmTime: '12:20 PM', isToggled: false },
  { alarmTime: '09:15 AM', isToggled: true },
  { alarmTime: '06:58 PM', isToggled: false },
  { alarmTime: '08:35 AM', isToggled: true },
  { alarmTime: '12:20 PM', isToggled: false },
  { alarmTime: '09:15 AM', isToggled: true },
  { alarmTime: '06:58 PM', isToggled: false },
];

const AlarmPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Page>
      <Stack direction="column" spacing="8px">
        {alarms.map((a, index) => (
          <AlarmCard
            key={index}
            {...a}
            onToggle={() => null}
            onClick={() => null}
          />
        ))}
      </Stack>
      <Fab color="primary" onClick={() => setIsOpen(true)}>
        <AddAlarm></AddAlarm>
      </Fab>
      <EditAlarmDialog isOpen={isOpen} onCancel={() => setIsOpen(false)} />
    </Page>
  );
};

export default AlarmPage;
