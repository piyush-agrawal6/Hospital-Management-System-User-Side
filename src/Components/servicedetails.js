import NavBars from "../Sections/navbar";
import { FiHome, FiCheck } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import "./about.css";
import "../index.css";
import "./servicedt.css";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import Service1 from "../Assets/pic1.5a7f5c0888.jpg";
import Down1 from "../Assets/downloadpdf.png";
import Down2 from "../Assets/downloaddoc.png";
import Accordion from "react-bootstrap/Accordion";
import "./faqs.css";
import { Link } from "react-router-dom";

function ServiceDetails() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Service Details</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Service Details
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="section-area section-sp1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 mb-30">
              <div className="ttr-media mb-30">
                <img src={Service1} className="rounded" alt="img" />
              </div>
              <div className="clearfix">
                <div className="head-text mb-30">
                  <h2 className="title mb-15">
                    Why Medical Had Been So Popular Till
                  </h2>
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 mb-30">
                    <ul className="list-check-squer mb-0">
                      <li>
                        <FiCheck />
                        Then along come two they
                      </li>
                      <li>
                        <FiCheck />
                        That’s just a little bit more than
                      </li>
                      <li>
                        <FiCheck />
                        Standard dummy text ever since
                      </li>
                      <li>
                        <FiCheck />
                        Simply dummy text of the printing
                      </li>
                      <li>
                        <FiCheck />
                        Make a type specimen book
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="skillbar-box mb-30">
                      <h6 className="title">Advanced Technology</h6>
                      <div className="skillbar appear">
                        <p className="skillbar-bar w-96"></p>
                        <span className="skill-bar-percent">96%</span>
                      </div>
                    </div>
                    <div className="skillbar-box mb-30">
                      <h6 className="title">Certified Engineers</h6>
                      <div className="skillbar appear">
                        <p className="skillbar-bar w-79"></p>
                        <span className="skill-bar-percent">79%</span>
                      </div>
                    </div>
                    <div className="skillbar-box mb-0">
                      <h6 className="title">6 years Experience</h6>
                      <div className="skillbar appear">
                        <p className="skillbar-bar w-75"></p>
                        <span className="skill-bar-percent">79%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix">
                <div className="head-text mb-30">
                  <h4 className="title mb-10">Popular Questions</h4>
                  <p className="mb-0">
                    Standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      How Doctor Can Ease Your Pain?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How do I withdraw from a subject?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Understand Doctor Before You Regret?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      What types of systems do you support?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      We Teach You How To Feel Better?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>How Can I Contact You?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sticky-top pb-1">
                <div className="widget">
                  <ul className="service-menu">
                    <li className="active">
                      <Link to={"/servicedetails"}>
                        <span>Engine Diagnostics</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Lube Oil and Filters</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Belts and Hoses</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Air Conditioning</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Brake Repair</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/servicedetails"}>
                        <span>Tire and Wheel Services</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <div className="brochure-bx">
                    <h5 className="title-head">Download</h5>
                    <Link to={"/servicedetails"} className="download-link">
                      <img src={Down1} alt="img" />
                      <h5 className="title">Download our Brochures</h5>
                      <span>Download</span>
                    </Link>
                    <Link to={"/servicedetails"} className="download-link">
                      <img src={Down2} alt="img" />
                      <h5 className="title">Our Company Details</h5>
                      <span>Download</span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToTop />
    </div>
  );
}

export default ServiceDetails;
