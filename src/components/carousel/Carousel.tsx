import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "./assets/carousel/carousel-1.jpg",
    "./assets/carousel/carousel-2.jpg",
    "./assets/carousel/carousel-3.jpg",
    "./assets/carousel/carousel-1.jpg",
    "./assets/carousel/carousel-2.jpg",
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="carousel-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
