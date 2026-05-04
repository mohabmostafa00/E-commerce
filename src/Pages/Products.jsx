import { Container, Row, Col } from "react-bootstrap";
import Product from "../Components/Product/Product";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Heading from "../Components/Heading/Heading";

function Products() {
  const { products } = useSelector((state) => state.product);
  const { prefix } = useParams();

  const filteredProducts = prefix
    ? products.filter((p) => p.cat_prefix === prefix)
    : products;

  return (
    <>
      <Heading prefix={prefix} title="Products" />

      <div className="products-container">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            prefix={product.cat_prefix}
            max={product.max}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
