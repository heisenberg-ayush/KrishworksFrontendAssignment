import "./App.css";
import Sidebar from "./components/Sidebar";
import ProfileContent from "./components/ProfileContent";
import NotesContent from "./components/NotesContent";
import AppointmentsContent from "./components/AppointmentsContent";
import FilesContent from "./components/FilesContent";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data1, setData1] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
        );
        const AppointmentDetail = await axios.get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details");

        setData1(response.data);
        setAppointment(AppointmentDetail.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!loading && <div>Loading...</div>}
      {loading && (
        <div className="App">
          <div className="header d-flex flex-row justify-content-between">
            <div className="header-main d-flex flex-row ">
              {/* Sidebar */}
              <button
                className="sidebar-btn btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSidebar"
                aria-controls="offcanvasSidebar"
              >
                <span className="material-icons">menu_open</span>
              </button>
              <Sidebar />
              <span class="material-icons patient-icon">perm_identity</span>
              <h1 className="patient-name">{data1[0].name}</h1>
            </div>

            <div className="header-accessories d-flex flex-row">
              <div className="searchbar">
                <label htmlFor="search-input"></label>
                <input
                  type="search"
                  className="searchInput"
                  id="search-input"
                  name="search-input"
                  placeholder="Search"
                />
              </div>
              <div className="add-btn btn d-flex flex-column align-items-center justify-content-center">
                <div className="material-icons">add</div>
              </div>
              <div className="notification-btn d-flex flex-column align-items-center justify-content-center">
                <div className="material-icons">notifications</div>
              </div>
            </div>
          </div>
          <hr />
          {/* Breadcrumb */}
          <div className="breadcrumb d-flex flex-row align-content-center align-items-center justify-content-center">
            <nav aria-label="breadcrumb" className="breadcrumb-area col-10">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/" className="breadcrumb-patient-name">
                    Patient List
                  </a>
                </li>
                <span class="material-icons">chevron_right</span>
                <li class="breadcrumb-item active" aria-current="page">
                  {data1[0].name}
                </li>
              </ol>
            </nav>
            <div className="breadcrumb-btns col-2 d-flex flex-row align-items-center justify-content-center">
              <div className="print-btn">
                <span class="material-icons">print</span>
              </div>
              <div className="editProject-btn d-flex flex-row mx-1">
                <div class="material-icons">edit_calendar</div>
                <div className="editProject-title">Edit Patient</div>
              </div>
            </div>
          </div>
          <hr />

          {/*--------------- Main Content ------------ */}
          <div className="main-container">
            {/* Profile Content */}
            <div className=" upper-container-app row">
              <ProfileContent data1={data1[0]} image={data1[1]["avatar"]} />
              <NotesContent />
            </div>
            <div className="lower-container-app row">
              <AppointmentsContent data={appointment[0]} />
              <FilesContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
