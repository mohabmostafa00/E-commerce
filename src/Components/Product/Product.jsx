import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Cart/cartSlice";
import { MaxHandle } from "../../Store/Products/productSlice";
import { useState } from "react";
import Like from "../../assets/Svg/Like.svg";
import disLike from "../../assets/Svg/dis-Like.svg";
import {
  addFavorite,
  deleteFavorite,
} from "../../Store/Favorite/Favorite-Slice";
import "./style.css";

function Product({ title, img, id, price, max }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const favorites = useSelector((state) => state.Favorite || []);
  const fav = favorites.some((item) => item.id === id);

  const handleAddToCart = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    dispatch(addToCart({ title, img, id, price, max }));
    dispatch(MaxHandle(id));
    setLoading(false);
  };

  const handleAddToLike = () => {
    if (fav) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite({ title, img, id, price, max }));
    }
  };

  return (
    <>
      <div className="product">
        <div className="Like-Btn" onClick={handleAddToLike}>
          <img src={fav ? Like : disLike} />
        </div>
        <div className="productImg">
          <img src={img} alt={title} />
        </div>
        <div className="productText">
          <h2>{title}</h2>
          <h3>Price : {Number(price).toFixed(2)} $</h3>
          <p className={`max ${max === 0 ? "limit" : ""}`}>
            {max === 0 ? "Out of stock" : `Available : ${max}`}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={loading}
          style={{ color: "white" }}
          className="add-btn"
        >
          {loading ? (
            <>
              <Spinner
                animation="border"
                size="sm"
                style={{ marginRight: "5px" }}
              />{" "}
              Loading...
            </>
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </>
  );
}

export default Product;
