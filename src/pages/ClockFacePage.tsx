import {
  AlarmOffOutlined,
  AlarmOnOutlined,
  AlarmOutlined,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { getAlarms } from '../api/alarmApi';
import { stopSound } from '../api/soundApi';
import { AlarmConfiguration } from '../types/alarmConfiguration';
import {
  formatHour,
  formatMinute,
  formatTime,
  getAmPm,
  getNextScheduledDay,
  isScheduledTomorrow,
  isToday,
  toDateTime,
} from '../util/timeHelpers';

const ClockFacePage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.now());
  const [alarms, setAlarms] = useState<AlarmConfiguration[]>([]);

  useEffect(() => {
    const storeAlarms = async () => {
      setAlarms(await getAlarms());
    };

    storeAlarms();

    const updateInterval = setInterval(
      () => setCurrentTime(DateTime.now()),
      1000
    );

    const refreshInterval = setInterval(
      async () => setAlarms(await getAlarms()),
      1000 * 30
    );

    return () => {
      clearInterval(updateInterval);
      clearInterval(refreshInterval);
    };
  }, []);

  const getNextAlarm = () => {
    const enabled = alarms.filter((a) => a.enabled);

    if (enabled.length === 0) {
      return (
        <>
          <AlarmOffOutlined color="disabled" fontSize="medium" />
          <span style={{ fontSize: 20 }}>No upcoming alarms</span>
        </>
      );
    }

    enabled.sort((a, b) => {
      const dtA = toDateTime(a);
      const dtB = toDateTime(b);

      return dtA.diff(dtB, 'minutes').minutes;
    });

    const first = enabled[0];
    const time = `${formatTime(first.hour, first.minute)} ${getAmPm(
      first.hour
    )}`;

    if (isToday(first)) {
      return (
        <>
          <AlarmOnOutlined color="success" fontSize="medium" />
          <span style={{ fontSize: 20 }}>Today - {time}</span>
        </>
      );
    } else if (first.schedule && isScheduledTomorrow(first.schedule)) {
      return (
        <>
          <AlarmOnOutlined color="success" fontSize="medium" />
          <span style={{ fontSize: 20 }}>Tomorrow - {time}</span>
        </>
      );
    } else if (first.schedule) {
      return (
        <>
          <AlarmOutlined color="secondary" fontSize="medium" />
          <span style={{ fontSize: 20 }}>{`${getNextScheduledDay(
            first.schedule
          )} - ${time}`}</span>
        </>
      );
    } else {
      return (
        <>
          <AlarmOnOutlined color="success" fontSize="medium" />
          <span style={{ fontSize: 20 }}>Tomorrow - {time}</span>
        </>
      );
    }
  };

  const timeStyles = {
    color: 'white',
    fontSize: '128px',
    fontWeight: 700,
    lineHeight: '128px',
  };

  const infoStyles = {
    color: 'white',
    fontSize: '32px',
    fontWeight: 600,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
      }}
      onClick={stopSound}
    >
      <div>
        <Stack direction="row">
          <span style={timeStyles}>{formatHour(currentTime.hour)}</span>
          <span style={timeStyles}>:</span>
          <span style={timeStyles}>{formatMinute(currentTime.minute)}</span>
          <Stack padding="8px" justifyContent="space-evenly">
            <div style={infoStyles}>{getAmPm(currentTime.hour)}</div>
            <div style={infoStyles}>{currentTime.weekdayShort}</div>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          alignSelf="start"
          spacing="8px"
        >
          {getNextAlarm()}
        </Stack>
      </div>
    </div>
  );
};

export default ClockFacePage;
