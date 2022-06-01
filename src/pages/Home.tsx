import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // 추가
import Header from '../components/Header';
import './Home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export default function Home() {
  return (
    <>
      <section className="home_main">
        <Swiper
          className="swiper"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          scrollbar={{ draggable: true }}
          loop={true}
          // onSlideChange={() => console.log('change')}
        >
          <SwiperSlide className="swiper-slide">
            <img src="/images/banner_top_img1.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/banner_top_img2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/banner_top_img3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/banner_top_img4.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
