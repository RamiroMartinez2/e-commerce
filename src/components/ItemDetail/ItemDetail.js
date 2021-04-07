import React, { useContext, useState } from "react";
import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import { useParams, Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ itemDetail }) => {
  const [cart, setCart] = useContext(CartContext);
  const [stock, setStock] = useState(5);
  const [q, setQ] = useState({ q: 1 });
  const { id } = useParams();

  const detailFilter = itemDetail.filter((item) => {
    return item.id == id;
  });

  const onAdd = (e, q) => {
    e.preventDefault();

    if (q <= stock) {
      alert(`Added ${q} products to cart`);
      setStock(stock - q);
      setQ(q);
    } else {
      alert("Cant add more products to cart");
    }
  };

  const addToCart = (q, id) => {
    const detailFilter = itemDetail.filter((item) => {
      return item.id == id;
    });
    setCart([...cart, { detailFilter, q }]);

  //   Array.prototype.unique=function(a){
  //     return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  //   });
  
  // console.log(detailFilter.unique());
   
  };

  return (
    <>
      {detailFilter?.map((i) => (
        <div className="item-detail" key={i.id}>
          <img className="detail-img" src={i.pictureUrl} alt="img" />
          <p className="price">USD {i.price}</p>
          <h2 className="title-description">Description</h2>
          <p className="description">{i.description}</p>
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          <Link className="link-cart" to="/cart">
            <Button initial={1} stock={stock} addToCart={addToCart} q={q} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
