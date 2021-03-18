import "./App.css";
import React, { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import data from "./data/data";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
function App() {
  const [items, setItems] = useState();

  useEffect(() => {

    new Promise((resolve, rejeted) => {

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((result) =>setItems(result.products));
  },[]);


  return (
    <>
     
        <NavBar />
        <ItemListContainer items={items}/>
        <ItemDetailContainer/>
    </>
  );
}

export default App;
