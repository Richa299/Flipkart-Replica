import "./button.css";
type ButtonProp = {
  label?: string;
  icon: React.ReactNode;
  hover?: boolean;
};
export default function Button({ label, icon, hover }: ButtonProp) {
  return (
    <div>
      <button className={hover ? "default-button" : "button"}>
        <span style={{ fontSize: "20px" }}>{icon}</span>
        <span style={{ fontSize: "16px", marginLeft: "12px" }}>{label}</span>
      </button>
    </div>
  );
}
