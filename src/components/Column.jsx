import React, { useState } from "react";
import "./Column.css";

export default function Column(props) {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyColor = () => {
    // Copy to clipboard
    navigator.clipboard
      .writeText(`#${props.color}`)
      .then(() => {
        // Show copied notification
        setShowCopied(true);

        // Hide notification after 2 seconds
        setTimeout(() => {
          setShowCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="column"
      style={{
        backgroundColor: `#${props.color}`,
        color: props.textColor,
        position: "relative",
      }}
    >
      <div
        className="colorCode"
        onClick={handleCopyColor}
        style={{ cursor: "pointer" }}
      >
        {props.color}
      </div>

      {showCopied && (
        <div
          className="copied-popup"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "14px",
            zIndex: "10",
          }}
        >
          Copied {props.color} to clipboard!
        </div>
      )}
    </div>
  );
}
