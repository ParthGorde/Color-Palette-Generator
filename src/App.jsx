import React, { useState, useEffect } from "react";
import Column from "./components/Column";
import Navbar from "./components/Navbar";
import "./App.css";
import logo from "./assets/color.png";

export default function App() {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const isDarkColor = (hexColor) => {
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const [colors, setColors] = useState([
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]);

  const updateColors = () => {
    setColors(colors.map(() => generateRandomColor()));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        updateColors();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [colors]);

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Navbar />

      {showMessage && (
        <div className="message">
          <p>Press Space to generate colors</p>
        </div>
      )}
      <div className="columns">
        {colors.map((color, index) => (
          <Column
            key={index}
            color={color}
            textColor={isDarkColor(color) ? "white" : "black"}
          />
        ))}
      </div>
    </div>
  );
}
