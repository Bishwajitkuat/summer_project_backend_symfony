import { Link } from "react-router-dom";
import "./style/Cards.css";
import Moment from "react-moment";

const Cards = ({ event }) => {
  const start = new Date(event.start_date.date);
  const end = new Date(event.end_date.date);

  return (
    <div className="card">
      <div className="detail">
        <h2>{event.title}</h2>
        <div className="textBox">
          <h4 className="cardInfo">
            <Moment format="dddd DD MMM YYYY">{start}</Moment>
          </h4>
          <h4 className="cardInfo">
            <Moment format="HH:mm">{start}</Moment>-
            <Moment format="HH:mm">{end}</Moment> |{" "}
            <Moment
              duration={start}
              date={end}
              format={"H [hrs] m [min]"}
              trim="both"
            ></Moment>
          </h4>
          <h4 className="cardInfo"> {event.place}</h4>
          <p>{event.keywords.join(", ")}</p>
        </div>
        {/*   <div className="textBox">
          <h4>Speaker(s):</h4>{" "}
          {event.speakers.map((speaker) => (
            <p key={speaker.id}>
              {speaker.name} |{" "}
              {speaker.organization?.map((org) => org.name).join(", ")}
            </p>
          ))}
        </div> */}
        <div className="textBox">
          <p>{event.description.split(" ")?.slice(0, 10).join(" ")}...</p>
        </div>
        <div className="ButtonLink">
          <Link to={event.id.toString()}>
            <button className="linkToCard">See more...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
