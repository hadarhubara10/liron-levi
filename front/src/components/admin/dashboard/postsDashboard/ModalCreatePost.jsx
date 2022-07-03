import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { createPost } from '../../../../services/postsAdminService';
// RTL
const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
const ModalCreatePost = ({ open, handleClose, getAllPostsFromServer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createPost(data)
      .then((res) => {
        console.log(res.data);
        handleClose();
        getAllPostsFromServer();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Dialog open={open} onClose={handleClose}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <DialogContent>
                <Typography variant="h6" gutterBottom>
                  הוספת פוסט
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="כותרת *"
                      fullWidth
                      variant="outlined"
                      {...register('title', { required: true })}
                    />
                    {errors.title?.type === 'required' && (
                      <Alert severity="error">* כותרת הוא שדה חובה</Alert>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="תמונה *"
                      fullWidth
                      variant="outlined"
                      {...register('img', { required: true })}
                    />
                    {errors.img?.type === 'required' && (
                      <Alert severity="error">* תמונה הוא שדה חובה</Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="קטגוריה *"
                      fullWidth
                      variant="outlined"
                      {...register('category', {
                        required: true,
                      })}
                    />
                    {errors.category?.type === 'required' && (
                      <Alert severity="error">* קטגוריה הוא שדה חובה</Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="תוכן מקדים *"
                      fullWidth
                      variant="outlined"
                      {...register('previewContent', {
                        required: true,
                      })}
                    />
                    {errors.previewContent?.type === 'required' && (
                      <Alert severity="error">* תוכן מקדים הוא שדה חובה</Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="file"
                      label="תוכן בתוך הפוסט *"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      {...register('contentsInPost', {
                        required: true,
                      })}
                    />
                    {errors.contentsInPost?.type === 'required' && (
                      <Alert severity="error">
                        * תוכן בתוך הפוסט הוא שדה חובה
                      </Alert>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained">
                      צרי לקוח
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
              {/* </form> */}
            </Box>
          </Dialog>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};

export default ModalCreatePost;
