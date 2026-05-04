import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Like from "../../assets/Svg/Like.svg";
import disLike from "../../assets/Svg/dis-Like.svg";
import {
  addFavorite,
  deleteFavorite,
} from "../../Store/Favorite/Favorite-Slice.jsx";
import "./style.css";

function FavoritesList({ item, show }) {
  const { title, img, id, price, max } = item;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.Favorite || []);
  const fav = favorites.some((item) => item.id === id);

  const handleAddToLike = () => {
    if (fav) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite({ title, img, id, price, max }));
    }
  };
  const handleDelete = () => {
    dispatch(deleteFavorite(item.id));
  };

  return (
    <>
      <div className={`favorite-List fade-up ${show ? "show" : ""}`}>
        <div className="products">
          <div className="Like-Btn" onClick={handleAddToLike}>
            <img
              className="like-icon"
              src={fav ? Like : disLike}
              alt="favorite"
            />
          </div>
          <div className="productsImg">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="productsInfo">
            <h2>{item.title}</h2>
            <h3>Price : {Number(item.price).toFixed(2)} $</h3>
            <button
              onClick={handleDelete}
              variant="secondary"
              className="btn-delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesList;
