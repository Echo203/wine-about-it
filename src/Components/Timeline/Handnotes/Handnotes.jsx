import React from "react";

import "./Styles.scss";

export default function Handnotes({ episodeDetails }) {
  return (
    <div className="handnotes-container">
      <p className="handnotes-title handwritten">
        {`Episode #${episodeDetails.episodeNumber}`} <br />{" "}
        {`${episodeDetails.day}`}
      </p>
      <p className="handnotes-notes handwritten">
        Notes: <br />
        <ul className="handnotes-noteslist">
          {episodeDetails.notes.map((note) => {
            return (
              <li className="handwritten handnotes-singlenote">{`• ${note}`}</li>
            );
          })}
        </ul>
      </p>
    </div>
  );
}
