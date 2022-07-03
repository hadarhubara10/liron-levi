import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TooltipMUI from '@mui/material/Tooltip';

const Tooltip = ({ text, placement, children }) => {
  return (
    <TooltipMUI arrow title={text} placement={placement}>
      {children}
    </TooltipMUI>
  );
};
export default Tooltip;
