import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBars() {
  return (
    <div className="navStick">
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
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
                <Link to={"/service"} className="dropdown-item">
                  Services
                </Link>
              </NavDropdown>
              <Link to={"/booking"} className="nav-link">
                Booking
              </Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <Link to={"/login"} className="dropdown-item">
                  Patient
                </Link>
                <a href="a" className="dropdown-item">
                  Staff
                </a>
              </NavDropdown>
              <Link to="/Contact" className="nav-link">
                <Link to={"/report"}>
                  <button type="button">
                    Report
                    <span>
                      <IoIosArrowForward />
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
