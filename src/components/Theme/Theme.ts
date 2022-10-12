import { ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ed7b84',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9055ff',
      contrastText: '#ffffff',
    },
    background: {
      default: '#220d40',
      paper: '#301d56',
    },
    warning: {
      main: '#fde26c',
    },
    error: {
      main: '#f14658',
    },
    info: {
      main: '#00b3cc',
    },
    success: {
      main: '#d6ff7f',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background:
            'linear-gradient(45deg, rgba(237,123,132,1) 0%, rgba(144,85,255,1) 100%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#220d40',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          background:
            'linear-gradient(45deg, rgba(237,123,132,1) 0%, rgba(144,85,255,1) 100%)',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        track: {
          background:
            'linear-gradient(45deg, rgba(237,123,132,1) 0%, rgba(144,85,255,1) 100%)',
        },
        thumb: {
          backgroundColor: 'white',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 64,
          height: 32,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 2,
          '&.Mui-checked': {
            background: '#9055ff',
            transform: 'translateX(32px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: '#9055ff',
              background:
                'linear-gradient(45deg, rgba(237,123,132,1) 0%, rgba(144,85,255,1) 100%)',
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 28,
          height: 28,
        },
        track: {
          borderRadius: 100,
          border: '1px solid #bdbdbd',
          background: '#fafafa',
          opacity: 0.2,
          transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Chakra Petch',
    // fontWeightLight: 500,
    // fontWeightRegular: 600,
    // fontWeightMedium: 700,
    // fontWeightBold: 900,
  },
};
