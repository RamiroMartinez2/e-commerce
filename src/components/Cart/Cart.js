import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavBar } from "../NavBar/NavBar";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart)
  
  const clearCart = () => setCart([]);
  const deleteItem = (id) => {
    const filtered = cart.filter((i)=> i.detailFilter[0]?.id !== id)
    setCart(filtered)
  }

  return (
    <>
      {
        cart.length === 0 && <div>Cart is empty</div>
      }

      {cart.map((i) => (
        <div>
          Product: {i.detailFilter[0]?.title}
          <br/>
          Price: USD {(i.detailFilter[0]?.price)*(i.q)}
          <br/>
          Capacity: {i.detailFilter[0]?.capacity}
          <br/>
          Quantity: {i.q}
          <br/>
          <button onClick={()=> deleteItem(i.detailFilter[0]?.id)}>Delete product</button>
          <br/>
          <button onClick={() => clearCart()}>Clear cart</button>
          <br/>
        </div>
      ))}

    </>
  );
};
