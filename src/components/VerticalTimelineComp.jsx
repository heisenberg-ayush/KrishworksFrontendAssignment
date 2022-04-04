import React from "react";
import "./css/VerticalTimelineComp.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function VerticalTimelineComp(props) {
  console.log(props);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "black" }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      iconStyle={{ background: "white", color: "#bbc6fb36" }}
    >
      <div className="d-flex flex-row align-content-center justify-content-between">
        <div className="block1 d-flex flex-column align-items-center justify-content-between">
          <h3 className="vertical-timeline-element-title">
            {props.data["Date"]}
          </h3>
          <small className="timeline-small">{props.data["Time"]}</small>
        </div>
        <div className="timeline-divider"></div>

        <div className="block2 d-flex flex-column align-items-left justify-content-between">
          <small className="timeline-small">Treatment</small>
          <h4 className="timeline-h vertical-timeline-element-subtitle">
            {props.data["Treatment"]}
          </h4>
        </div>
        <div className="timeline-divider"></div>
        <div className="block3 d-flex flex-column align-items-left justify-content-between">
          <small className="timeline-small">Dentist</small>
          <h4 className="timeline-h">{props.data["Dentist"]}</h4>
        </div>
        <div className="block4 d-flex flex-column align-items-left justify-content-between">
          <small className="timeline-small">Nurse</small>
          <h4 className="timeline-h">{props.data["Nurse"]}</h4>
        </div>
        <button className="btn appointment-timeline-btn">
          <span class="material-icons">description</span>Note
        </button>
      </div>
    </VerticalTimelineElement>
  );
}

export default VerticalTimelineComp;
