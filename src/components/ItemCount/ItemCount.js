import React, { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const sumarUno = (e) => {
    e.preventDefault();

    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restarUno = (e) => {
    e.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <form className="form">
      <div className="container-input">
        <button className="button" onClick={restarUno}>-</button>
        <input  className="input" value={counter}  onChange={(e)=> onAdd(e.target.value)}/>
        <button className="button" onClick={sumarUno}>+</button>
      </div>
      <div className="container-button">
        <button className="button-add" onClick={(e) => onAdd(e, counter)}>Add to cart</button>
      </div>
    </form>
  );
};
