import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import * as serviceWorker from './service-worker';
import { store } from 'redux/store';

import App from 'app';
import { theme } from 'utils/theme';

const rootElement = document.getElementById('root');
const rootReact = createRoot(rootElement as HTMLElement);

rootReact.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={1000}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
