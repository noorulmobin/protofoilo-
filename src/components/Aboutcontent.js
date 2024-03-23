import "./Aboutcontentstyle.css";

import React from "react";
import { Link } from "react-router-dom";
import react1 from "../Assets/react1.jpg";
import react2 from "../Assets/react2.webp";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a friendly frontend web developer</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-top">
            <img src={react1} className="img" alt="true" />
          </div>
          <div className="img-bottom">
            <img src={react2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
