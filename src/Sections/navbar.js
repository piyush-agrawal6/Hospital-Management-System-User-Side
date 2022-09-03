import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/download.png';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");

function myFunction() {
  if (window.pageYOffset>=20) {
    navbar.classList.add("sticked")
  } else {
    navbar.classList.remove("sticked");
  }
}

function NavBars(){

    return <div>
        <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img src={logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#ourteam">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#faqs">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#booking">
                Booking
              </NavDropdown.Item>
              <NavDropdown.Item href="#notfound">
                Error 404
              </NavDropdown.Item>
              <NavDropdown.Item href="#login">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#service">Service</NavDropdown.Item>
              <NavDropdown.Item href="#servicedetails">
                Service Details
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#blog">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#blogdetails">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
            <Nav.Link> <FaSearch/> </Nav.Link>
            <Nav.Link href="#Contact">
                <a href='#contact'><button type='button'>Contact Us <span> <IoIosArrowForward /> </span></button></a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
}

export default NavBars;