import "./button.css";
type ButtonProp = {
  label?: string;
  icon: React.ReactNode;
};
export default function Button({ label, icon }: ButtonProp) {
  return (
    <div>
      <button className="button">
        <span style={{ fontSize: "20px" }}>{icon}</span>
        <span style={{ fontSize: "16px" }}>{label}</span>
      </button>
    </div>
  );
}
