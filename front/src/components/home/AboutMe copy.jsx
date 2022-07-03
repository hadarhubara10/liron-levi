import React from 'react';
import Grid from '@mui/material/Grid';
import '../../scss/home.scss';
import model1 from '../../images/model1.jpg';
import makeupVideo from '../../images/Sweet.mp4';
import { Box } from '@mui/material';
const AboutMe = () => {
  return (
    <Grid
      container
      // maxWidth="xl"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={10} md={4}>
        <h1 className="grid-center">קצת עליי</h1>
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
          סיט אמט, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
          נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים
          תוק, הדש שנרא התידם הכייר וק. לורם איפסום דולור סיט אמט, קונסקטורר
          <br />
          <br />
          אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
          וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
          בעליק. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר
          בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
          ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="grid-center">
        {/* xs - 6 */}
        <img src={model1} alt="model" width="40%" className="border-img" />
      </Grid>
      {/* Video */}
      <Grid className="video grid-center" item xs={12} md={12}>
        {/* xs - 6 */}
        <video
          width="300px"
          height="300px"
          src={makeupVideo}
          autoPlay
          loop
          muted
        ></video>
        <Box
          component="span"
          sx={{ display: { xs: 'none', md: 'none', lg: 'inline' } }}
        >
          <video
            style={{ margin: '0 100px' }}
            width="300px"
            height="300px"
            src={makeupVideo}
            autoPlay
            loop
            muted
          ></video>
          <video
            width="300px"
            height="300px"
            src={makeupVideo}
            autoPlay
            loop
            muted
          ></video>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
