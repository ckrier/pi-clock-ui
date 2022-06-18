import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { stopSound } from '../api/soundApi';

const ClockFacePage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
      }}
      onClick={stopSound}
    >
      <h1
        style={{
          color: 'white',
          fontSize: '8rem',
          fontWeight: 700,
        }}
      >
        {DateTime.fromJSDate(currentTime).toLocaleString(DateTime.TIME_SIMPLE)}
      </h1>
    </div>
  );
};

export default ClockFacePage;
