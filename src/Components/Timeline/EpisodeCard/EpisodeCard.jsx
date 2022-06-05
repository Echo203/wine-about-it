import React, { useState } from "react";

import "./Styles.scss";

export default function EpisodeCard({ episodeDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="episode-card">
      <div className="episode-thumbnail-container">
        <img
          className="episode-thumbnail"
          wdith="372px"
          height="210px"
          src={episodeDetails.thumbnail}
          alt=""
        />
      </div>
      <h3 className="episode-title">
        {`Episode #${episodeDetails.episodeNumber}`}
        <br />
        {episodeDetails.title}
      </h3>
      <p className="episode-description">{episodeDetails.description}</p>
    </div>
  );
}
