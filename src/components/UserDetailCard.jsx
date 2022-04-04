import React from "react";
import "./css/UserDetailCard.css";

function UserDetailCard(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="card-text">{props.text}
          </p>
        </div>
      </div>
          <hr />
    </div>
  );
}

export default UserDetailCard;