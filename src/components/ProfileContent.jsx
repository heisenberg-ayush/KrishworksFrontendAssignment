import React from "react";
import "./css/ProfileContent.css";
import user from "../assets/user.png";
import UserDetailCard from "./UserDetailCard";

function ProfileContent(props) {
  return (
    <div className="col-9 profile-container d-flex flex-row">
      <div className="col-4 user-profile d-flex flex-column justify-content-center align-items-center">
        <img
          src={user}
          width={120}
          height={120}
          alt="profile pic"
          className="user-pic"
        />
        <h3 className="user-name text-center">{props.data1.name}</h3>
        <small className="user-email">{props.data1["e-email"]}</small>
        <div className="user-something d-flex flex-row justify-content-between align-content-center">
          <div className="user-past d-flex flex-column justify-content-center align-items-center">
            <div className="user-past-number">{props.data1.Past}</div>
            <div className="user-past-detail">Past</div>
          </div>
          <div className="user-something-divider"></div>
          <div className="user-upcoming d-flex flex-column justify-content-center align-items-center">
            <div className="user-upcoming-number">{props.data1.Upcoming}</div>
            <div className="user-upcoming-detail">Upcoming</div>
          </div>
        </div>
        <button className="send-message-btn btn">Send Message</button>
      </div>

      {/* ------------------ user body ------------------- */}
      <div className="col-8 user-body container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <UserDetailCard title="Gender" text={props.data1.Gender} />
          <UserDetailCard title="Birthday" text={props.data1.Birthday} />
          <UserDetailCard title="Phone Number" text={props.data1["Phone Number"]} />
          <UserDetailCard title="Street Address" text={props.data1["Street Address"]} />
          <UserDetailCard title="City" text={props.data1["ZIP Code"]} />
          <UserDetailCard title="ZIP Code" text={props.data1["ZIP Code"]} />
          <UserDetailCard title="Member Status" text={props.data1["Member Status"]} />
          <UserDetailCard
            title="Registration Date"
            text={props.data1["Register Date"]}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
