import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";

import axios from "axios";

const AttendeesDetail = () => {
  const params = useParams();
  const navigation = useNavigate();
  const [data, setData] = useState({});
  const purposeString = data.purpose?data.purpose.join(", "):"";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5004/attendees/${params.attendeesdetail}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        alert(error);
      });
    setIsLoading(false);
  }, [params.attendeesdetail]);
  if (isLoading) {
    return <Loader />;
  }
  

  return (
    <div className="orgDetail">
      <h1 className="name">{data.name}</h1>
      <div>
        <img src={data.image} alt={data.name} />
      </div>
      <div className="cont">
        <div className="desc">
          <h2>Name:{data.firstname}{data.lastname}</h2>
         
        </div>
        <div className="contact">
          <h4>Organization: {data.organization}</h4>
          <h4>Role: {data.role}</h4>
          <h4>Address: {data.address}</h4>
          <h4>Purpose of visit: {purposeString}</h4>
          <h4>Created-At: {data.created_at}</h4>
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

export default AttendeesDetail;
