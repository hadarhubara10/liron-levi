import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import { useNavigate } from 'react-router-dom';

const MainListItem = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="לוח ניהול" onClick={() => navigate('/admin')} />
      </ListItem>
      <ListItem button onClick={() => navigate('users')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="לקוחות" />
      </ListItem>
      <ListItem button onClick={() => navigate('posts')}>
        <ListItemIcon>
          <HouseboatIcon />
        </ListItemIcon>
        <ListItemText primary="פוסטים" />
      </ListItem>
    </div>
  );
};

export default MainListItem;
