import React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { Divider, IconButton, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItem from './MainListItem';
import SecondaryListItems from './SecondaryListItems';

const SidebarAdmin = () => {
  return (
    <div style={{ width: '170px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      ></Toolbar>
      <Divider />
      <List>
        <MainListItem />
      </List>
      <Divider />
      <List>
        <SecondaryListItems />
      </List>
    </div>
  );
};

export default SidebarAdmin;
