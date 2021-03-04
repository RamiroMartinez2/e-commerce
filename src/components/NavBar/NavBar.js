import React, { useState } from "react";
import "./NavBar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="header-container">
        <div className="cart">
          <CartWidget className="cart" />
        </div>

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
      </header>
    </>
  );
};
