import { Swiper, SwiperSlide } from "swiper/react";
import style from "../carrosel2/carrosel2.module.css";

import {
  Autoplay,
  Pagination,
  Navigation,
  A11y,EffectCoverflow
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import card1 from "../../assets/img/card1.png";

const Carrosel2 = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={3}
        pagination={{
          clickable: false,
        }}
        navigation
        modules={[Autoplay, Pagination, EffectCoverflow, Navigation, A11y]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={card1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.SlideVideo}>
          <img src={card1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card1} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carrosel2;
