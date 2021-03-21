import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from "../../data/data";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);

  const getItems = () => {
    new Promise((resolve, rejeted) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((result) => setItemDetail(result.products));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <ItemDetail itemDetail={itemDetail} />
    </>
  );
};

export default ItemDetailContainer;
