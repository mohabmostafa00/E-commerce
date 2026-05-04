import "./styles.css";
import { deleteToCart } from "../../Store/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../Store/Cart/cartSlice";

function CartItem({ item, show }) {
  const { id, img, title, price, quantity, max } = item;
  const dispatch = useDispatch();
  return (
    <>
      <div className={`cartItem fade ${show ? "show" : ""}`}>
        <div className="product">
          <div className="productImg">
            <img src={img} alt={title} />
          </div>
          <div className="productInfo">
            <h2>{title}</h2>
            <h3>Price : {Number(price).toFixed(2)} $</h3>
            <button
              style={{ color: "white", width: "100px" }}
              className=" mt-1"
              onClick={() => dispatch(deleteToCart(id))}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="quantity-label">
          <span className="quantity-controls">Quantity : {quantity}</span>
          <div>
            <button
              className="quantity-btn"
              onClick={() => dispatch(decreaseQuantity(id))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <button
              className="quantity-btn"
              onClick={() => dispatch(increaseQuantity(id))}
              disabled={quantity >= max}
              style={{ marginLeft: "5px" }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
