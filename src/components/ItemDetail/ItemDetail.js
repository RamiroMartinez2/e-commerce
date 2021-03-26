import React, { useEffect, useState } from "react";
import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import { useParams, Link } from "react-router-dom";
import { Button } from "../Button/Button";

const ItemDetail = ({ itemDetail }) => {
  const { id } = useParams();
  const detailFilter = itemDetail.filter((item) => {
    return item.id == id;
  });

  const [stock, setStock] = useState(5);
 const [q, setQ]= useState(1)

  const onAdd = (e, q) => {
    console.log(q);
    e.preventDefault();

    if (q <= stock) {
      alert(`Added ${q} products to cart`);
      setStock(stock - q);
      setQ(q)
    } else {
      alert("Cant add more products to cart");
    }
  };

  const addToCart = (q)=>{
    console.log(q);
  }

  return (
    <>
      {detailFilter?.map((i) => (
        <div className="item-detail" key={i.id}>
          <img className="detail-img" src={i.pictureUrl} alt="img" />
          <p className="price">{i.price}</p>
          <h2 className="title-description">Description</h2>
          <p className="description">{i.description}</p>
          {stock === 0 ? (
            <Link className="link-cart" to="/cart">
              <Button initial={1} stock={stock} onAdd={addToCart} q={q} />
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
