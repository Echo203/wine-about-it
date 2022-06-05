import React from "react";
import eyeImage from "../../../Static/eye-main.png";

import ClipCardPlayer from "./ClipCardPlayer/ClipCardPlayer";

export default function ClipCard({
  title,
  id,
  link,
  episode,
  viewCount,
  highlightClip,
  highlightedClip,
}) {
  return (
    <>
      <div
        onClick={() => highlightClip(highlightedClip ? null : id)}
        className="clip-card"
        id={highlightedClip === id ? "highlighted" : null}
      >
        <p className="clip-title">{title}</p>
        <div className="card-right-container">
          <p className="clip-episode">{`Episode #0${episode}`}</p>
          <img src={eyeImage} width="35px" height="35px" alt="" />
          <p className="clip-view-count">{viewCount}</p>
        </div>
      </div>
      {highlightedClip ? <ClipCardPlayer link={link} /> : null}
    </>
  );
}
