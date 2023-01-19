import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import "./about.css";
import { FiHome } from "react-icons/fi";
import "./notfound.css";
import "../index.css";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Page Not Found</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Page Not Found
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="section-area section-sp2 error-404">
        <div className="container">
          <div className="inner-content">
            <h2 className="error-title">
              4<span></span>4
            </h2>
            <h3 className="error-text">
              The Page you were looking for, couldn't be found.
            </h3>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="clearfix">
              <a className="btn btn-primary m-r5" href="/">
                Back
              </a>
              <a className="btn btn-primary" href="/">
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToTop />
    </div>
  );
}

export default NotFound;
