import React, { useContext } from "react";
import {
  ShoppingCartContext,
  useShoppingCart,
} from "../../context/ShoppingCartContext";

const CartCounter = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div
      className="rounded-circle d-flex justify-content-center align-items-center bg-danger"
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        color: "white",
        width: "1.5rem",
        height: "1.5rem",
        transform: "translate(25%, 25%)",
      }}
    >
      {cartItems.length}
    </div>
  );
};

export default CartCounter;
