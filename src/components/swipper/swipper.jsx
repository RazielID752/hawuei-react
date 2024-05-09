import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Pagination, Navigation,  A11y } from 'swiper/modules';
import style from "../swipper/swipper.module.css";
import Slide1 from "../../assets/img/Frame 1.png";
import Slide2 from "../../assets/img/Frame 2.png";
import Slide3 from "../../assets/img/Frame 3.png";
import Video1 from "../../assets/img/huawei-freebuds-pro-3-product-video.mp4";


const Swipper = () => {
  return (
    <section className={style.swipper}>
      <div className={style.swipperWrapper}>
      <Swiper 
      spaceBetween={20}
      effect={'fade'}
      autoplay={{
        delay: 5500,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      pagination={{
        clickable: false,
      }}
      navigation
      modules={[Autoplay, EffectFade, Pagination, Navigation, A11y]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper">
        <SwiperSlide>
          <img src={Slide2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className={style.SlideVideo}>
          <video className={style.VideoSlide} src={Video1} autoPlay muted loop></video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt=""/>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default Swipper;
