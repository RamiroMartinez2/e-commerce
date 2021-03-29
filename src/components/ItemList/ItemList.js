import React from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import { useParams, Link } from "react-router-dom";

const ItemList = ({ items }) => {

  return (
    <main className="main">
      {items?.map((x) => (
        <Item item={x} />
      ))}
    </main>
  );
};

export default ItemList;
