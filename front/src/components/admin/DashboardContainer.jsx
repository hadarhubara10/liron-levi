import { Alert, Button, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../services/usersAdminService';
import Loader from '../common/Loader';
import Dashboard from './dashboard/Dashboard';
const DashboardContainer = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('loading');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token)
        .then((res) => {
          console.log(res.data);
          setRole(true);
        })
        .catch((err) => {
          console.log(err.response.data);
          setRole(false);
        });
    } else {
      setRole(false);
    }
  }, []);

  if (role === 'loading') return <Loader />;
  if (!role)
    return (
      <div style={{ textAlign: 'center' }}>
        <Alert
          sx={{ width: { md: '20%', xs: '90%' }, margin: '20px auto' }}
          variant="filled"
          severity="error"
        >
          אין לך הרשאת מנהל!
        </Alert>
        <Button
          onClick={() => {
            navigate('signin');
          }}
          variant="contained"
          sx={{ textDecoration: 'none' }}
        >
          התחבר
        </Button>
      </div>
    );
  return <Dashboard />;
};

export default DashboardContainer;
