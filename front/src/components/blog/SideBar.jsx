import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SideBar = ({ onClickCategory }) => {
  const [value, setValue] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sideBarDisplay, setSideBarDisplay] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // SideBarDisplay - if height okay - bottom - 0; else - bottom - 100%
  useEffect(() => {
    if (
      document.documentElement.offsetHeight - window.pageYOffset <=
      450 + window.innerHeight
    ) {
      setSideBarDisplay(false);
    } else if (
      document.documentElement.offsetHeight - window.pageYOffset >=
      150 + window.innerHeight
    ) {
      setSideBarDisplay(true);
    }
  }, [scrollPosition]);

  return (
    // medium +
    <>
      <Paper
        elevation={0}
        sx={{
          display: { xs: 'none', md: 'inline' },
          width: '80%',
          backgroundColor: 'rgb(248, 249, 250)',
          padding: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'normal', marginBottom: 5 }}>קטגוריות</h1>
        <hr
          style={{
            height: '1px',
            border: 0,
            opacity: 0.25,
            color: 'black',
            backgroundColor: 'black',
          }}
        />
        <Box style={{ textAlign: 'right' }}>
          <Button
            onClick={() => onClickCategory('all')}
            color="inherit"
            className="btn-category"
            style={{ justifyContent: 'flex-start' }}
          >
            <HomeIcon /> &nbsp; הכל
          </Button>
          <br />
          <Button
            onClick={() => onClickCategory('makeup')}
            color="inherit"
            className="btn-category"
            style={{ justifyContent: 'flex-start' }}
          >
            <BrushIcon /> &nbsp; איפור
          </Button>
          <br />
          <Button
            onClick={() => onClickCategory('recommendedProduct')}
            color="inherit"
            className="btn-category"
            style={{ justifyContent: 'flex-start' }}
          >
            <ShoppingCartIcon /> &nbsp; מוצרים מומלצים
          </Button>
        </Box>
      </Paper>
      {/* xs - Mobile */}
      {/* Navigation */}
      <Box
        sx={{
          width: '100vw',
          position: 'fixed',
          transition: '1s',
          bottom: sideBarDisplay ? 0 : '-100%',
          mt: 30,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => onClickCategory('all')}
            label="הכל"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            onClick={() => onClickCategory('makeup')}
            label="איפור"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            onClick={() => onClickCategory('recommendedProduct')}
            label="מוצרים מומלצים"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default SideBar;
