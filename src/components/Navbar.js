import { Link } from "react-router-dom";
import "./Navbarstyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

export const Navbar = () => {
  const [click] = useState(false);
  const handleClick = () => !click;

  const [color, Setcolor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 100) {
      Setcolor(true);
    } else {
      Setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);

  const [currentItem, setcurrentItem] = useState(null);

  const handleLinkClick = (itemId) => {
    setcurrentItem(itemId);
  };
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menubar.active" : "nav-menu"}>
        <li
          onClick={() => handleLinkClick("home")}
          style={{
            border: currentItem === "home" ? "1px solid yellow" : "none",
            transition: "box-shadow 0.3s",
            ":hover": {
              boxShadow: "5 6 5px rgba(5, 5, 5, 0.5)",
            },
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => handleLinkClick("project")}
          style={{
            border: currentItem === "project" ? "1px solid yellow" : "none",
          }}
        >
          <Link to="/Project">Project</Link>
        </li>
        <li
          onClick={() => handleLinkClick("about")}
          style={{
            border: currentItem === "about" ? "1px solid yellow" : "none",
          }}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => handleLinkClick("contact")}
          style={{
            border: currentItem === "contact" ? "1px solid yellow" : "none",
          }}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          onClick={() => handleLinkClick("skills")}
          style={{
            border: currentItem === "skills" ? "1px solid yellow" : "none",
          }}
        >
          <Link to="/skills">Skills</Link>
        </li>
        
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
