import React from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";

const Home = () => {

  const Refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10)
  };
  return (
    <div>
      <div className="herobanner">
        <div className="text">
          <h2>Warm welcome to the students</h2>
          <h2>from all over the world </h2> <p>-Business College Helsinki</p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <Link to="/aboutSeminar" className="NL">
            <h4>About the seminar</h4>
          </Link>
        </div>
        <div className="box">
          <Link to="/eventList" className="NL">
            <h4 className="insideBox">Program</h4>
          </Link>
        </div>
        <div className="box">
          <Link to="/faq" className="NL">
            <h4 className="insideBox">Frequently Asked Questions</h4>
          </Link>
        </div>
        <div className="box">
          <Link to="/whatToDoHelsinki" className="NL">
            <h4 className="insideBox">What to do in Helsinki</h4>
          </Link>
        </div>
        <div className="box">
          <Link to="/register" className="NL" onClick={Refresh}>
            <h4 className="insideBox">Register | Log In</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
