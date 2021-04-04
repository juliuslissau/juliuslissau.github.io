import React from "react";
import "./tech.css";

export default function Tech({ text, color = "#000", children }) {
  return (
    <div className="tech">
      <div className="iconContainer" style={{ backgroundColor: color }}>
        {children}
      </div>
      <span>{text}</span>
    </div>
  );
}
