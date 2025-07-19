import { useState } from "react";
import Button from "../button/button";
import { MdStorefront } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img src="/assets/logo.svg" />

      <div className="navbar-controls">
        <input type="text" placeholder="Search for Products, Brands and More" />

        <div className="navbar-buttons desktop-only">
          <Button label="Login" icon={<FaRegCircleUser />} />
          <Button label="Cart" icon={<IoCartOutline />} />
          <Button label="Become a Seller" icon={<MdStorefront />} />
        </div>

        <div
          className="hamburger mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Button label="Login" icon={<FaRegCircleUser />} />
          <Button label="Cart" icon={<IoCartOutline />} />
          <Button label="Become a Seller" icon={<MdStorefront />} />
        </div>
      )}
    </div>
  );
}
