import "./Card.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
type Images = {
  title: string;
  src: string;
  other: string;
};
type ItemProps = {
  title: string;
  images: Images[];
};
type CardProps = {
  item: ItemProps;
};
export default function Card({ item }: CardProps) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>{item.title}</h4>
        <IoIosArrowDroprightCircle
          style={{ color: "blue", width: "2rem", height: "2rem" }}
        />
      </div>
      <div className="card-image-grid">
        {item.images.map((item: Images) => {
          return (
            <div className="image-container">
              <img src={item.src} />
              <div className="details">
                <p>{item.title}</p>
                <p>{item.other}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
