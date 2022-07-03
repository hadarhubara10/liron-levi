import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { copyToClipboard } from '../../../../helper/copyToClipboard';
import { getAllImages } from '../../../../services/uploadAdminService';
import Tooltip from '../common/Tooltip';

const ImagesList = () => {
  const [clipoardText, setClipoardText] = useState('העתיקי ללוח');

  const [images, setImages] = useState([]);
  useEffect(() => {
    getAllImages()
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div>
      {images.length > 0 && (
        <Grid container spacing={3}>
          {images.map((image) => (
            <Grid key={image.public_id} item xs={4}>
              <Tooltip text={clipoardText} placement="top">
                <img
                  onClick={() => {
                    copyToClipboard(image.secure_url);
                    setClipoardText('הועתק בהצלחה!');
                    setTimeout(() => {
                      setClipoardText('העתיקי ללוח');
                    }, 1000);
                  }}
                  style={{ width: '100%' }}
                  src={image.secure_url}
                  alt={image.public_id}
                />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ImagesList;
