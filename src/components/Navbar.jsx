import React from "react";
import logo from "../assets/color.png";
import "./Navbar.css";


export default function Navbar() {
  return (
    <div className="navbar">
      <span className="left-span">Press Space to generate colors</span>
      <span>
        <h1>
          Color{" "}
          <span>
            <img src={logo} alt="logo" />
          </span>{" "}
          Palette
        </h1>
      </span>
      <span className="right-span">Click On Color to Copy</span>
    </div>
  );
}
