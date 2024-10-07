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
import card2 from "../../assets/img/budsPro.png";

const Carrosel2 = () => {
  return (
    <section>
      <Swiper
        spaceBetween={5}
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
        slidesPerView={2}
        pagination={{
          clickable: false,
        }}
        navigation
        modules={[Autoplay, Pagination, EffectCoverflow, Navigation, A11y]}
        className="mySwiper"
        breakpoints={{
          400: {
            slidesPerView: 1, // exibir 2 slides em telas com 640px ou mais
          },
          768: {
            slidesPerView: 3, // exibir 3 slides em telas com 768px ou mais
          },
          1024: {
            slidesPerView: 4, // exibir 4 slides em telas com 1024px ou mais
          },
        }}
      >
        <SwiperSlide>
          <img src={card1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card2} alt="" />
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
