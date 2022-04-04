import React from "react";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasSidebar"
      aria-labelledby="offcanvasSidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
          Zendata
        </h5>
        <button
          type="button"
          className="text-reset btn"
          data-bs-dismiss="offcanvas"
        >
          <span class="material-icons">menu_open</span>
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="sidebar-body d-flex flex-column justify-content-center">
          <a href="/" className="sidebar-btn">
            Overview
          </a>
          <a href="/" className="sidebar-btn">
            Calender
          </a>
          <a href="/" className="sidebar-btn sidebar-btn-active">
            Patient List
          </a>
          <a href="/" className="sidebar-btn">
            Messages
          </a>
          <a href="/" className="sidebar-btn">
            Payment information
          </a>
          <a href="/" className="sidebar-btn">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
