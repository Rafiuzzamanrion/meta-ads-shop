import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper/modules";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import banner1 from '/product-1.png'
import banner2 from '/product-2.png'
import banner3 from '/product-3.png'
import banner4 from '/product-4.png'
import banner5 from '/product-5.png'




const Banner = () => {
    return (
       <section className="mt-28 shadow-xl bg-base-100"data-aos="zoom-out"data-aos-easing="linear"
       data-aos-duration="600">
       
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectFade,A11y]}
        className="mySwiper"
      >
        <SwiperSlide><img className=" object-cover md:h-[680px] w-full " src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" object-cover md:h-[680px] w-full "  src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" object-cover md:h-[680px] w-full "  src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" object-cover md:h-[680px] w-full "  src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" object-cover md:h-[680px] w-full "  src={banner5} alt="" /></SwiperSlide>
        
      </Swiper>
       </section>
    );
};

export default Banner;