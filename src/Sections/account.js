import MobileImg from "../Assets/mobile.f82d7322.png";
import WomanImg from "../Assets/women.eb5c49c5.png";
import "./account.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking, createPatient } from "../Redux/booking/action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

function Account() {
  let initialData = {
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
    email: "",
    disease: "",
    time: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(createPatient({ ...formData, patientID: Date.now() })).then(
        (res) => {
          console.log(res);
          let data = { ...formData, patientID: res.id };
          dispatch(createBooking(data));
          setFormData(initialData);
          notify("Appointment Booked Successfully");
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
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
                        <input
                          type="email"
                          className="form-control"
                          placeholder="email"
                          value={formData.email}
                          name="email"
                          onChange={handleFormChange}
                          required
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
                          required
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
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="disease"
                          value={formData.disease}
                          name="disease"
                          onChange={handleFormChange}
                          required
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
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          name="gender"
                          onChange={handleFormChange}
                          required
                        >
                          <option value="">Select Gender</option>
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
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          value={formData.date}
                          name="date"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="time"
                          className="form-control"
                          value={formData.time}
                          name="time"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                        onClick={handleSubmit}
                      >
                        {loading ? "Loading..." : "Book Now"}
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
