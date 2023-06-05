import React from "react";
import { Link } from "react-router-dom";
import "./style/Orgcards.css";

const Orgcards = ({ organization }) => {
  return (
    <div className="card">
      <div className="box3">
        <img src={organization.image} alt={organization.name} />
      </div>
      <div className="organizationInformation">
        <h4>Name:{organization.name}</h4>
        <p>Email:{organization.email}</p>
        <Link to={organization.id.toString()}>
          <button className="linkToCard">See more...</button>
        </Link>
      </div>
    </div>
  );
};

export default Orgcards;
