import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import model3 from '../../images/model3.jpg';
import model4 from '../../images/model4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import { Box } from '@mui/material';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const Carousel = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '40%' },
        margin: '0 auto',
      }}
    >
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={model3} alt="model3" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={model4} alt="model3" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={model3} alt="model3" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={model4} alt="model3" width="100%" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Carousel;
