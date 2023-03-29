import { Col, Row } from "react-bootstrap";
import { CartItem } from "../../components/CartItem/CartItem";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Checkout = () => {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <h1>Checkout</h1>
      <Row>
        <Col>
          {cartItems.map((item) => (
            <CartItem showButtons={true} key={item.id} {...item} />
          ))}
        </Col>
        <Col>
          <h2>Order Summary</h2>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
