import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateLuxon from '@mui/lab/AdapterLuxon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';
import { themeOptions } from './components/Theme/Theme';
import AlarmPage from './pages/AlarmPage';
import RouteConstants from './types/routes';

function App() {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateLuxon}>
        <BrowserRouter>
          <Routes>
            <Route path={RouteConstants.ALARMS} element={<AlarmPage />} />
          </Routes>
          <NavigationBar />
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
