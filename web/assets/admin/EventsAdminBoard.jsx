import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../UI/Loader";
import BackButton from "../components/BackButton";
import "./style/EventsAdminBoard.css";

const EventsAdminBoard = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getAllEvents = () => {
        axios
            .get(`http://localhost:8008/getAllEvents`)
            .then((res) => {
                setAllEvents([...res.data]);
                setIsLoading(false);
            })
            .catch(function (error) {
                alert(error);
            });
    };

    useEffect(() => getAllEvents(), []);
    const eventDelHandler = (e, id) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:8008/deleteEvent/${id}`)
            .then((res) => {
                alert(res.data);
                getAllEvents();
            })
            .catch((err) => alert(err.message));
    };
    return isLoading ? (
        <Loader></Loader>
    ) : (
        <div className="eventAdminBoard">
            <Link to={"/admin/addEvent"}>
                <button>Create new event</button>
            </Link>
            <div className="eventAdminBoardCardBody">
                {allEvents.length > 0
                    ? allEvents.map((item) => (
                        <div className="eventAdminBoardCard" key={item.id}>
                            <div>
                                <p>Id: {item.id}</p>
                                <p>Title: {item.title}</p>
                                <p>Place: {item.place}</p>
                            </div>
                            <div>
                                <p>Description: {item.description}</p>
                            </div>
                            <div>
                                <p>
                                    Keywords:
                                    {item.keywords.map((word) => (
                                        <li key={word.keywordId}>{word.keyword}</li>
                                    ))}
                                </p>
                                <p>
                                    speakers:{" "}
                                    {item.speakers.map((spk) => (
                                        <li key={spk.id}>{spk.name}</li>
                                    ))}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Start:{" "}
                                    {item.start_date
                                        ? item.start_date.date.substring(0, 16)
                                        : ""}
                                    , GMT+2
                                </p>
                                <p>
                                    End:{" "}
                                    {item.end_date ? item.end_date.date.substring(0, 16) : ""},
                                    GMT+2
                                </p>
                                <p>
                                    Created:{" "}
                                    {item.created_at
                                        ? item.created_at.date.substring(0, 16)
                                        : ""}
                                    , GMT+2
                                </p>
                                <p>
                                    Updated:{" "}
                                    {item.updated_at
                                        ? item.updated_at.date.substring(0, 16)
                                        : ""}
                                    , GMT+2
                                </p>
                            </div>

                            {/* <p>participents: {item.participents.map(person=> person.)}</p> */}
                            <div>
                                <Link to={`/admin/editEvent/${item.id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={(e) => eventDelHandler(e, item.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                    : ""}
            </div>
            <BackButton />
        </div>
    );
};

export default EventsAdminBoard;