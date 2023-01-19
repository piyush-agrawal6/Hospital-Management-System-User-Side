import AboutUs from "../Sections/aboutus";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import "./about.css";
import Services2 from "../Sections/services2";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>About Us</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Services2 />
      <Footer />
      <ToTop />
    </div>
  );
}

export default About;
