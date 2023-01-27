import "./Report.css";
import "./about.css";
import "../index.css";
import NavBars from "../Sections/navbar";
import { FiHome } from "react-icons/fi";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

function Service() {
  let { data } = useSelector((store) => store.auth);
  if (data.isAuthenticated !== true) {
    notify("Please Login to get your reports");
  }
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Reports</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Report
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {data.isAuthenticated !== true ? null : (
        <div className="reportTables">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Disease</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.report.map((elem) => {
                return (
                  <tr>
                    <td>{elem.patientName}</td>
                    <td>{elem.patientDisease}</td>
                    <td>{elem.docName}</td>
                    <td>{elem.docDepartment}</td>
                    <td>{elem.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {data.isAuthenticated !== true ? (
        <div className="reportLogin">
          <h1>No reports available</h1>
          <h1>Please login !</h1>
        </div>
      ) : (
        <>
          {data?.report.map((elem) => {
            return (
              <div className="reportContainer">
                <div className="reportHeading">
                  <h1>HEALTH REPORT</h1>
                </div>
                <div className="reportDetail">
                  <div>
                    <p>Doctor Name : {elem.docName}</p>
                    <p>Number : {elem.docMobile}</p>
                    <p>Department : {elem.docDepartment}</p>
                  </div>
                  <div>
                    <p>Patient Name : {elem.patientName}</p>
                    <p>Age :{elem.patientAge}</p>
                    <p>Gender : {elem.patientGender}</p>
                  </div>
                </div>
                <div className="reportMedical">
                  <div>
                    <p>Blood Group : </p>
                    <p>Disease :</p>
                    <p>Temperature : </p>
                    <p>Weight :</p>
                    <p>BP :</p>
                    <p>Blood Sugar :</p>
                    <p>Remarks :</p>
                  </div>
                  <div>
                    <p>{elem.patientBloodGroup}</p>
                    <p> {elem.patientDisease}</p>
                    <p>{elem.patientTemperature} C</p>
                    <p>{elem.patientWeight} KG </p>
                    <p>{elem.patientBP} mm/hg</p>
                    <p>{elem.patientGlucose} mg/dl</p>
                    <p>{elem.extrainfo} </p>
                  </div>
                </div>
                <div className="reportMedicines">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Dosage</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {elem.medicines.map((ele) => {
                        return (
                          <tr>
                            <td>{ele.medName}</td>
                            <td>{ele.dosage}</td>
                            <td>{ele.duration}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="reportDate">
                  <p>Date : { elem.date}</p>
                  <p>Time : {elem.time }</p>
                </div>
              </div>
            );
          })}
        </>
      )}
      <Footer />
      <ToTop />
    </div>
  );
}

export default Service;
