import React from "react";
import "./CartWidget.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <FaShoppingCart />
      </Link>
    </>
  );
};
