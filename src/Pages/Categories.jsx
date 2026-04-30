import { Container, Row, Col } from "react-bootstrap";
import Category from "../Components/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchCategories } from "../Store/Categories/categorySlice";
import "../Styles/global.css";
import Heading from "../Components/Heading/Heading";

function Categories() {
  const { categories } = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategories());
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, [dispatch]);

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
