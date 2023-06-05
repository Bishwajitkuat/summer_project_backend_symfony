import React from "react";
import { Link } from "react-router-dom";
import "./style/Attendeescards.css";

const Attendeescards = ({ attendee }) => {
  return (
    <div className="card4">
      <div className="box4">
        <img src={attendee.image} alt="" />
      </div>
      <div className="list5">
        <p>
          Name:{attendee.firstname}
          {attendee.lastname}
        </p>
        <p>address:{attendee.address}</p>
        <Link to={`/attendeesList/${attendee.id}`}>
          <button>See more...</button>
        </Link>
      </div>
    </div>
  );
};

export default Attendeescards;
