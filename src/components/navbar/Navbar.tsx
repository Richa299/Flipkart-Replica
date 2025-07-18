import Button from "../button/button";
import "./Navbar.css";
import { MdStorefront } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="/assets/logo.svg" />

      <input type="text" placeholder="Search for Products, Brands and More" />

      <Button label="Login" icon={<FaRegCircleUser />} />
      <Button label="Cart" icon={<IoCartOutline />} />
      <Button label="Become a Seller" icon={<MdStorefront />} />
    </div>
  );
}
