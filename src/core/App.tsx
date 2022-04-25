import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { I18nextProvider } from 'react-i18next';

import Router from './Router';

import i18n from './i18n';

const theme = createTheme({
  palette: {
    background: {
      default: '#F5F5F5',
      paper: '#FCFCFC',
    },
    primary: {
      main: '#1E1E21',
    },
    secondary: {
      main: '#387FD8',
    },
    error: {
      main: '#E84242',
    },
    success: {
      main: '#2E9B54',
    },
    warning: {
      main: '#E3783E',
    },
    common: {
      white: '#EDEDED',
    },
    text: {
      primary: '#3D3D3D',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Roboto',
    },
  },
});

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
