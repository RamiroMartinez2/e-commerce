import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from "../../data/data";
const ItemDetailContainer = () => {
  const [itemD, setItemD] = useState();

  const getItems = () => {
    new Promise((resolve, rejeted) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((result) => setItemD(result.products));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <ItemDetail itemD={itemD} />
    </>
  );
};

export default ItemDetailContainer;
