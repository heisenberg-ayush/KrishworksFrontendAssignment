import React from "react";
import "./css/NotesContent.css";

function NotesContent() {
  return (
    <div className="notes-container col-3 d-flex flex-column align-content-center">
      <div className="notes-header d-flex flex-row justify-content-between align-content-center">
        <div className="notes-heading">Notes</div>
        <div className="notes-btn">See all</div>
      </div>
      <div className="notes-content">
        <p>
          - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, error.
        </p>
        <p>
          - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, error.
        </p>
        <p>
          - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, error.
        </p>
        <button className="btn notes-content-btn">save note</button>
      </div>
      <div className="notes-footer">
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="doctor-detail d-flex flex-row align-content-center justify-content-between">
          <div className="doctor-identity d-flex flex-row">
            <span className="material-icons doctor-icon">perm_identity</span>
            <div className="doctor-name">Drg. Mega Nanade</div>
          </div>
          <div className="doctor-date">20 Nov'19</div>
        </div>
      </div>
    </div>
  );
}

export default NotesContent;
