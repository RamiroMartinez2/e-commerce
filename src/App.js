import "./App.css";
import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { Cart } from "./components/Cart/Cart";
import ItemList from "./components/ItemList/ItemList";
import CategoryContainer from "./containers/CategoryContainer/CategoryContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/itemDetail/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/category/:category">
           <CategoryContainer/>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
