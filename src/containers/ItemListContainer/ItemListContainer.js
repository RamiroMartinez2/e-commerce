import React, { useState } from "react";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import "./ItemListContainer.scss";

export const ItemListContainer = (props) => {
  const [stockActual, setStockActual] = useState(5);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();

    if (stockActual > 0) {
      setStockActual((stockActual) => stockActual - nuevoStock);
    }
  };

  return (
    <>
      <section>
        <h1>{props.greeting}</h1>
      </section>
      <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
    </>
  );
};
