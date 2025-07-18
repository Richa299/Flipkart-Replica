import "./Category.css";
const dummyCategoryData = [
  { name: "Grocery", image: "/assets/grocery.png" },
  { name: "Mobiles", image: "/assets/mobiles.png" },
  { name: "Fashion", image: "/assets/fashion.png" },
  { name: "Electronics", image: "/assets/electronics.png" },
  { name: "Home & Furniture", image: "/assets/furniture.webp" },
  { name: "Appliances", image: "/assets/appliances.jpg" },
  { name: "Flight Bookings", image: "/assets/flight.png" },
  { name: "Beauty, Toys & More", image: "/assets/toys.webp" },
  { name: "Two Wheelers", image: "/assets/two-wheeler.webp" },
];
export default function Category() {
  return (
    <div className="category">
      {dummyCategoryData.map((item) => (
        <div>
          <img src={item.image} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
