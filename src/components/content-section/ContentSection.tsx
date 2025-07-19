import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ContentSection.css";

export default function ContentSection({ item }: any) {
  return (
    <>
      <div
        className="content"
        style={{
          width: item.title == "Best Of Electronics" ? "82%" : "",
        }}
      >
        <h3>{item.title}</h3>
        <div style={{ marginLeft: "2rem" }}>
          {item.title == "Best Of Electronics" ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 6 },
              }}
            >
              {item.images.map((img: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="details">
                    <img src={img.src} alt={img.name} />
                  </div>
                  <div className="pricing">
                    <p>{img.name}</p>
                    <p>{img.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 7 },
              }}
            >
              {item.images.map((img: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="image-details">
                    <img src={img.src} alt={img.name} />
                  </div>
                  <div className="pricing">
                    <p>{img.name}</p>
                    <p>{img.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
      {item.title == "Best Of Electronics" ? (
        <img
          src="./assets/adv-1.jpg"
          style={{
            width: "15rem",
            height: "22rem",
            float: "right",
            marginTop: "-21rem",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
