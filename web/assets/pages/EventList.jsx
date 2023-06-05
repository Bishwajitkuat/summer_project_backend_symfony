import React, { useState, useEffect } from "react";
import Cards from "../UI/Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import "./style/EventList.css";

const EventList = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("all");

  useEffect(() => {
    setIsLoading(true);

    axios.get("http://localhost:8008/getAllEvents").then((res) => {
      setData(res.data);
    });
    setIsLoading(false);
  }, []);

  const inputSearchHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const searchFilter = data.filter((event) => {
    return event.title.toUpperCase().includes(searchInput.toUpperCase());
  });

  const filterHandler = (e) => {
    setFilterInput(e.target.id);
  };
  const eventFilter =
    filterInput === "all"
      ? searchFilter
      : searchFilter.filter((event) => {
          return event.keywords.includes(filterInput);
        });
  return isLoading ? (
    <Loader />
  ) : (
    <div className="mainEvents">
      <h2 className="listHeader">Program</h2>
      <div className="search">
        <input
          type="text"
          id="search"
          placeholder="Search event..."
          onChange={inputSearchHandler}
        />
        <div className="filter">
          <h3 className="fliterBy">Filter By</h3>
          <div className="buttons">
            <input
              defaultChecked
              type="radio"
              name="filter"
              id="all"
              onChange={filterHandler}
            />
            <label htmlFor="all">All</label>

            <input
              type="radio"
              name="filter"
              id="session"
              onChange={filterHandler}
            />
            <label htmlFor="session">Session</label>
            <input
              type="radio"
              name="filter"
              id="workshop"
              onChange={filterHandler}
            />
            <label htmlFor="workshop">Workshops</label>
          </div>
        </div>
      </div>
      <div className="list">
        {eventFilter.map((event) => (
          <Cards key={event.id} event={event} />
        ))}
      </div>
      <button className="back" type="button" onClick={() => navigation(-1)}>
        <span className="material-symbols-outlined">undo</span>
        Go Back
      </button>
    </div>
  );
};

export default EventList;
