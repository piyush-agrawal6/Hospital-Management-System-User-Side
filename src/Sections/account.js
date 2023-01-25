import MobileImg from "../Assets/mobile.f82d7322.png";
import WomanImg from "../Assets/women.eb5c49c5.png";
import "./account.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../Redux/booking/action";
function Account() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    patientID: 1,
    gender: "not defined",
    mobile: "",
    address: "",
    department: "",
    problem: "",
    time: "",
    date: "",
  });
  const dispatch = useDispatch();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(createBooking(formData));
  };
  return (
    <div>
      <section className="section-area account-wraper1">
        <div className="container-fluid">
          <div className="appointment-inner section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-form form-wraper">
                    <h3>Book Appointment</h3>
                    <form action="#">
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          name="department"
                          onChange={handleFormChange}
                        >
                          <option>Select Department</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Problem"
                          value={formData.problem}
                          name="problem"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          value={formData.patientName}
                          name="patientName"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          value={formData.mobile}
                          name="mobile"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Age"
                          value={formData.age}
                          name="age"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          name="gender"
                          onChange={handleFormChange}
                        >
                          <option value="not defined">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          value={formData.address}
                          name="address"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          value={formData.date}
                          name="date"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="time"
                          className="form-control"
                          value={formData.time}
                          name="time"
                          onChange={handleFormChange}
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                        onClick={handleSubmit}
                      >
                        Appointment Now
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-thumb">
                    <img src={MobileImg} alt="img" />
                    <div className="images-group">
                      <img className="img1" src={WomanImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
