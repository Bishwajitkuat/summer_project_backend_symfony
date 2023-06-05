import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/AddEvent.css";
import Loader from "../UI/Loader";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const navigate = useNavigate();
  const [addEvent, setAddEvent] = useState({
    title: "",
    place: "",
    start_date: "",
    end_date: "",
    description: "",
    // speakers: [],
    participents: [],
    created_at: new Date(),
  });
  // keywords
  const [keywords, setKeywords] = useState([{ keywordId: 0, keyword: "" }]);
  const nextKeywordId = () => {
    return Math.max(...keywords.map((item) => item.keywordId)) + 1;
  };

  const keywordChangeHandler = (e, i) => {
    const words = [...keywords];
    words[i][e.target.name] = e.target.value;
    setKeywords(words);
  };
  const handleAddKeyword = (e) => {
    e.preventDefault();
    const words = [...keywords, { keyword: "", keywordId: nextKeywordId() }];
    setKeywords(words);
  };
  const handleRemoveKeyword = (e, index) => {
    e.preventDefault();
    if (keywords.length > 1) {
      const words = [...keywords];
      words.splice(index, 1);
      setKeywords(words);
    }
  };
  // speakers
  const [allSpeakers, setAllSpeakers] = useState([]);
  const [selectedSpk, setSelectedSpk] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8008/getAllSpeakers")
      .then((res) => {
        setAllSpeakers(res.data);
        setIsLoading(false);
      })
      .catch((err) => alert(err.massage));
  }, []);

  const SelectedSpkHandler = (e, item) => {
    if (e.target.checked) {
      const x = [...selectedSpk, item];
      setSelectedSpk(x);
    } else {
      const y = [...selectedSpk].filter((spk) => spk.id !== item.id);
      setSelectedSpk(y);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddEvent((prevAddEvent) => ({
      ...prevAddEvent,
      [name]: value,
    }));
  };

  const addEventHandler = (e) => {
    e.preventDefault();
    const finalEvent = {
      ...addEvent,
      keywords: keywords,
      speakers: selectedSpk,
    };
    axios
      .post("http://localhost:8008/postToEvents", finalEvent)
      .then((res) => {
        alert(res.data);
        navigate("/admin/events_admin_board");
      })
      .catch((error) => alert(error.message));
    e.target.reset();
  };
  return isLoading ? (
    <Loader></Loader>
  ) : (
    <div>
      <div className="form-wrapper">
        <h2>Add new Event</h2>
        <form onSubmit={addEventHandler}>
          <div>
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="inputTextArea"
              value={addEvent.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="place">Venue</label>
            <input
              type="text"
              name="place"
              id="place"
              className="inputTextArea"
              value={addEvent.place}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="start_date">Begining (GMT+2)</label>
            <input
              type="datetime-local"
              className="inputTextArea"
              id="start_date"
              name="start_date"
              value={addEvent.start_date}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="end_date">Ending (GMT+2)</label>
            <input
              type="datetime-local"
              id="end_date"
              name="end_date"
              className="inputTextArea"
              value={addEvent.end_date}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="15"
              className="inputTextArea"
              rows="5"
              value={addEvent.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div>
            <label htmlFor="keywords">Keywords</label>

            {keywords.map((item, index) => (
              <div key={item.keywordId}>
                <input
                  type="text"
                  name="keyword"
                  id={item.keywordId}
                  className="inputTextArea"
                  value={item.keyword}
                  onChange={(e) => keywordChangeHandler(e, index)}
                />
                <button onClick={(e) => handleRemoveKeyword(e, index)}>
                  delete
                </button>
              </div>
            ))}
            <button onClick={(e) => handleAddKeyword(e)}>
              add new keyword
            </button>
          </div>

          <div>
            <label htmlFor="speakers">Speakers</label>
            {allSpeakers.length > 0
              ? allSpeakers.map((item) => (
                <div key={item.id}>
                  <label htmlFor={item.name}>{item.name}</label>
                  <input
                    type="checkbox"
                    id={item.name}
                    onChange={(e) => SelectedSpkHandler(e, item)}
                  />
                </div>
              ))
              : ""}
          </div>
          <div className="buttonBlock">
            <BackButton />
            <button type="submit" id="submit" name="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
