import { Grid } from '@mui/material';
import React from 'react';
import model1 from '../../images/model1.jpg';

const MyTechnique = () => {
  return (
    <Grid
      container
      // maxWidth="xl"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        xs={3}
        md={3}
        sx={{ display: { xs: 'none', md: 'inline' } }}
        className="grid-center"
      >
        <img src={model1} alt="model" width="50%" className="border-img" />
      </Grid>
      <Grid item xs={6} md={4} className="grid-center">
        <h1>השיטה שלי</h1>
        <p>
          קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף הועניב היושבב שערש
          שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ
          אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
        </p>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: { xs: 'inline', md: 'none' } }}
        style={{ textAlign: 'left' }}
      >
        <img src={model1} alt="model" width="80%" className="border-img" />
      </Grid>
    </Grid>
  );
};

export default MyTechnique;
