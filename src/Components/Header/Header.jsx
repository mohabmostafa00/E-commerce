import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Basket from "../HeaderBasket/HeaderBasket";
import "./style.css";
import Favorite from "../HeaderFavorite/HeaderFavorite";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import HeaderToggle from "../../HeaderToggle/HeaderToggle";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <Navbar expand={false}>
          <Container className="d-flex align-items-center">
            <Navbar.Brand>
              <h1 className="headerLogo">
                STYLA<span>Store</span>
              </h1>
            </Navbar.Brand>
            <div className="ms-auto d-flex align-items-center gap-3">
              <Favorite />
              <Basket />
              <HeaderToggle show={show} setShow={setShow} />
            </div>
            <Offcanvas
              show={show}
              onHide={() => setShow(false)}
              placement="end"
              backdrop={true}
              keyboard={true}
              scroll={false}
              className="custom-offcanvas"
            >
              <Offcanvas.Header className="title-container" closeButton>
                <Offcanvas.Title
                  className="off-title"
                  id="offcanvasNavbarLabel"
                >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="menu-container">
                <div className="menu-grid">
                  <Nav className="flex-column menu-col">
                    <Nav.Link as={Link} to="/" onClick={() => setShow(false)}>
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/categories"
                      onClick={() => setShow(false)}
                    >
                      Categories
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/favorite"
                      onClick={() => setShow(false)}
                    >
                      Favorites
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/cart"
                      onClick={() => setShow(false)}
                    >
                      Carts
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/about-us"
                      onClick={() => setShow(false)}
                    >
                      About
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/login"
                      onClick={() => setShow(false)}
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/register"
                      onClick={() => setShow(false)}
                    >
                      Register
                    </Nav.Link>
                  </Nav>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
