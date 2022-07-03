import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import '../../scss/contact.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useForm } from 'react-hook-form';
import { createUser, getAllUsers } from '../../services/usersService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// RTL
const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const registerSuccess = () =>
    toast.success('תודה רבה, אצור קשר בהקדם !', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  useEffect(() => {
    // getAllUsers();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data)
      .then((res) => {
        console.log(res);
        registerSuccess();
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="contact">
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container maxWidth="lg" style={{ margin: '0 auto' }}>
              <Grid item xs={12}>
                <h1 style={{ fontWeight: 'normal' /* , opacity: '1' */ }}>
                  לפרטים נוספים וכל מה שתרצי לדעת - בואי נדבר !
                </h1>
              </Grid>
              <Grid item xs={12} md={4} className="grid-input">
                <TextField
                  className="text-field"
                  id="filled-basic"
                  label="שם מלא *"
                  error={errors.name ? true : false}
                  variant="filled"
                  {...register('name', {
                    required: true,
                  })}
                />
                {errors.name?.type === 'required' && (
                  <span style={{ color: 'red' }}>שם מלא הוא שדה חובה *</span>
                )}
              </Grid>
              <Grid item xs={12} md={4} className="grid-input">
                <TextField
                  className="text-field"
                  id="filled-basic"
                  label="מספר טלפון *"
                  error={errors.phoneNumber ? true : false}
                  variant="filled"
                  type="tel"
                  {...register('phoneNumber', {
                    required: true,
                    pattern:
                      /^0(?:[234689]|5[0-689]|7[246789])(?![01])(\d{7})$/,
                  })}
                />
                {errors.phoneNumber?.type === 'required' && (
                  <span style={{ color: 'red' }}>
                    מספר טלפון הוא שדה חובה *
                  </span>
                )}
                {errors.phoneNumber?.type === 'pattern' && (
                  <span style={{ color: 'red' }}>מספר טלפון לא תקין *</span>
                )}
              </Grid>
              <Grid item xs={12} md={4} className="grid-input">
                <TextField
                  variant="filled"
                  className="text-field"
                  error={errors.email ? true : false}
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  })}
                  label="מייל *"
                  name="email"
                  autoComplete="email"
                />
                {errors.email?.type === 'required' && (
                  <span style={{ color: 'red' }}>מייל הוא שדה חובה *</span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span style={{ color: 'red' }}>מייל לא תקין *</span>
                )}
              </Grid>
              <Grid item xs={12} md={4} className="grid-input">
                <TextField
                  type="date"
                  className="text-field"
                  id="filled-basic"
                  label="תאריך האירוע"
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register('dateOfEvent')}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Button
                  type="submit"
                  className="paper-contact"
                  variant="contained"
                  style={{ width: '98%', height: '56px' }}
                >
                  אשמח ליצירת קשר
                </Button>
              </Grid>
            </Grid>
            <br />
          </Box>
          <ToastContainer rtl={true} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Contact;
