import "./ContentSection.css";
export default function ContentSection(prop) {
  console.log(prop);
  return (
    <div className="content">
      {prop.item.title}
      <div>
        {prop.item.images.map((item) => {
          return <img src={item} />;
        })}
      </div>
    </div>
  );
}
