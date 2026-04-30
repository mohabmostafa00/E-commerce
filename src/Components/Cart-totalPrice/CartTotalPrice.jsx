import { useSelector } from "react-redux";
import "./Styles.css";

function CartTotalPrice() {
  const cart = useSelector((state) => state.cart);
  const TotalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <div className="TotalPrice">
        <span>Total Price :</span>
        <span>
          {TotalPrice.toFixed(2)} <span className="dollar">$</span>
        </span>
      </div>
    </>
  );
}

export default CartTotalPrice;
