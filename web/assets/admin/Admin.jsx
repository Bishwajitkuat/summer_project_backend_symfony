import React from "react";
import { Link } from "react-router-dom";
import "./style/Admin.css";

function Admin() {
  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <h2>Choose section to make add new element:</h2>
        <div className="AdmButtonlist">
          <div className="box">
            <Link to="/admin/speakers_admin_board" className="NL">
              <h4 className="insideBox">Speaker Admin Panel</h4>
            </Link>
          </div>
          <div className="box">
            <Link to="/admin/events_admin_board" className="NL">
              <h4 className="insideBox">Events Admin Panel</h4>
            </Link>
          </div>
          <div className="box">
            <Link to="/admin/organizations_admin_board" className="NL">
              <h4 className="insideBox">Organization Admin Panel</h4>
            </Link>
          </div>
          <div className="box">
            <Link to="/admin/addSeminar" className="NL">
              <h4 className="insideBox">Create new Seminar</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="innerWrapper">
        <h2>Choose section to Edit/delete:</h2>
        <div className="AdmButtonlist">
          <div className="box">
            <Link to="/admin/EditDeleteSpeaker" className="NL">
              <h4 className="insideBox">Edit/Delete Speaker</h4>
            </Link>
          </div>
          <div className="box">
            <Link to="/admin/EditDeleteEvent" className="NL">
              <h4 className="insideBox">Edit/Delete Event</h4>
            </Link>
          </div>
          <div className="box">
            <Link to="/admin/EditDeleteOrganization" className="NL">
              <h4 className="insideBox">Edit/Delete Organization</h4>
            </Link>
          </div>
          <div className="box">
            <Link to="/admin/EditDeleteSeminar" className="NL">
              <h4 className="insideBox">Edit/Delete Seminar</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
