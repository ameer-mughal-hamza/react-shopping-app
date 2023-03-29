import CartCounter from "../CartCounter/CartCounter";
import { Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function CartIcon() {
  const { openCart } = useContext(ShoppingCartContext);
  return (
    <Button
      variant="outline-primary"
      className="ms-auto rounded-circle"
      style={{ position: "relative" }}
      onClick={openCart}
    >
      <AiOutlineShoppingCart
        style={{ width: "2.5rem", height: "3rem" }}
      ></AiOutlineShoppingCart>
      <CartCounter />
    </Button>
  );
}

export default CartIcon;
