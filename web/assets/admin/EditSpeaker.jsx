import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style/AddOrg.css";
import Loader from "../UI/Loader";

const AddSpeaker = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [allOrg, setAllOrg] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
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
  });
  const getAllOrganizations = () => {
    axios
      .get("http://localhost:8008/getAllOrganizations")
      .then((res) => {
        const allorganization = res.data;
        setAllOrg(allorganization);
        axios.get(`http://localhost:8008/getOneSpeaker/${id}`).then((res) => {
          setAddSpeaker(res.data);
          setSelectedOrg(res.data.organizations);
          const testCheckObj = {};
          allorganization.forEach((item) => {
            if (res.data.organizations.find((org) => org.id === item.id)) {
              testCheckObj[item.id] = true;
            } else {
              testCheckObj[item.id] = false;
            }
          });
          setIsChecked(testCheckObj);
          setIsLoading(false);
        });
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    getAllOrganizations();
  }, []);

  const changeHandler = (e) => {
    setAddSpeaker({ ...AddSpeaker, [e.target.name]: e.target.value });
  };

  const updateSpeakerHandler = (e) => {
    e.preventDefault();
    const finalObject = { ...AddSpeaker, organizations: selectedOrg };
    axios
      .patch(`http://localhost:8008/updateSpeaker/${id}`, finalObject)
      .then((res) => {
        alert(res.data);
        navigate("/admin/speakers_admin_board");
      })
      .catch((error) => alert(error.message));
    e.target.reset();
  };
  const SelectedOrgHandler = (e, item) => {
    if (e.target.checked) {
      const x = [...selectedOrg, item];
      const a = { ...isChecked, [item.id]: true };
      setIsChecked(a);
      setSelectedOrg(x);
    } else {
      const y = [...selectedOrg].filter((org) => org.id !== item.id);
      const b = { ...isChecked, [item.id]: false };
      setIsChecked(b);
      setSelectedOrg(y);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="form-wrapper">
        <h2>Update Speaker</h2>
        <form onSubmit={updateSpeakerHandler}>
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
                      onInput={(e) => SelectedOrgHandler(e, item)}
                      defaultChecked={isChecked[item.id]}
                    />
                  </div>
                ))
              : "no data found"}
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
              value={AddSpeaker.location}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpeaker;
