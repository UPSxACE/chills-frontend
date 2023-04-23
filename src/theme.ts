import { createTheme } from '@mui/material/styles';

// Setup colors here
export const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#58419f',
    },
  },
});

// Do overrides here
const theme = createTheme({}, globalTheme);

export default theme;
