import React from "react";
import eyeImage from "../../../Static/eye-main.png";

export default function ClipCard({ title, episode, viewCount }) {
  return (
    <div className="clip-card">
      <p className="clip-title">{title}</p>
      <div className="card-right-container">
        <p className="clip-episode">{`Episode #0${episode}`}</p>
        <img src={eyeImage} width="35px" height="35px" alt="" />
        <p className="clip-view-count">{viewCount}</p>
      </div>
    </div>
  );
}
