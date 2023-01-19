import logo from "../Assets/download.png";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="widget widget-info">
                  <div className="footer-logo">
                    <Link to={"/"}>
                      <img src={logo} alt="img" />
                    </Link>
                  </div>
                  <div className="ft-contact">
                    <p>
                      Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                      dolore smod tempor incididunt ut labore et.
                    </p>
                    <div className="contact-bx">
                      <div className="icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="contact-number">
                        <span>Contact Us</span>
                        <h4 className="number">+01 123 456 7890</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer-widget ml-50">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul>
                    <li>
                      <Link to={"/about"}>
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/service"}>
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/booking"}>
                        <span>Booking</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/faqs"}>
                        <span>Faq's</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/blog"}>
                        <span>Blogs</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/ourteam"}>
                        <span>Our Team</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer-widget ml-50">
                  <h3 className="footer-title">Our Service</h3>
                  <ul>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Dental Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Cardiac Clinic</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Massege Therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Cardiology</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Precise Diagnosis</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Abmbulance Services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="widget widget-form">
                  <h3 className="footer-title">Subscribe</h3>
                  <form className="subscribe-form subscription-form mb-30">
                    <div className="ajax-message"></div>
                    <div className="input-group">
                      <input
                        name="email"
                        required
                        className="form-control"
                        placeholder="Email Address"
                        type="email"
                      ></input>
                    </div>
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="btn btn-secondary shadow w-100"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <div className="footer-social-link">
                    <ul>
                      <li>
                        <Link to={"facebook.com"}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to={"twitter.com"}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to={"instagram.com"}>
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to={"linkedin.com"}>
                          <FaLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-12 text-center">
                <p className="copyright-text">
                  Copyright © 2022 Design & Developed by
                  <Link to={"/home"} className="text-secondary">
                    KareemWael
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
