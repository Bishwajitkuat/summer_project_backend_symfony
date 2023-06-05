import React, { useState, useEffect } from "react";
import "./style/AttendeesList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Attendeescards from "../UI/Attendeescards";

const AttendeesList = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5004/attendees").then((res) => {
      setData(res.data);
    });
  }, []);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchFilter = data.filter((item) => {
    const fullName = `${item.firstname} ${item.lastname}`;
    return fullName.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className="att">
      <h1>Attendees List</h1>
      <input
        type="text"
        id="search"
        placeholder="Search attendee..."
        onChange={searchInputHandler}
      />
      <div className="cards5">
        {searchFilter.map((attendee) => (
          <Attendeescards key={attendee.id} attendee={attendee} />
        ))}
      </div>
      <div className="btns">
        <button className="back" type="button" onClick={() => navigation(-1)}>
          <span className="material-symbols-outlined">undo</span>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AttendeesList;
