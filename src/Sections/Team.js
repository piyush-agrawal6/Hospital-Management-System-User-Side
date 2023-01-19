import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";
import salman from "../Assets/salman.jpg";
import rajendra from "../Assets/rajendra.jpg";
import piyush from "../Assets/piyush.png";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={rajendra} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Rajendra Patel</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/centauricoder01"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rajendra01/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://centauricoder01.github.io/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={piyush} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Piyush Agrawal</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/piyush-agrawal6"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/piyush-agrawal-me/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://piyush-agrawal6.github.io/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={salman} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Salman Ajani</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="https://github.com/SalmanAjani" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/salmanajani26/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://salmanajani.github.io/" target="_blank">
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
