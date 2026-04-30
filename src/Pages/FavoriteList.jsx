import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFavorites } from "../Store/Favorite/Favorite-Slice";
import FavoritesList from "../Components/FavoritesList/FavoritesList";

function FavoriteList() {
  const Favorites = useSelector((state) => state.Favorite.items);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchFavorites());
    setShow(true);
  }, [dispatch]);
  return (
    <>
      <div className="favorite-container">
        {Favorites.length === 0 ? (
          <h2>No favorites yet</h2>
        ) : (
          Favorites.map((item) => (
            <FavoritesList
              key={item.id}
              item={item}
              show={show}
            />
          ))
        )}
      </div>
    </>
  );
}

export default FavoriteList;
