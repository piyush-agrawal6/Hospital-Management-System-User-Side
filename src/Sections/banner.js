import { Link } from "react-router-dom";
import headerImage from "../Assets/doctor.7c2bc96d.png";
import doctor from "../Assets/doctor.webp";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <h5 className="backimg">We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button>
              <Link to={"/about"}>Read More</Link>
            </button>
          </div>

          <div className="col-lg-5 col-md-5">
            <img src={doctor} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
