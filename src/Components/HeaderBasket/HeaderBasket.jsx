import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyCart from "../../assets/Svg/cart.svg";
import "./styles.css";

function Basket() {
  const Carts = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [Animate, setAnimate] = useState(false);
  useEffect(() => {
    if (Carts.length > 0) {
      setTimeout(() => setAnimate(true), 10);
      setTimeout(() => setAnimate(false), 310);
    }
  }, [Carts.length]);
  return (
    <div className="Container" onClick={() => navigate("/cart")}>
      <div className="basketCart">
        <img src={MyCart} alt="Logo" />
        {Carts.length > 0 ? (
          <div className={`basketQuantity ${Animate ? "animate" : ""}`}>
            {Carts.length}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Basket;
