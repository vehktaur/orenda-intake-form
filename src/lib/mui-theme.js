import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: 'red',
        },
        root: {
          color: '#000',
          fontWeight: 500,
        },
        error: {
          color: '#000',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#000',
          textAlign: 'center',
        },
      },
    },
  },
});

export default theme;
