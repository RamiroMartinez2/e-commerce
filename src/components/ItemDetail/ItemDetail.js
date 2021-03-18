import React, { useState } from "react";
import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const [stock, setStock] = useState(5);

  const onAdd = (e, q) => {
    e.preventDefault();

    if (q <= stock) {
      alert(`Added ${q} products to cart`);
      setStock(stock - q);
    } else {
      alert("Cant add more products to cart");
    }
  };

  return (
    <div className="item-detail">
      {props.itemD?.map((i) => (
        <>
          <img className="detail-img" src={i.pictureUrl} alt="img" srcset="" />
          <p className="price">{i.price}</p>
          <h2 className="title-description">Description</h2>
          <p className="description">{i.description}</p>
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </>
      ))}
    </div>
  );
};

export default ItemDetail;
