import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items";
import { formatCurrency } from "../../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
  showButtons?: boolean;
};

export function CartItem({ id, quantity, showButtons = false }: CartItemProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center mb-2"
    >
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        {showButtons && (
          <div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </Button>
          </div>
        )}
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
