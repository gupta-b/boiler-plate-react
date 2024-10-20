
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './swiper.css';
import 'swiper/css';
import { useEffect } from 'react';

export default () => {
  return (
    <Swiper
        className='swiper'
        effect= {"cards"}
        grabCursor= {true}
        initialSlide= {2}
        speed= {500}
        loop= {false}
        rotate= {true}
    //   spaceBetween={50}
    //   slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <img
                class="img-position"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd"
                alt="" />
            <div class="overlay">
                <span>9.5</span>
                <h2>Breaking Bad</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e"
                alt="" />
            <div class="overlay">
                <span>8.1</span>
                <h2>Wednesday</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide  >
            <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6b6ad966-79e1-4d3c-8f92-566d0fee8082"
                alt="" />
            <div class="overlay">
                <span>8.7</span>
                <h2>Stranger Things</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379"
                alt="" />
            <div class="overlay">
                <span>8.5</span>
                <h2>The Queen's Gambit</h2>
            </div>
        </SwiperSlide>
      
    </Swiper>
  );
};