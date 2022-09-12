import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay, FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import styleClasses from "./movies.module.scss";
import { Link } from "react-router-dom";
import useResponse from "../jsonResponse/useResponse";

const MoviesItem = ({ img, url, title }) => {
  return (
    <Link to={url} className={styleClasses.list_item}>
      <img data-src={img} className="img-fluid swiper-lazy" alt={title} />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      <span className={styleClasses.play_icon}></span>
    </Link>
  );
};

const MoviesList = () => {
  const { Movies } = useResponse();
  return (
    <div className={styleClasses.banner_wrapper}>
      {Movies &&
        Movies.map((movie) => {
          return (
            <>
              <h2 className={styleClasses.list_title}>{movie.name}</h2>
              <Swiper
                navigation={true}
                slidesPerView={1}
                lazy={true}
                centeredSlides={true}
                freeMode={true}
                loop={true} //used infinite loop due to invalid json
                modules={[Lazy, FreeMode, Autoplay, Navigation]}
                breakpoints={{
                  0: {
                    slidesPerView: 4,
                    spaceBetween: 6,
                  },
                  640: {
                    slidesPerView: 6,
                    spaceBetween: 8,
                  },
                  768: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                  },
                  1199: {
                    slidesPerView: 9,
                    spaceBetween: 10,
                  },
                  1536: {
                    slidesPerView: 11,
                    spaceBetween: 10,
                  },
                }}
                className={`${styleClasses.Swiper_wrap} Swiper-wrap`}
              >
                {movie &&
                  movie.titles.map((list) => {
                    console.log(list);
                    const { url, title } = list.thumbnails["thumb-677x474"];
                    return (
                      <SwiperSlide>
                        <MoviesItem img={url} url="" title={title} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </>
          );
        })}
    </div>
  );
};

export default MoviesList;
