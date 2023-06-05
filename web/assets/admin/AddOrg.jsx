import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style/AddOrg.css";

const AddOrg = () => {
  const navigate = useNavigate();
  const [addOrg, setAddOrg] = useState({
    name: "",
    image: "",
    description: "",
    locatiion: "test 1",
    email: "",
    phone: "",
    address: "",
    created_at: new Date(),
  });

  const changeHandler = (e) => {
    setAddOrg({ ...addOrg, [e.target.name]: e.target.value });
  };

  const addOrgHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8008/postToOrganizations", addOrg)
      .then((res) => {
        setAddOrg({
          name: "",
          image: "",
          description: "",
          locatiion: "",
          email: "",
          phone: "",
          address: "",
          created_at: new Date(),
        });
        navigate("/admin/organizations_admin_board");
      })
      .catch((err) => alert(err.message));
    e.target.reset();
  };

  return (
    <div>
      <div className="form-wrapper">
        <h2>Add Organization</h2>
        <form onSubmit={addOrgHandler}>
          <div>
            <label htmlFor="name">Organization Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={addOrg.name}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="pic">Company pic</label>
            <input
              type="text"
              id="pic"
              name="image"
              alt="pic"
              value={addOrg.image}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="15"
              rows="5"
              value={addOrg.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={addOrg.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={addOrg.phone}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={addOrg.address}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" id="submit" name="submit" value="submit">
            Create
          </button>
        </form>
        <div className="btns"></div>
      </div>
    </div>
  );
};

export default AddOrg;
