import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const NavbarAdmin = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const handleClickLogout = (event) => {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    navigate('signin');
  };

  return (
    <div>
      <AppBar
        open={open}
        // sx={{ width: 'calc(100vw - 170px)', marginRight: '170px' }}
        position="absolute"
      >
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginLeft: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            לוח ניהול
          </Typography>
          <IconButton color="inherit">
            <Logout handleClickLogout={handleClickLogout} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarAdmin;
