import React from "react";
import "./style/AboutSeminar.css";
import { Link } from "react-router-dom";

function AboutSeminar(props) {
  return (
    <div className="info">
      <h2 className="title">This Seminar</h2>
      <div className="eventDescription">
        <div className="textBox">
          <h4>About</h4>
          <p>
            Join us for an enlightening seminar at Business College Helsinki,
            where industry experts and thought leaders will gather to share
            valuable insights and knowledge on the latest trends and
            advancements in business and entrepreneurship. This seminar is
            designed to provide aspiring entrepreneurs, business professionals,
            and students with a unique opportunity to learn from successful
            individuals who have made significant contributions to their
            respective fields.
          </p>

          <p>
            Through engaging presentations, interactive workshops, and panel
            discussions, participants will gain valuable perspectives on various
            aspects of business, including innovation, leadership, marketing,
            finance, and sustainable practices. Whether you are an aspiring
            entrepreneur looking to launch your own venture or a business
            professional seeking to enhance your skills and network, this
            seminar will provide you with the inspiration and knowledge to
            thrive in today's dynamic business landscape.
          </p>
        </div>
        <div className="textBox">
          <h4>Institutions attending</h4>
          <p>InnovateTech Solutions | Helsinki, Finland</p>
          <p>Growth Strategies Ltd. | Stockholm, Sweden</p>
          <p>TechHub Innovation Center | Oslo, Norway</p>
          <p>Marketing Insights Group | Copenhagen, Denmark</p>
          <p>
            <Link to={"./orgList"} className="linkSeeMore">
              See more...
            </Link>
          </p>
        </div>
        <div className="textBox">
          <h4>Speakers</h4>
          <p>John Smith | CEO | InnovateTech Solutions</p>
          <p>Emily Johnson | Marketing Director | Growth Strategies Ltd.</p>
          <p>Peter Andersen | Head of Innovation | TechHub Innovation Center</p>
          <p>
            Sarah Thompson | Market Research Analyst | Marketing Insights Group
          </p>
          <p>
            Michael Davis | Sustainability Manager | Sustainable Business
            Alliance
          </p>
          <p>
            <Link to={"/speakersList"} className="linkSeeMore">
              See more...
            </Link>
          </p>
        </div>
        <div className="textBox">
          <h4>When?</h4>
          <p>12.06.23-17.06.23</p>
        </div>
        <div className="textBox">
          <h4>Where?</h4>
          <p>BC Helsinki.</p>
          <p>
            For information about certain event, check the page of the event
          </p>
        </div>
        <div className="textBox">
          <h4>How to get there?</h4>
          <p>
            Helsinki has an excellent public transport system (HSL) comprising
            bus, tram, metro, commuter train and ferry services. With a single
            ticket you can hop aboard trams, buses, the metro and even the
            municipal ferry to Suomenlinna. You can even change from one mode of
            transport to another as long as your ticket is still valid...{" "}
            <Link
              to={
                "https://www.myhelsinki.fi/en/info/getting-around-helsinki#Raitiovaunulla"
              }
              className="linkSeeMore"
              target={"_blank"}
            >
              Read more
            </Link>
          </p>

          <h4>Some main routes:</h4>
          <p>
            <Link
              to={"https://goo.gl/maps/QpuSSv2vErna2Dzs9"}
              className="linkSeeMore"
              target={"_blank"}
            >
              From Airport
            </Link>
          </p>
          <p>
            <Link
              to={"https://goo.gl/maps/NyeU2U8c9JJdF9TW8"}
              className="linkSeeMore"
              target={"_blank"}
            >
              From Helsinki city center
            </Link>
          </p>
        </div>
        <div className="textBoxWithMap">
          <h4>Location of Helsinki Business College on Google Maps:</h4>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.95415147383!2d24.9359156!3d60.2016098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920991ece823df%3A0xd4b4f30731ef9db7!2sBusiness%20College%20Helsinki!5e0!3m2!1sen!2sfi!4v1685282210149!5m2!1sen!2sfi"
            title="CollegeLocation"
            width="300"
            height="150"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
          <p>Helsinki public transport system link:</p>
          <p>
            <Link
              to={"https://www.hsl.fi/en"}
              className="linkSeeMore"
              target={"_blank"}
            >
              HSL
            </Link>
          </p>
          <p>Long-distance reailway operator in Finland:</p>
          <p>
            <Link
              to={"https://www.hsl.fi/en"}
              className="linkSeeMore"
              target={"_blank"}
            >
              VR Group
            </Link>
          </p>
        </div>
      </div>
      <div className="buttonsBlock">
        <div className="ButtonLink">
          <Link to={"/eventList"}>
            <button className="linkToCard">See Program</button>
          </Link>
        </div>
        <div className="ButtonLink">
          <Link to={"/"}>
            <button className="linkToCard">Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSeminar;
