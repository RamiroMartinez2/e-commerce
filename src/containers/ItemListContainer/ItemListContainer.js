import React, { useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.scss";

export const ItemListContainer = (props) => {


  return (
    <>
      <ItemList items={props.items}/>
    </>
  );
};
