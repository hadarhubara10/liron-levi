import React, { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Alert, Box, Button, Slide, Snackbar, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { copyToClipboard } from '../../../../helper/copyToClipboard';
import Tooltip from '../../dashboard/common/Tooltip';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    cursor: pointer;
  }
`;
const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const UploadImage = () => {
  const [clipoardText, setClipoardText] = useState('העתיקי ללוח');
  const [open, setOpen] = useState(false);
  const [pathImage, setPathImage] = useState(null);
  const [urlImage, setUrlImage] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'hubara',
      apiKey: '452952826474925',
      apiSecret: '1ROcoOfQlE0D-iGjHXD468gzBGA',
    },
  });

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'hubara',
        uploadPreset: 'upload',
        folder: 'liron-levi',
        cropping: true,
        showSkipCropButton: true,
      },
      (error, result) => {
        if (error) console.log(error);
        if (!error && result && result.event === 'success') {
          const myImage = cld.image(result.info.public_id);
          setUrlImage(myImage);
          setPathImage(result.info.secure_url);
          handleClick();
        }
      }
    );
    widget.open();
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button variant="contained" onClick={showWidget}>
        העלאת תמונה &nbsp;&nbsp;
        <AddPhotoAlternateIcon />
      </Button>
      <br />
      <br />
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          {pathImage && (
            <>
              <Tooltip text={clipoardText} placement="bottom">
                <StyledTextField
                  onClick={() => {
                    copyToClipboard(pathImage);
                    setClipoardText('הועתק בהצלחה!');
                    setTimeout(() => {
                      setClipoardText('העתיקי ללוח');
                    }, 3000);
                  }}
                  style={{ cursor: 'pointer' }}
                  label="נתיב התמונה - לחצי להעתקה"
                  defaultValue={pathImage}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Tooltip>
              <br />
              <br />
              <AdvancedImage cldImg={urlImage} />
            </>
          )}
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            TransitionComponent={(props) => <Slide {...props} direction="up" />}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              &nbsp; התמונה הועלתה בהצלחה! &nbsp;
            </Alert>
          </Snackbar>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
};

export default UploadImage;
