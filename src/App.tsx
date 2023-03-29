import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {
  ShoppingCartContext,
  ShoppingCartProvider,
} from "./context/ShoppingCartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/store"} element={<Store />}></Route>
            <Route path={"/about"} element={<About />}></Route>
            <Route path={"/checkout"} element={<Checkout />}></Route>
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
