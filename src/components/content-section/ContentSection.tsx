import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ContentSection.css";
import { FaChevronRight } from "react-icons/fa";

export default function ContentSection({ item }: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 900);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      <div
        className="content"
        style={{
          width:
            item.title === "Best Of Electronics" && !isMobile ? "80%" : "100%",
        }}
      >
        <h3>{item.title}</h3>
        <div className="content-body">
          {!isMobile ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2.5 },
                900: {
                  slidesPerView: item.title === "Best Of Electronics" ? 3 : 5,
                },
                1024: {
                  slidesPerView: item.title === "Best Of Electronics" ? 5 : 6,
                },
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
          ) : (
            <div className="mobile-list">
              {item.images.map((img: any, index: number) => (
                <div key={index} className="mobile-list-item">
                  <div className="mobile-left">
                    <img src={img.src} alt={img.name} />
                    <div>
                      <p className="mobile-name">{img.name}</p>
                      <p className="mobile-price">{img.price}</p>
                    </div>
                  </div>
                  <FaChevronRight className="arrow-icon" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!isMobile && item.title === "Best Of Electronics" && (
        <img
          src="./assets/adv-1.jpg"
          style={{
            width: "12rem",
            height: "20rem",
            float: "right",
            marginTop: "-21rem",
          }}
        />
      )}
    </>
  );
}
