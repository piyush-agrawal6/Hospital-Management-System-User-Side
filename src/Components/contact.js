import NavBars from "../Sections/navbar.js";
import Footer from "../Sections/footer.js";
import ToTop from "../Sections/totop.js";
import "./about.css";
import "../index.css";
import "./contact.css";
import { FiHome } from "react-icons/fi";
import {
  FaMapMarkedAlt,
  FaIdBadge,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Contact Us</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="section-sp1">
        <div className="container">
          <div className="contact-wraper">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-30">
                <form className="form-wraper contact-form ajax-form">
                  <div className="ajax-message"></div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-control"
                        placeholder="Your Name"
                      ></input>
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="phone"
                        required
                        className="form-control"
                        placeholder="Phone Numbers"
                      ></input>
                    </div>
                    <div className="form-group col-md-12">
                      <select className="form-select form-control">
                        <option>Selecty Department</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        name="message"
                        required
                        className="form-control"
                        placeholder="Type Message"
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        value="submit"
                        className="btn w-100 btn-secondary btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 mb-30">
                <div className="contact-info ovpr-dark">
                  <div className="info-inner">
                    <h4 className="title mb-30">
                      Contact Us For Any Informations
                    </h4>
                    <div className="icon-box">
                      <h6 className="title">
                        <FaMapMarkedAlt />
                        Location
                      </h6>
                      <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                    </div>
                    <div className="icon-box">
                      <h6 className="title">
                        <FaIdBadge />
                        Email & Phone
                      </h6>
                      <p>
                        nfo@yourdomain.com <br />
                        (+68) 120034509
                      </p>
                    </div>
                    <div className="icon-box">
                      <h6 className="title">
                        <TbWorld />
                        Follow Us
                      </h6>
                      <ul className="social-media">
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
        </div>
      </section>
      <Footer />
      <ToTop />
    </div>
  );
}

export default Contact;
