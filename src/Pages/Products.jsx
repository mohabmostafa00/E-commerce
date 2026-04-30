import { Container, Row, Col } from "react-bootstrap";
import Product from "../Components/Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchProduct } from "../Store/Products/productSlice";
import { useParams } from "react-router-dom";
import Heading from "../Components/Heading/Heading";

function Products() {
  const { products } = useSelector((state) => state.product);
  const { prefix } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProduct(prefix));
  }, [dispatch, prefix]);
  return (
    <>
      <Heading prefix={prefix} title="Products" />
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            prefix={product.prefix}
            max={product.max}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
