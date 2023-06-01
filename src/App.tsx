import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { theme } from '@styles/theme';
import MainRoutes from '@routes/MainRoutes';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst={true}>
        <CssBaseline />
        <RouterProvider router={MainRoutes} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
