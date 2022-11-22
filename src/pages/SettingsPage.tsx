import React from 'react';

import { Button } from '@mui/material';
import { VpnKey } from '@mui/icons-material';

import Page from '../components/Page/Page';

const SettingsPage: React.FC = () => {
  return (
    <Page hasNav>
      <Button
        color="primary"
        startIcon={<VpnKey />}
        fullWidth
        href={`http://${process.env.REACT_APP_MACHINE_IP}:5000/sounds/login`}
        size="large"
        variant="contained"
      >
        Login to Spotify
      </Button>
    </Page>
  );
};

export default SettingsPage;
