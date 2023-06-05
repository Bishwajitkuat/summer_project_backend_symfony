import React, { useState, useEffect } from "react";
import Orgcards from "../UI/Orgcards";
import "./style/OrgList.css";
import Loader from "../UI/Loader";
import axios from "axios";
import { useNavigate } from "react-router";

const OrgList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:8008/getAllOrganizations").then((res) => {
      setData(res.data);
    });
    setIsLoading(false);
  }, []);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  if (isLoading) {
    return <Loader />;
  }

  const searchFilter = data.filter((item) => {
    return item.name.toLowerCase().includes(searchInput.toLocaleLowerCase());
  });
  return (
    <div className="org">
      <h1>Organization List</h1>
      <input
        type="text"
        id="search"
        placeholder="Search org..."
        onChange={searchInputHandler}
      />
      <div className={"cardsWrapper"}>
        {searchFilter.map((org) => (
          <Orgcards key={org.id} organization={org} />
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

export default OrgList;
