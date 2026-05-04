import Heading from "../Components/Heading/Heading";
import CartItem from "../Components/Cart-item/CartItem";
import CartTotalPrice from "../Components/Cart-totalPrice/CartTotalPrice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center", margin: "30px" }}>
          Your Cart is Empty
        </h2>
      ) : (
        <>
          <Heading title="Cart" />

          <div className="cartContainer">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} show={show} />
            ))}
          </div>

          <CartTotalPrice />
        </>
      )}
    </>
  );
}

export default Cart;
