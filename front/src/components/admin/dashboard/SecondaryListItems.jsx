import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { useNavigate } from 'react-router-dom';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const SecondaryListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ListSubheader sx={{ textAlign: 'center', marginRight: '100px' }}>
        {/* can to write some title of list component */}
      </ListSubheader>
      <ListItem button onClick={() => navigate('upload')}>
        <ListItemIcon>
          <AddPhotoAlternateIcon />
        </ListItemIcon>
        <ListItemText primary="העלאת תמונה" />
      </ListItem>
      <ListItem button onClick={() => navigate('images')}>
        <ListItemIcon>
          <ImageSearchIcon />
        </ListItemIcon>
        <ListItemText primary="תמונות אחרונות" />
      </ListItem>
    </div>
  );
};
export default SecondaryListItems;
