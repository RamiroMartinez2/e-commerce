import React from "react";
import { useParams} from "react-router-dom";

export const Button = ({ stock, initial = 1, addToCart, q }) => {

  const { id } = useParams();
  return (
    <>
      <div className="container-button">
        <button onClick={()=> addToCart(q, id)} className="finish-button">Finish my buy</button>
      </div>
      ;
    </>
  );
};
