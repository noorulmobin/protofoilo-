import  "./designstyle.css";

import React from 'react';
import IntroImg from "../Assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export const Design = () => {
  return (

    <div className="designs">
        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>NOOR UL MOBIN</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}
