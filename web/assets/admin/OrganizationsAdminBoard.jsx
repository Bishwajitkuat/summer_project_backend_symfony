import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../UI/Loader";
import BackButton from "../components/BackButton";
import "./style/OrganizationsAdminBoard.css";

const OrganizationsAdminBoard = () => {
  const [allOrg, setAllOrg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllOrg = () => {
    axios
      .get(`http://localhost:8008/getAllOrganizations`)
      .then((res) => {
        setAllOrg(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  useEffect(() => getAllOrg(), []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8008/deleteOrganization/${id}`)
      .then((res) => {
        alert(res.data);
        getAllOrg();
      })
      .catch((error) => alert(error));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="orgAdminBoard">
      <Link to={"/admin/addOrganization"}>
        <button>Create new Organization</button>
      </Link>
      {allOrg.map((item) => (
        <div className="orgAdminBoardCard">
          <div>
            <img
              className="orgAdminBoardCardImg"
              src={item.image}
              alt="Organization"
            />
          </div>
          <div>
            <p>Id: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Address: {item.address}</p>
          </div>
          <p>Description: {item.description}</p>
          <div>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Created: {item.created_at ? item.created_at.date : ""}</p>
            <p>Updated: {item.updated_at ? item.updated_at.date : ""}</p>
          </div>
          <div>
            <button>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <BackButton />
    </div>
  );
};
export default OrganizationsAdminBoard;
