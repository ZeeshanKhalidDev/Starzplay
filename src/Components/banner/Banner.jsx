import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styleClasses from "./banner.module.scss";
import { Link } from "react-router-dom";
import useResponse from "../jsonResponse/useResponse";

const BannerComponent = ({}) => {
  const { bannerData } = useResponse();
  console.log(bannerData);
  return (
    <div className={`${styleClasses.banner_wrapper} mb-5`}>
      <Swiper
        navigation={true}
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true} //used infinite loop due to invalid
        modules={[Autoplay, Navigation]}
        className={`${styleClasses.Swiper_wrap} Swiper-wrap`}
      >
        {bannerData &&
          bannerData.titles.map((banner, index) => {
            const { url, width, title } = banner.thumbnails["thumb-613x1536"];
            return (
              <SwiperSlide key={index}>
                <Link to="/" className={styleClasses.banner_link}>
                  <img
                    src={url}
                    width={width}
                    className="img-fluid"
                    alt={title}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default BannerComponent;
