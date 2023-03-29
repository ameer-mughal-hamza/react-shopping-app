import IStoreItem from "../models/IStoreItem";
import { Button, Card, Col, Row } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useContext } from "react";
import {
  ShoppingCartContext,
  useShoppingCart,
} from "../../context/ShoppingCartContext";

const StoreItem = ({ id, name, price, imgUrl }: IStoreItem) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {!quantity ? (
            <button
              className="w-100 btn btn-primary"
              onClick={() => increaseQuantity(id)}
            >
              Add to cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => increaseQuantity(id)}>+</Button>
                <div>
                  Quantity: <span>{quantity}</span>
                </div>
                <Button onClick={() => decreaseQuantity(id)}>-</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
