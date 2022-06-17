import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { AddAlarm } from '@mui/icons-material';

import Page from '../components/Page/Page';
import AlarmCard from '../components/AlarmCard/AlarmCard';
import Fab from '../components/Fab/Fab';
import EditAlarmDialog from '../components/EditAlarmDialog/ConfigureAlarmDialog';

import { AlarmConfiguration } from '../types/alarmConfiguration';
import {
  createAlarm,
  deleteAlarm,
  getAlarms,
  updateAlarm,
} from '../api/alarmApi';
import { DateTime } from 'luxon';

const AlarmPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAlarm, setCurrentAlarm] = useState<AlarmConfiguration | null>(
    null
  );
  const [alarms, setAlarms] = useState<AlarmConfiguration[]>([]);

  useEffect(() => {
    const storeAlarms = async () => {
      setAlarms(await getAlarms());
    };

    storeAlarms();
  }, []);

  return (
    <Page hasNav>
      <Stack direction="column" spacing="8px">
        {alarms.map((a, index) => (
          <AlarmCard
            key={index}
            {...a}
            onToggle={async (isEnabled) => {
              const updated = await updateAlarm({
                ...a,
                enabled: isEnabled,
              });

              setAlarms(
                alarms.map((al) => {
                  if (al.id === updated.id) {
                    return updated;
                  }

                  return al;
                })
              );
            }}
            onClick={(e) => {
              setCurrentAlarm(a);
              setIsOpen(true);
            }}
          />
        ))}
      </Stack>
      <Fab color="primary" onClick={() => setIsOpen(true)}>
        <AddAlarm></AddAlarm>
      </Fab>
      <EditAlarmDialog
        defaultDate={
          currentAlarm
            ? DateTime.fromObject({
                hour: currentAlarm.hour,
                minute: currentAlarm.minute,
              }).toJSDate()
            : undefined
        }
        defaultSchedule={currentAlarm ? currentAlarm.schedule : undefined}
        isOpen={isOpen}
        onCancel={() => {
          setCurrentAlarm(null);
          setIsOpen(false);
        }}
        onSave={async (date, schedule) => {
          const dt = DateTime.fromJSDate(date);
          if (currentAlarm) {
            await updateAlarm({
              ...currentAlarm,
              hour: dt.hour,
              minute: dt.minute,
              schedule: schedule && schedule.length > 0 ? schedule : undefined,
            });
          } else {
            await createAlarm(dt.hour, dt.minute, schedule);
          }

          setCurrentAlarm(null);
          setAlarms(await getAlarms());
          setIsOpen(false);
        }}
        onDelete={async () => {
          if (currentAlarm) {
            await deleteAlarm(currentAlarm?.id);
            setCurrentAlarm(null);
            setAlarms(await getAlarms());
            setIsOpen(false);
          }
        }}
      />
    </Page>
  );
};

export default AlarmPage;
