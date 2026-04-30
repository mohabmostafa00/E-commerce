import "./style.css";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

function AboutContent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className={`about-header fade-up ${show && "show"}`}>
            <h1 className="f-title">Experience Streamlined</h1>
            <h1 className="s-title">
              Shopping With{" "}
              <span>
                STYLA<span>Store</span>
              </span>
            </h1>
          </div>

          <div className="features-wrapper">
            <div className={`feature-item fade-up ${show && "show delay-1"}`}>
              <FaTruck className="feature-icon" />
              <h3>Free Delivery</h3>
              <p>
                Enjoy fast and free delivery on all your orders with no extra
                cost.
              </p>
            </div>

            <div className={`feature-item fade-up ${show && "show delay-2"}`}>
              <FaStore className="feature-icon" />
              <h3>Self Pickup</h3>
              <p>
                Pick up your order directly from our store at your convenience.
              </p>
            </div>

            <div className={`feature-item fade-up ${show && "show delay-3"}`}>
              <BsPatchCheckFill className="feature-icon" />
              <h3>Warranty</h3>
              <p>
                All products come with official warranty and quality guarantee.
              </p>
            </div>
          </div>

          <Link
            to={"/categories"}
            className={`shop-btn fade-up ${show && "show delay-4"}`}
          >
            Shop Now
          </Link>
        </div>
      </section>

      <div className={`about-contact fade-up ${show && "show"}`}>
        <div className="text">
          <h1>Contact Us</h1>
          <p>
            At STYLA Store, we value every customer. If you have any inquiries
            about our products or your order, our support team is always ready
            to assist you and make your shopping experience smooth and
            enjoyable.
          </p>
        </div>

        <div className={`Icons fade-right ${show && "show delay-1"}`}>
          <a href="#">
            <FaFacebook className="icon-facebook" />
          </a>
          <a href="#">
            <FaInstagram className="icon-instagram" />
          </a>
          <a href="#">
            <FaWhatsapp className="icon-whatsapp" />
          </a>
        </div>
      </div>

      <div className={`about-cta fade-up ${show && "show delay-2"}`}>
        <h1>Start Shopping Now 🛒</h1>
        <p>
          Discover the latest trends and find your perfect style with STYLA
          Store
        </p>
        <Button
          className="about-btn"
          variant="success"
          onClick={() => navigate("/categories")}
        >
          Go to Products
        </Button>
      </div>

      <Row className="about-features text-center mt-5">
        <Col
          md={4}
          className={`about-card fade-up ${show && "show"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h4 className="about-icon">🚚 Fast Delivery</h4>
          <p>We deliver your orders quickly and safely</p>
        </Col>

        <Col
          md={4}
          className={`about-card fade-up ${show && "show"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <h4 className="about-icon">💰 Best Prices</h4>
          <p>Affordable prices for everyone</p>
        </Col>

        <Col
          md={4}
          className={`about-card fade-up ${show && "show"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <h4 className="about-icon">⭐ Quality Products</h4>
          <p>We guarantee high quality products</p>
        </Col>
      </Row>
    </>
  );
}

export default AboutContent;
