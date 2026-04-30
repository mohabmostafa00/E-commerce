import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LikeList from "../../assets/Svg/Like-List.svg";
import "./styles.css";

function Favorite() {
  const FavoriteList = useSelector((state) => state.Favorite.items);
  const navigate = useNavigate();
  const [Animate, setAnimate] = useState(false);
  useEffect(() => {
    if (FavoriteList.length > 0) {
      setTimeout(() => setAnimate(true), 10);
      setTimeout(() => setAnimate(false), 310);
    }
  }, [FavoriteList.length]);

  return (
    <div className="ContainerFav" onClick={() => navigate("/favorite")}>
      <div className="LikeCart">
        <img src={LikeList} alt="icon" />
        {FavoriteList.length > 0 ? (
          <div className={`LikeQuantity ${Animate ? "animate" : ""}`}>
            {FavoriteList.length}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Favorite;
