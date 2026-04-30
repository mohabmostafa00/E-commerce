import "./style.css";
import { Link } from "react-router-dom";

function Category({ title, img, prefix, show }) {
  return (
    <>
      <div className={`category ${show ? "show" : ""}`}>
        <Link to={`/categories/products/${prefix}`}>
          <div className="categoryImg">
            <img src={img} alt={title} />
          </div>
          <h4 className="categoryTitle">{title}</h4>
        </Link>
      </div>
    </>
  );
}

export default Category;
