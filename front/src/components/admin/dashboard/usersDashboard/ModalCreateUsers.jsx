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
import { createUser } from '../../../../services/usersAdminService';
// RTL
const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
const ModalCreateUser = ({ open, handleClose, getAllUsersFromServer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data)
      .then((res) => {
        console.log(res.data);
        handleClose();
        getAllUsersFromServer();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  // useEffect(() => {
  // }, [])
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: 'selection',
  //   },
  // ]);
  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Dialog open={open} onClose={handleClose}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <DialogContent>
                <Typography variant="h6" gutterBottom>
                  הוספת לקוח
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="שם מלא *"
                      fullWidth
                      variant="outlined"
                      {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && (
                      <Alert severity="error">* שם מלא הוא שדה חובה</Alert>
                    )}
                  </Grid>
                  {/* <Grid item xs={12} style={{ textAlign: 'center' }}>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
              </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="מספר טלפון *"
                      fullWidth
                      variant="outlined"
                      {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber?.type === 'required' && (
                      <Alert severity="error">* מספר טלפון הוא שדה חובה</Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="אימייל *"
                      fullWidth
                      variant="outlined"
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      })}
                    />
                    {errors.email?.type === 'required' && (
                      <Alert severity="error">* אימייל הוא שדה חובה</Alert>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <Alert severity="error">* אימייל לא תקין</Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="תאריך האירוע *"
                      fullWidth
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      {...register('dateOfEvent')}
                    />
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

export default ModalCreateUser;
