import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/AddEvent.css";
import Loader from "../UI/Loader";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState([{ keywordId: 0, keyword: "" }]);
  const [allSpeakers, setAllSpeakers] = useState([]);
  const [selectedSpk, setSelectedSpk] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateEvent, setupdateEvent] = useState({
    title: "",
    place: "",
    start_date: "",
    end_date: "",
    description: "",
    participents: [],
  });
  // keywords
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

  useEffect(() => {
    axios
      .get("http://localhost:8008/getAllSpeakers")
      .then((res) => {
        const allSpk = res.data;
        setAllSpeakers(allSpk);
        axios.get(`http://localhost:8008/getOneEvent/${id}`).then((res) => {
          setupdateEvent({
            ...res.data,
            start_date: res.data.start_date
              ? res.data.start_date.date.toString().substring(0, 16)
              : "",
            end_date: res.data.end_date
              ? res.data.end_date.date.toString().substring(0, 16)
              : "",
          });
          setSelectedSpk(res.data.speakers);
          setKeywords(res.data.keywords);
          const checkObj = {};
          allSpk.forEach((item) => {
            if (res.data.speakers.find((spk) => spk.id === item.id)) {
              checkObj[item.id] = true;
            } else {
              checkObj[item.id] = false;
            }
          });
          setIsChecked(checkObj);

          setIsLoading(false);
        });
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
    setupdateEvent((prevupdateEvent) => ({
      ...prevupdateEvent,
      [name]: value,
    }));
  };

  const updateEventHandler = (e) => {
    e.preventDefault();
    const finalEvent = {
      ...updateEvent,
      keywords: keywords,
      speakers: selectedSpk,
    };
    axios
      .patch(`http://localhost:8008/updateEvent/${id}`, finalEvent)
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
        <h2>Update Event</h2>
        <form onSubmit={updateEventHandler}>
          <div>
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="inputTextArea"
              value={updateEvent.title}
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
              value={updateEvent.place}
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
              value={updateEvent.start_date}
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
              value={updateEvent.end_date}
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
              value={updateEvent.description}
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
                    defaultChecked={isChecked[item.id]}
                  />
                </div>
              ))
              : ""}
          </div>
          <div className="buttonBlock">
            <BackButton />
            <button type="submit" id="submit" name="submit" value="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;