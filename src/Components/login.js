import "./login.css";
import "../index.css";
import logo from "../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import NavBars from "../Sections/navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogin, forgotPassword } from "../Redux/auth/action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

function Login() {
  const [form, setForm] = useState({ patientID: "", password: "" });
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    try {
      dispatch(authLogin(form)).then((res) => {
        if (res.message === "Login Successful.") {
          notify("Login Successful.");
          return navigate("/");
        }
        if (res.message === "Wrong credentials, Please try again.") {
          return notify("Wrong credentials, Please try again.");
        }
        if (res.message === "Error occurred, unable to Login.") {
        }
      });
    } catch (error) {
      console.log(error);
      return notify("Error occurred, unable to Login.");
    }
  };
  const [forgotLoading, setforgetLoading] = useState(false);
  const HandlePassword = () => {
    let data = { email, type: "patient" };
    setforgetLoading(true);
    dispatch(forgotPassword(data)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setemail("");
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };

  return (
    <>
      <ToastContainer />
      <NavBars />
      <div className="section-area account-wraper2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="appointment-form form-wraper">
                <div className="logo">
                  <img src={logo} alt="img" />
                </div>
                <form action="#">
                  <div className="form-group">
                    <h6>Patient ID</h6>
                    <input
                      name="patientID"
                      value={form.patientID}
                      type="text"
                      className="form-control"
                      placeholder="ID"
                      onChange={onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <h6>Password</h6>
                    <input
                      name="password"
                      value={form.password}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={onChange}
                    ></input>
                  </div>
                  <div className="form-group" onClick={handleClick}>
                    <Link
                      type="botton"
                      className="btn mb-30 btn-lg btn-primary w-100"
                    >
                      Login
                    </Link>
                    <p>Forgot Account Details?</p>
                  </div>
                </form>
                <div className="forgotPass">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={({ target }) => setemail(target.value)}
                    placeholder="Enter email"
                  />
                  <br />
                  <button onClick={HandlePassword}>
                    {forgotLoading ? "Loading.." : "Send Mail"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
