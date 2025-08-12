// src/components/Tutorial.js
import React from "react";

const Tutorial = ({ title, description, imageUrl, videoUrl }) => {
  return (
    <div className="tutorial-card">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} style={{ maxWidth: "100%" }} />
      <p>{description}</p>
      <video controls style={{ maxWidth: "100%" }}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Tutorial;
