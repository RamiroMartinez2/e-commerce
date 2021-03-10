import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const sumarUno = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const restarUno = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <form>
      <label>Producto</label>
      <p>Iphone X</p>
      <p>
        Stock:
        {stock <= -1 ? <div>0</div> : <div>{stock}</div>}
      </p>
      <label>Cantidad</label>
      <div>
        <p>
          {counter > stock ? (
            <div>No puedes agregar mas productos</div>
          ) : (
            <div>{counter}</div>
          )}
        </p>
        <button onClick={(e) => restarUno(e)} type="submit">
          -
        </button>
        <button onClick={(e) => sumarUno(e)} type="submit">
          +
        </button>
      </div>

      <button onClick={(e) => onAdd(e, counter)} type="submit">
        Agregar al carrito
      </button>
    </form>
  );
};
