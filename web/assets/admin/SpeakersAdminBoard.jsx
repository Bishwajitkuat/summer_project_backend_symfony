import { React, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
import "./SpeakersAdminBoard.css";
import { Link } from "react-router-dom";

const SpeakersAdminBoard = () => {
  const [speakers, setSpeakers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllSpeakers = () => {
    axios
      .get("http://localhost:8008/getAllSpeakers")
      .then((res) => {
        setSpeakers(res.data);
        setIsLoading(false);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => getAllSpeakers(), []);

  const deleteSpeaker = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8008/deleteSpeaker/${id}`)
      .then((res) => {
        alert(res.data);
        getAllSpeakers();
      })
      .catch((err) => alert(err.message));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="speakersAdminBoard">
      <Link to={"/admin/addSpeaker"}>
        <button>Create new speaker</button>
      </Link>
      {speakers.map((item) => (
        <div className="speakerAdminBoardCard" key={item.id}>
          <div>
            <img
              className="speakersAdminBoardImg"
              src={item.image}
              alt="profile"
            />
          </div>
          <div>
            <p>Id : {item.id}</p>
            <p>name : {item.name}</p>
            <p>
              Organization:
              {item.organizations.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </p>
          </div>
          <div>
            <p>Role : {item.role}</p>
            <p>Location : {item.location}</p>
            <p>Description : {item.description}</p>
          </div>
          <div>
            <p>Email : {item.email}</p>
            <p>Phone : {item.phone}</p>
            <p>Linkedin : {item.linkedin}</p>
            <p>Twitter : {item.twitter}</p>
            <p>Facebook : {item.facebook}</p>
            <p>Created : {item.created_at ? item.created_at.date : ""}</p>
            <p>Updated : {item.updated_at ? item.updated_at.date : ""}</p>
          </div>
          <div>
            <Link to={`/admin/editSpeaker/${item.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={(e) => deleteSpeaker(e, item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakersAdminBoard;
