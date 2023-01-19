import {
  FaAmbulance,
  FaSyringe,
  FaStethoscope,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { TbMedicineSyrup } from "react-icons/tb";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./services.css";
const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: "unslick",
    },
  ],
};

function Services() {
  return (
    <div>
      <section className="section-area section-sp1 service-wraper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-7 mb-30 bhover">
              <div className="heading-bx">
                <h6 className="title-ext">Services</h6>
                <h2 className="title">
                  We Cover A Big Variety Of Medical Services
                </h2>
                <p>
                  We provide the special tips and advice’s of heath care
                  treatment.
                </p>
              </div>
              <Link to={"/service"} className="btn btn-secondary btn-lg shadow">
                All Services
              </Link>
            </div>
            <Slider
              className="col-xl-8 col-md-12 mb-15 serviceSlider"
              {...settings}
            >
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
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
