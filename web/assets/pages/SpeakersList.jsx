import React, { useState, useEffect } from "react";
import "./style/AttendeesList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Speakerscards from "../UI/Speakerscards";

const SpeakersList = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8008/getAllSpeakers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchFilter = data.filter((item) => {
    return item.name.toLowerCase().includes(searchInput.toLocaleLowerCase());
  });
  return (
    <div className="att">
      <h1>Speakers List</h1>
      <input
        type="text"
        id="search"
        placeholder="Search speaker..."
        onChange={searchInputHandler}
      />
      <div className={"cards5"}>
        {searchFilter.map((speaker) => (
          <Speakerscards key={speaker.id} speaker={speaker} />
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

export default SpeakersList;
