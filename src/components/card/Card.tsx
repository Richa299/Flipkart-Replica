import "./Card.css";
export default function Card(prop) {
  return (
    <div className="card">
      <h4>{prop.item.title}</h4>
      <div>
        {prop.item.images.map((item) => {
          return <img src={item} />;
        })}
      </div>
    </div>
  );
}
