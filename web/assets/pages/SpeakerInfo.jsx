import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";

import axios from "axios";

const SpeakerInfo = () => {
  const params = useParams();
  const navigation = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/getOneSpeaker/${params.speakerInfo}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        alert(error);
      });
  }, [params.speakerInfo]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="orgDetail">
      <h1 className="name">{data.name}</h1>
      <div>
        <img src={data.image} alt={data.name} />
      </div>
      <div className="cont">
        <div className="desc">
          <h2>Description</h2>
          <p>{data.description}</p>
        </div>
        <div className="contact">
          <h4>
            Organization:
            {data.organizations.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </h4>
          <h4>Role: {data.role}</h4>
          <h4>Address: {data.location}</h4>
          <h4>Email: {data.email}</h4>
          <h4>Phone: {data.phone}</h4>
          <h4>Linkden: {data.linkedin}</h4>
          <h4>Twitter: {data.twitter}</h4>
          <h4>Facebook: {data.facebook}</h4>
        </div>
      </div>
      <div>
        <button className="back" type="button" onClick={() => navigation(-1)}>
          <span className="material-symbols-outlined">undo</span>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SpeakerInfo;
