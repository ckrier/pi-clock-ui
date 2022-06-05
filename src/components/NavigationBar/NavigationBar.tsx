import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Alarm, MusicNote, Settings } from '@mui/icons-material';

import RouteConstants from '../../types/routes';

const NavigationBar: React.FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <BottomNavigation
      onChange={(_, newTabIndex) => setSelectedTabIndex(newTabIndex)}
      showLabels
      sx={{ bottom: 0, position: 'fixed', width: '100%' }}
      value={selectedTabIndex}
    >
      <BottomNavigationAction
        component={RouterLink}
        icon={<Alarm />}
        label="Alarms"
        to={RouteConstants.ALARMS}
      />
      <BottomNavigationAction
        component={RouterLink}
        icon={<MusicNote />}
        label="Music"
        to={RouteConstants.MUSIC}
      />
      <BottomNavigationAction
        component={RouterLink}
        icon={<Settings />}
        label="Settings"
        to={RouteConstants.SETTINGS}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
