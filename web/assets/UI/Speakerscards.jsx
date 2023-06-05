import React from "react";
import { Link } from "react-router-dom";
import "./style/Attendeescards.css";

const Speakerscards = ({ speaker }) => {
  return (
    <div className="card4">
      <div className="box4">
        <img src={speaker.image} alt="" />
      </div>
      <div className="list5">
        <p>Name:{speaker.name}</p>
        <p>Email:{speaker.email}</p>
        <Link to={`/speakerslist/${speaker.id}`}>
          <button>See more...</button>
        </Link>
      </div>
    </div>
  );
};

export default Speakerscards;
