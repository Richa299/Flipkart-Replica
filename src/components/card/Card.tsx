import "./Card.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Card({ item }) {
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          rowGap: "5px",
        }}
      >
        {item.images.map((item) => {
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
