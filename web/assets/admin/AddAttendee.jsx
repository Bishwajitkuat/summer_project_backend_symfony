import axios from "axios";
import React, { useState } from "react";
import "./style/AddAttendee.css";

const AddAttendee = () => {
  const [addAttendee, setAddAttendee] = useState({
    id: null,
    firstname: "",
    lastname: "",
    organization: "",
    position: "",
    location: "",
    description: "",
    phone: "",
    picture: "",
    purpose: [],
    email: "",
    password: "",
    agreeTerms: false,
    created_at: "",
    updated_at: "",
  });

  // const changeHandler = (e) => {
  //   if (e.target.type === "checkbox") {
  //     const { name, checked } = e.target;
  //     const selectedPurposes = [...addAttendee.purpose];

  //     if (checked) {
  //       selectedPurposes.push(name);
  //     } else {
  //       const index = selectedPurposes.indexOf(name);
  //       if (index !== -1) {
  //         selectedPurposes.splice(index, 1);
  //       }
  //     }
  //     setAddAttendee({ ...addAttendee, purpose: selectedPurposes });
  //   } else {
  //     setAddAttendee({ ...addAttendee, [e.target.name]: e.target.value });
  //   }
  // };
  const changeHandler = (e) => {
    if (e.target.type === 'checkbox') {
      const { name, checked } = e.target;
      setAddAttendee({ ...addAttendee, [name]: checked });
    } else {
      setAddAttendee({ ...addAttendee, [e.target.name]: e.target.value });
    }
  };

  const addAttendeeHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8008/register", addAttendee)
      .then((res) => {
        setAddAttendee({
          id: null,
          firstname: "",
          lastname: "",
          organization: "",
          position: "",
          location: "",
          description: "",
          phone: "",
          picture: "",
          purpose: [],
          email: "",
          password: "",
          agreeTerms: false,
          created_at: "",
          updated_at: "",
        });
        e.target.reset();
        window.location.reload();
      })
      .catch((error) => error);
  };

  return (
    <div>
      <div className="form-wrapper">
        <h2>Add new Attendee</h2>
        <form onSubmit={addAttendeeHandler}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={addAttendee.firstname}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={addAttendee.lastname}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              name="organization"
              id="organization"
              value={addAttendee.organization}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="position">Role</label>
            <input
              type="text"
              name="position"
              id="position"
              value={addAttendee.position}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="location">Address</label>
            <input
              type="text"
              name="location"
              id="location"
              value={addAttendee.location}
              onChange={changeHandler}
            />
          </div>
          <div>
            <p>Purpose of Visit</p>
            <div className="purpose">
              <input
                type="checkbox"
                id="sessions"
                name="AttendingSessions"
                value={addAttendee.Attendingsession}
                onChange={changeHandler}
              />
              <label htmlFor="sessions">Attending sessions</label>
            </div>
            <div className="purpose">
              <input
                type="checkbox"
                id="workshop"
                name="Attendingworkshop"
                value={addAttendee.Attendingworkshop}
                onChange={changeHandler}
              />
              <label htmlFor="workshop">Attending workshops</label>
            </div>
            <div className="purpose">
              <input
                type="checkbox"
                id="networking"
                name="Networking"
                value={addAttendee.networking}
                onChange={changeHandler}
              />
              <label htmlFor="networking">Networking</label>
            </div>
            <div className="purpose">
              <input
                type="checkbox"
                id="presenting"
                name="presenting"
                value={addAttendee.presenting}
                onChange={changeHandler}
              />
              <label htmlFor="presenting">Presenting</label>
            </div>
            <div className="purpose">
              <input
                type="checkbox"
                id="other"
                name="Other"
                value={addAttendee.other}
                onChange={changeHandler}
              />
              <label htmlFor="other">Other Business</label>
            </div>
          </div>
          <div>
            <label htmlFor="picture">Profile image</label>
            <input
              type="url"
              id="picture"
              name="picture"
              alt="pic"
              value={addAttendee.picture}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={addAttendee.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="integer"
              id="phone"
              name="phone"
              value={addAttendee.phone}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={addAttendee.password}
              onChange={changeHandler}
            />
          </div>
          <label>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={addAttendee.agreeTerms}
              onChange={changeHandler}
            />
            I agree to the terms and conditions
          </label>
          <div className="dateTime">
            <label htmlFor="create">Ceated-at</label>
            <input
              type="create"
              id="create"
              name="create"
              value={addAttendee.created_at}
              onChange={changeHandler}
            />
          </div>
          <div className="dateTime">
            <label htmlFor="update-at">Updated-at</label>
            <input
              type="update-at"
              id="update-at"
              name="update-at"
              value={addAttendee.updated_at}
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

export default AddAttendee;
