import React from "react";

export const Button = ({ stock, initial = 1, onAdd, q }) => {
  return (
    <>
      <div className="container-button">
        <button onClick={()=> onAdd(q)} className="finish-button">Finish my buy</button>
      </div>
      ;
    </>
  );
};
