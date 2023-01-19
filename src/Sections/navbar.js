import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/download.png";
import Logo from "../Assets/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector("nav");

function myFunction() {
  if (window.pageYOffset >= 20) {
    navbar.classList.add("sticked");
  } else {
    navbar.classList.remove("sticked");
  }
}

function NavBars() {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/home"} className="navbar-brand">
            <img src={Logo} title="logo" alt="img" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/ourteam"} className="nav-link">
                Doctors
              </Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <Link to={"/team"} className="dropdown-item">
                  Creators
                </Link>
                <Link to={"/about"} className="dropdown-item">
                  About
                </Link>
                <Link to={"/faqs"} className="dropdown-item">
                  FAQ's
                </Link>
                <Link to={"/service"} className="dropdown-item">
                  Service
                </Link>
              </NavDropdown>
              <Link to={"/booking"} className="nav-link">
                Booking
              </Link>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
              <Link to="/Contact" className="nav-link">
                <Link to={"/report"}>
                  <button type="button">
                    Report{" "}
                    <span>
                      {" "}
                      <IoIosArrowForward />{" "}
                    </span>
                  </button>
                </Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
