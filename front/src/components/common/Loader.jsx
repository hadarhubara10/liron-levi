import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'block',
        textAlign: 'center',
        height: 'calc(100vh - 310px) ',
        width: '100%',
      }}
    >
      <CircularProgress
        style={{ position: 'absolute', top: '40%', color: 'var(--color-pink)' }}
      />
    </Box>
  );
};

export default Loader;
