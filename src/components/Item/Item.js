import React from "react";
import "./Item.scss";

const Item = (props) => {
  return (
    <>
      <div className="item-container">
        <img src={props.item.pictureUrl} alt="img" />
       
      </div>
      <h2 className='title'>{props.item.title}</h2>
      <p className='title'>{props.item.capacity} - {props.item.color} </p>
      <p className='price'>{props.item.price}</p>
      <p className='add'>SEE MORE</p>
    </>
  );
};

export default Item;
