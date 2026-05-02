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
      <div className="TPrice-container">
        <div className="TotalPrice">
          <div className="price-text">
            <span className="title">Total Price</span>
            <span className="sub-title">Final payment amount</span>
          </div>

          <div className="price-box">
            <span className="price-number">{TotalPrice.toFixed(2)}</span>
            <span className="dollar">$</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotalPrice;
