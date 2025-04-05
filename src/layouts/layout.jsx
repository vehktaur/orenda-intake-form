import { ThemeProvider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import theme from '../lib/mui-theme';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <Outlet />

      <Toaster />
    </ThemeProvider>
  );
};
export default Layout;
