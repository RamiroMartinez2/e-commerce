import React, { useState } from "react";
import "./NavBar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="menu-button"
        onClick={() => {
          handleMenuButtonClick();
        }}
      >
        {open ? (
          <RiCloseLine className="burger" />
        ) : (
          <GiHamburgerMenu className="burger" />
        )}
      </div>
      <nav className={`nav ${open ? "show" : ""}`}>
        <ul className="menu-items">
          <li>iPhone</li>
          <li>iPad</li>
          <li>Mac</li>
          <li>Watch</li>
          <li>Accesorios</li>
        </ul>
      </nav>
    </>
  );
};
