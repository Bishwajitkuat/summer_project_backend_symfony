import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../UI/Loader";
import Moment from "react-moment";
import "./style/EventInfo.css";

function EventInfo() {
  const params = useParams();
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8008/getOneEvent/${params.id}`)
      .then((res) => {
        setData(res.data);
        setStart(new Date(res.data.start_date.date));
        setEnd(new Date(res.data.end_date.date));
      })
      .catch(function (error) {
        alert(error);
      });

    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="info">
      <h2 className="title">{data.title}</h2>
      <div className="eventDescription">
        <div className="textBox">
          <h3>About the event</h3>
          <h4 className="infoDescription">
            <Moment format="dddd DD MMM YYYY">{start}</Moment>
          </h4>
          <h4 className="infoDescription">
            <Moment format="HH:mm">{start}</Moment>-
            <Moment format="HH:mm">{end}</Moment> |{" "}
            <Moment
              duration={start}
              date={end}
              format={"H [hrs] m [min]"}
              trim="both"
            ></Moment>
          </h4>
          <h4 className="infoDescription"> {data.place}</h4>
          <h4 className="infoDescription">{data.keywords?.join(", ")}</h4>
        </div>
        {/*  <div className="textBox">
          <h4>Speaker(s):</h4>
          {data.speakers?.map((speaker) => (
            <p className="infoDescription" key={speaker.id}>
              {speaker.name} |{" "}
              {speaker.organization?.map((org) => org.name).join(", ")}
            </p>
          ))}
          </div> */}
        <div className="textBox">
          <h4>Description</h4>
          <p className="infoDescription">{data.description}</p>
        </div>
        <button className="back" type="button" onClick={() => navigation(-1)}>
          <span className="material-symbols-outlined">undo</span>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default EventInfo;
