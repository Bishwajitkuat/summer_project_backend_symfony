import React from "react";
import "./style/AddEvent.css";
import BackButton from "../components/BackButton";

const AddOrEditEvent = () => {
  return (
    <div>
      <div className="form-wrapper">
        <h2>Add new Seminar</h2>
        <form>
          <div>
            <label htmlFor="name">Event Title</label>
            <input
              type="text"
              name="name"
              id="name"
              className="inputTextArea"
            />
          </div>
          <div>
            <label htmlFor="time">Event Schedule</label>
            <div className="dateTime">
              <div>
                <label htmlFor="start">Start</label>
                <input type="date" id="date" name="date" />
                <input type="time" id="date" name="date" />
              </div>
              <div>
                <label htmlFor="end">End</label>
                <input type="date" id="date" name="date" />
                <input type="time" id="date" name="date" />
              </div>
            </div>
          </div>

          {/*    <div>
            <label htmlFor="organiser">Organizers</label>
            <input
              type="text"
              name="organiser"
              id="organiser"
              className="inputTextArea"
            />
          </div> */}
          <div>
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              name="venue"
              id="venue"
              className="inputTextArea"
            />
          </div>
          {/*  <div>
            <label htmlFor="pic">Profile image url</label>
            <input type="url" id="pic" name="image" alt="pic" />
          </div> */}
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="15"
              rows="5"
            ></textarea>
          </div>
          <div className="buttonBlock">
            <BackButton />
            <button type="submit" id="submit" name="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrEditEvent;
