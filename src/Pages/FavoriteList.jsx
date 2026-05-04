import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FavoritesList from "../Components/FavoritesList/FavoritesList";
import Heading from "../Components/Heading/Heading";

function FavoriteList() {
  const Favorites = useSelector((state) => state.Favorite);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Heading title="Favorite List" />
      <div className="favorite-container">
        {Favorites.length === 0 ? (
          <h2 style={{ textAlign: "center", marginTop: "30px" }}>
            No favorites yet
          </h2>
        ) : (
          Favorites.map((item) => (
            <FavoritesList key={item.id} item={item} show={show} />
          ))
        )}
      </div>
    </>
  );
}

export default FavoriteList;
