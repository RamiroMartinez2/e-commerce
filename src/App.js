import "./App.css";
import React, { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import data from "./data/data";
function App() {
  const [items, setItems] = useState();

  useEffect(() => {

    new Promise((resolve, rejeted) => {

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((result) =>setItems(result.products));
  });


  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer items={items} greeting="Hi this is my e-commerce" />
      </div>
    </>
  );
}

export default App;
