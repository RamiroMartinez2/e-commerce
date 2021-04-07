import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemList from "../../components/ItemList/ItemList";
import data from "../../data/data";
import { useParams, Link } from "react-router-dom";


const CategoryContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  const filterCategory = items?.filter((item) => {
    return item.category === category;
  });

  const getItems = () => {
    new Promise((resolve, rejeted) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((result) => setItems(result.products));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
     <ItemList  items={filterCategory}/>
    </>
  );
};

export default CategoryContainer;