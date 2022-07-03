import React from 'react';
import '../../scss/home.scss';
import AboutMe from './AboutMe';
import Carousel from './Carousel';
import MyTechnique from './MyTechnique';
const Home = () => {
  return (
    <div>
      <div className="background-image"></div>
      <br />
      <AboutMe />
      <br />

      <MyTechnique />
      <br />
      <hr style={{ borderColor: 'var(--color-pink)' }} />
      <Carousel />
    </div>
  );
};

export default Home;
