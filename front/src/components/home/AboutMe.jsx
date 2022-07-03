import React from 'react';
import Grid from '@mui/material/Grid';
import '../../scss/home.scss';
import model1 from '../../images/model1.jpg';
import makeupVideo from '../../images/Sweet.mp4';
import Button from '@mui/material/Button';

import { Box } from '@mui/material';
const AboutMe = () => {
  const scrollContact = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  };
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
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: '305px',
          backgroundColor: 'var(--color-pink)',
          textAlign: 'center',
        }}
      >
        <Box
          // alignItems="center"
          // justifyContent="center"
          sx={{
            border: '1px solid white',
            borderRadius: '10px',
            height: '60%',
            width: '90%',
            margin: '50px auto',
            color: 'white',
          }}
        >
          <h1>מעוניינת באיפור לאירוע ?</h1>
          <p>בואי לבדוק אם אני פנויה בתאריך שלך ולדבר איתי!</p>
          <Button
            className="paper-contact"
            variant="contained"
            onClick={scrollContact}
          >
            לפרטים נוספים לחצי כאן
          </Button>
        </Box>
      </Grid>
      {/* Video */}
      <Grid className="video grid-center" item xs={12} md={6}>
        {/* xs - 6 */}
        <video
          width="300px"
          // height="300px"
          src={makeupVideo}
          autoPlay
          loop
          muted
        ></video>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
