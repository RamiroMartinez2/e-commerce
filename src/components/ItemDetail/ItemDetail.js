import React, { useEffect, useState } from "react";
import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import { useParams, Link } from "react-router-dom";

const ItemDetail = ({ itemDetail }) => {
  const { id } = useParams();
  const detailFilter = itemDetail.filter((item) => {
    return item.id == id;
  });

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
    <>
      {detailFilter?.map((i) => (
        <div className="item-detail" key={i.id}>
          <img className="detail-img" src={i.pictureUrl} alt="img" />
          <p className="price">{i.price}</p>
          <h2 className="title-description">Description</h2>
          <p className="description">{i.description}</p>
          {stock === 0 ? (
            <Link className="link-cart" to="cart">
              <div className="container-button">
                <button className="finish-button">Finish my buy</button>
              </div>
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          )}
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
