import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style/AddOrg.css";
import Loader from "../UI/Loader";
import { useNavigate } from "react-router-dom";

const AddSpeaker = () => {
  const [allOrg, setAllOrg] = useState([]);
  const navigate = useNavigate();
  const [selectedOrg, setSelectedOrg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [AddSpeaker, setAddSpeaker] = useState({
    name: "",
    image: "",
    role: "",
    location: "",
    description: "",
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    created_at: new Date(),
  });

  useEffect(() => {
    axios
      .get("http://localhost:8008/getAllOrganizations")
      .then((res) => {
        setAllOrg(res.data);
        setIsLoading(false);
      })
      .catch((err) => alert(err.message));
  }, []);

  const changeHandler = (e) => {
    setAddSpeaker({ ...AddSpeaker, [e.target.name]: e.target.value });
  };

  const AddSpeakerHandler = (e) => {
    e.preventDefault();
    const finalObject = { ...AddSpeaker, organizations: selectedOrg };
    axios
      .post("http://localhost:8008/postToSpeakers", finalObject)
      .then((res) => {
        setAddSpeaker({
          name: "",
          image: "",
          role: "",
          description: "",
          email: "",
          phone: "",
          linkedin: "",
          twitter: "",
          facebook: "",
          created_at: new Date(),
          location: "",
        });
        alert(res.data);
        navigate("/admin/speakers_admin_board");
      })
      .catch((error) => alert(error.message));
    e.target.reset();
  };
  const SelectedOrgHandler = (e, item) => {
    if (e.target.checked) {
      const x = [...selectedOrg, item];
      setSelectedOrg(x);
    } else {
      const y = [...selectedOrg].filter((org) => org.id !== item.id);
      setSelectedOrg(y);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="form-wrapper">
        <h2>Add Speaker</h2>
        <form onSubmit={AddSpeakerHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={AddSpeaker.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="pic">Profile image</label>
            <input
              type="text"
              id="pic"
              name="image"
              alt="pic"
              value={AddSpeaker.image}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="organization">Organization</label>
            {allOrg.length > 0
              ? allOrg.map((item) => (
                  <div key={item.id}>
                    <label htmlFor={item.name}>{item.name}</label>
                    <input
                      type="checkbox"
                      id={item.name}
                      onChange={(e) => SelectedOrgHandler(e, item)}
                    />
                  </div>
                ))
              : ""}
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              id="role"
              value={AddSpeaker.role}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="location"
              id="address"
              value={AddSpeaker.address}
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
              value={AddSpeaker.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={AddSpeaker.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={AddSpeaker.phone}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="linkedin">Linkedin</label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={AddSpeaker.linkedin}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              value={AddSpeaker.twitter}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              name="facebook"
              id="facebook"
              value={AddSpeaker.facebook}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" id="submit" name="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpeaker;
