import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerCol">
          <h3>About</h3>
          <p>
            We are an e-commerce store focused on providing quality products at
            the best prices with fast delivery.
          </p>
        </div>

        <div className="footerCol">
          <h4>Our Services</h4>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/categories">Categories</Link>
        </div>

        <div className="footerCol">
          <h3>Contact</h3>
          <p>Email : support@store.com</p>
          <p>Phone : 01000000000</p>
          <p>Cairo , Nasr City</p>
        </div>

        <div className="footerCol">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#">
              <FaFacebook className="i-facebook" />
            </a>
            <a href="#">
              <FaInstagram className="i-instagram" />
            </a>
            <a href="#">
              <FaWhatsapp className="i-whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        © 2026 Your Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
