import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

/**
 * MUI theme configuration for superrustico.com
 * Adjust palette and typography as needed for branding.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#222',
    },
    secondary: {
      main: '#ff9800',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
      paper: '#111',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme; 