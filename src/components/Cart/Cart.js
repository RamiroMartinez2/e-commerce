import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavBar } from "../NavBar/NavBar";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart)
  
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
          {i.detailFilter[0]?.title}
          <button onClick={()=> deleteItem(i.detailFilter[0]?.id)}>Delete product</button>
          <button onClick={() => clearCart()}>Clear cart</button>
        </div>
      ))}

    </>
  );
};
