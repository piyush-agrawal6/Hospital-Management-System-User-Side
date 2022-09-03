import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/download.png';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

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
        <Link to={"/home"} className='navbar-brand'>
            <img src={logo} title="logo"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/home'} className='nav-link'>Home</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Link to={'/about'} className='dropdown-item'>About Us</Link>
              <Link to={"/ourteam"} className='dropdown-item'>
                Our Team
              </Link>
              <Link to={"/faqs"} className='dropdown-item'>FAQ's</Link>
              <Link to={"/booking"} className='dropdown-item'>
                Booking
              </Link>
              <Link to={"/notfound"} className='dropdown-item'>
                Error 404
              </Link>
              <Link to={"/login"} className='dropdown-item'>
                Login / Register
              </Link>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <Link to={"/service"} className='dropdown-item'>Service</Link>
              <Link to={"/servicedetails"} className='dropdown-item'>
                Service Details
              </Link>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <Link to={"/blog"} className='dropdown-item'>Blogs</Link>
              <Link to={"/blogdetails"} className='dropdown-item'>
                Blog Details
              </Link>
            </NavDropdown>
            <Link to={"/Contact"} className='nav-link'>Contact Us</Link>
            <Nav.Link> <FaSearch/> </Nav.Link>
            <Link to="/Contact" className='nav-link'>
                <Link to={'/contact'}><button type='button'>Contact Us <span> <IoIosArrowForward /> </span></button></Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
}

export default NavBars;