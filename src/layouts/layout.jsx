import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import theme from '../lib/mui-theme';

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </>
  );
};
export default Layout;
