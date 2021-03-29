import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Item.scss";
import ItemDetailContainer from "../../containers/ItemDetailContainer/ItemDetailContainer";

const Item = ({ item }) => {
  return (
    <>
      <div>
        <ItemDetailContainer />

        <div className="item-container">
          <img src={item.pictureUrl} alt="img" />
        </div>
        <h2 className="title">{item.title}</h2>
        <p className="title">
          {item.capacity} - {item.color}{" "}
        </p>
        <p className="price">{item.price}</p>
        <Link  to={`/itemDetail/${item.id}`}>
          <p className="add">SEE MORE</p>
        </Link>
      </div>
    </>
  );
};

export default Item;
