import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import fashion from "../../assets/Img/girl.png";
import Back from "../../assets/Img/back.png";
import "./style.css";

function HomeContent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);
  const products = [
    {
      id: 1,
      name: "Sweatshirt",
      price: 180,
      img: "https://images.unsplash.com/photo-1499971856191-1a420a42b498?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBTd2VhdHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Jeans pants",
      price: 200,
      img: "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmclMjBKZWFucyUyMHBhbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Jacket",
      price: 350,
      img: "https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nJTIwSmFja2V0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Jacket",
      price: 300,
      img: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fHww",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className={`hero-text fade-up ${show && "show"}`}>
          <h1>
            STYLA<span>Store</span>
          </h1>
          <p>
            In the world of fashion, what you wear is more than just clothing —
            it’s a reflection of your personality and identity. Every piece
            tells a story, and every choice expresses your unique style. At
            STYLA Store, we bring you carefully selected trends to match every
            taste, whether you're going for a relaxed casual look or a bold,
            eye-catching outfit. Our goal is to help you feel confident in what
            you wear, because style isn’t just about clothes… it’s a way of
            life.
          </p>
          <Link to={"/categories"} className="hero-btn">
            Shopping Now
          </Link>
        </div>
        <div className={`hero-image fade-right ${show && "show delay-1"}`}>
          <img src={fashion} alt="fashion" />
        </div>
      </section>

      <section className="best-sellers">
        <h1 className={`product-title fade-up ${show && "show"}`}>
          Best Sellers
        </h1>
        <div className="products-container">
          {products.map((p, index) => (
            <div
              className={`product-card fade-up ${show && "show"}`}
              key={p.id}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button className="product-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <div
        className={`welcome-section fade-up ${show && "show delay-2"}`}
        style={{ backgroundImage: `url(${Back})` }}
      >
        <h1>Welcome to Our Store 🛒</h1>
        <p>
          At STYLAStore Find the best products with best prices with your
          shopping experience smooth and enjoyable
        </p>
        <button onClick={() => navigate("/categories")}>Shop Now</button>
      </div>

      <Row className="feature-container text-center">
        <Col md={4} className={`feature-box fade-up ${show && "show delay-1"}`}>
          <h4>🚚 Fast Delivery</h4>
          <p>We deliver your products quickly</p>
        </Col>
        <Col md={4} className={`feature-box fade-up ${show && "show delay-2"}`}>
          <h4>💰 Best Prices</h4>
          <p>Affordable prices for everyone</p>
        </Col>
        <Col md={4} className={`feature-box fade-up ${show && "show delay-3"}`}>
          <h4>⭐ Quality Products</h4>
          <p>High quality guaranteed</p>
        </Col>
      </Row>
    </>
  );
}

export default HomeContent;
