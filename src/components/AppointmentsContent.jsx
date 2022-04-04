import React from "react";
import "./css/AppointmentsContent.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VerticalTimelineComp from "./VerticalTimelineComp";

function AppointmentsContent(props) {
  console.log(props.data);
  return (
    <div className="appointment-container">
      <div className="appointment-navbar">
        <button className="btn appointment-btn appointment-btn-active">Upcoming Appointments</button>
        <button className="btn appointment-btn">Past Appointments</button>
        <button className="btn appointment-btn">Medical Records</button>
      </div>
      <div className="appointment-content">
        <div className="appointment-content-header d-flex flex-row align-content-center justify-content-between">
          <h3 className="appointment-content-header-heading">
            Root Canal Treatment
          </h3>
          <div className="appointment-content-header-r d-flex flex-row">
            <div class="appointment-content-header-btn material-icons">
              expand_less
            </div>
            <div appointment-content-header-p>Show previous Treatment</div>
          </div>
        </div>
        <hr />
        <VerticalTimeline
          className="hello"
          layout={"1-column-left"}
          lineColor={"black"}
        >
          <VerticalTimelineComp data={props.data["Upcoming Appointments"]} />
          <VerticalTimelineComp data={props.data["Post Appointment"]} />
          <VerticalTimelineComp data={props.data["Medical Records"]} />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default AppointmentsContent;
