import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.scss";
import data from "../../data/data";

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, rejeted) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((result) => setItems(result.products));
  }, []);


  return (
    <>
      <ItemList items={items}/>
    </>
  );
};
