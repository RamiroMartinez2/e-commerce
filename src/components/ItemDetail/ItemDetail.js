import React from "react";
import './ItemDetail.scss'
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  return (
    <div className="item-detail">
      {props.itemD?.map((i) => (
        <>
          <img className="detail-img" src={i.pictureUrl} alt="" srcset="" />
          <p className="price">{i.price}</p>
          <h2>Description</h2>
          <p>{i.description}</p>
          <ItemCount stock={props.stockActual} initial={1} onAdd={props.restarStock} />
        </>
      ))}
    </div>
  );
};

export default ItemDetail;
