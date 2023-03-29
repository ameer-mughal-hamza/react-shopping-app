import { Row, Col } from "react-bootstrap";
import StoreItem from "../StoreItem/StoreItem";
import storeItems from "../../data/items";

function Store() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item}></StoreItem>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Store;
