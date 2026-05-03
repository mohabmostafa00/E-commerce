import { Container, Row, Col } from "react-bootstrap";
import Category from "../Components/Category/Category";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../Styles/global.css";
import Heading from "../Components/Heading/Heading";

function Categories() {
  const { categories } = useSelector((state) => state.category);

  const [show] = useState(true);

  return (
    <>
      <Container>
        <Heading title="Categories" />

        <Row>
          {categories.map((cat, index) => (
            <Col
              xs={6}
              md={3}
              key={index}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category
                title={cat.title}
                img={cat.img}
                prefix={cat.prefix}
                index={index}
                show={show}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Categories;
