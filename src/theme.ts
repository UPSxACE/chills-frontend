import { createTheme } from '@mui/material/styles';

// Setup colors here
export const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#5B0347',
    },
  },
});

// Do overrides here
const theme = createTheme({}, globalTheme);

export default theme;
