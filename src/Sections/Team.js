import "../index.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import member1 from "../Assets/member1.22ac1d59.jpg";
import member2 from "../Assets/member2.d03a0686.jpg";
import member3 from "../Assets/member3.0d822ecc.jpg";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Doctor</h6>
            <h2 className="title">Meet Best Doctors</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={member1} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Dr. Addition Smith</h4>
                    <span className="text-secondary">Dentist</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="twitter.com">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="instagram.com">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={member2} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Dr. Mahfuz Riad</h4>
                    <span className="text-secondary">Chiropractor</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="twitter.com">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="instagram.com">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={member3} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Dr. David Benjamin</h4>
                    <span className="text-secondary">Cardiologist</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="twitter.com">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="instagram.com">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com">
                        <FaLinkedin />
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
