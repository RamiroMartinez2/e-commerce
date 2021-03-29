import React, { useState } from "react";
import "./NavBar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="header-container">
        <div className={`cart ${open ? "position-cart" : ""}`}>
          <CartWidget />
        </div>

        <div
          className="menu-button"
          onClick={() => {
            handleMenuButtonClick();
          }}
        >
          {open ? (
            <RiCloseLine className={`burger ${open ? "close" : ""}`} />
          ) : (
            <GiHamburgerMenu className="burger" />
          )}
        </div>

        <nav className={`nav ${open ? "" : ""}`}>
          <ul className={`${open ? "show" : "menu-items"}`}>
            <Link className="link-nav" to="/category/iphone">
              <li>iPhone</li>
            </Link>

            <Link className="link-nav"  to="/category/ipad">
              <li>iPad</li>
            </Link>
            <Link className="link-nav"  to="/category/mac">
              <li>Mac</li>
            </Link>

            <Link className="link-nav" to="/">
              <li>Products</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
