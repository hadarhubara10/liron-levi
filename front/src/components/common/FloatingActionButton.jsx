import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const actions = [
  {
    icon: <WhatsAppIcon fontSize="large" sx={{ color: '#4CAF50' }} />,
    name: 'WhatsApp',
  },
  {
    icon: <FacebookOutlinedIcon fontSize="large" color="primary" />,
    name: 'Facebook',
  },
  { icon: <InstagramIcon fontSize="large" />, name: 'Instagram' },
  // { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sideBarDisplay, setSideBarDisplay] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // useEffect(() => {
  //   window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  // }, []);
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

  const handleClick = (name) => {
    switch (name) {
      case 'WhatsApp':
        window.open(
          'https://wa.me/972526411604?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%94%D7%90%D7%99%D7%A4%D7%95%D7%A8%20%3A)',
          '_blank'
        );
        break;
      case 'Facebook':
        window.open('https://www.facebook.com/liron.levii', '_blank');
        break;
      case 'Instagram':
        window.open('https://www.instagram.com/lironlevii_/', '_blank');
        break;
      default:
        break;
    }
  };
  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <SpeedDial
        ariaLabel="Social media"
        sx={{
          position: 'fixed',
          transition: '1s',
          bottom: sideBarDisplay ? 56 : 19.5,
          left: 10,
        }}
        icon={<MessageIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => handleClick(action.name)}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
