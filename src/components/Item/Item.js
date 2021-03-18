import React, { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./Item.scss";

const Item = (props) => {
  

  return (
    <>
    <div>
      <div className="item-container">
        <img src={props.item.pictureUrl} alt="img" />
      </div>
      <h2 className="title">{props.item.title}</h2>
      <p className="title">
        {props.item.capacity} - {props.item.color}{" "}
      </p>
      <p className="price">{props.item.price}</p>
      <p className="add">SEE MORE</p>
    </div>
      
    </>
  );
};

export default Item;
