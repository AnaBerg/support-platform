import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { I18nextProvider } from "react-i18next";

import Router from "./Router";

import i18n from "./i18n";
import { palette, typography, components } from "./globalStyles";

const theme = createTheme({
  palette,
  typography,
  components,
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
