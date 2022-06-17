import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateLuxon from '@mui/lab/AdapterLuxon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { themeOptions } from './components/Theme/Theme';
import AlarmPage from './pages/AlarmPage';
import ClockFacePage from './pages/ClockFacePage';
import RouteConstants from './types/routes';

function App() {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateLuxon}>
        <BrowserRouter>
          <Routes>
            <Route path={RouteConstants.ALARMS} element={<AlarmPage />} />
            <Route path="/clock" element={<ClockFacePage />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
