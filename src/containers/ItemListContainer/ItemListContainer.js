import React from "react";
import "./ItemListContainer.scss";

export const ItemListContainer = (props) => {
  console.log(props);
  return (
    <>
      <section>
        <h1>{props.greeting}</h1>
      </section>
    </>
  );
};
