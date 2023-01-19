import {
  FaAmbulance,
  FaSyringe,
  FaStethoscope,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { TbMedicineSyrup } from "react-icons/tb";
import "./about.css";
import "../index.css";
import NavBars from "../Sections/navbar";
import { FiHome } from "react-icons/fi";
import { RiSurgicalMaskFill } from "react-icons/ri";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Services</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="section-area section-sp1 service-wraper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 mb-15">
              <div className="feature-container feature-bx2 feature2">
                <div className="feature-box-xl mb-30">
                  <span className="icon-cell">
                    <RiSurgicalMaskFill />
                  </span>
                </div>

                <div className="icon-content">
                  <h3 className="ttr-title">Operations</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <div className="feature-container feature-bx2 feature2">
                <div className="feature-box-xl mb-30">
                  <span className="icon-cell">
                    <FaBriefcaseMedical />
                  </span>
                </div>

                <div className="icon-content">
                  <h3 className="ttr-title">Surgery</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <div className="feature-container feature-bx2 feature2">
                <div className="feature-box-xl mb-30">
                  <span className="icon-cell">
                    <FaSyringe />
                  </span>
                </div>

                <div className="icon-content">
                  <h3 className="ttr-title">Vaccine</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <div className="feature-container feature-bx2 feature2">
                <div className="feature-box-xl mb-30">
                  <span className="icon-cell">
                    <FaAmbulance />
                  </span>
                </div>

                <div className="icon-content">
                  <h3 className="ttr-title">Emergency</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <div className="feature-container feature-bx2 feature2">
                <div className="feature-box-xl mb-30">
                  <span className="icon-cell">
                    <FaStethoscope />
                  </span>
                </div>

                <div className="icon-content">
                  <h3 className="ttr-title">Diagnostics</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <div className="feature-container feature-bx2 feature2">
                <div className="feature-box-xl mb-30">
                  <span className="icon-cell">
                    <TbMedicineSyrup />
                  </span>
                </div>

                <div className="icon-content">
                  <h3 className="ttr-title">Treatment</h3>
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

export default Service;
