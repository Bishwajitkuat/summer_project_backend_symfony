import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import "./style/OrgDetail.css";
import axios from "axios";

const OrgDetail = () => {
  const params = useParams();
  const navigation = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8008/getOneOrganization/${params.id}`)
      .then((res) => {
        setData(res.data);
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
          <h4>Email: {data.email}</h4>
          <h4>Phone: {data.phone}</h4>
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

export default OrgDetail;
