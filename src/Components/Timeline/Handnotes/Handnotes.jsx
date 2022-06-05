import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./Styles.scss";

export default function Handnotes({ episodeDetails, left }) {
  return (
    <div className="handnotes-container">
      <p className="handnotes-title handwritten">
        {`Episode #${episodeDetails.episodeNumber}`} <br />{" "}
        {`${episodeDetails.day}`}
      </p>
      <p
        className={
          left
            ? "handnotes-notes-left handwritten"
            : "handnotes-notes handwritten"
        }
      >
        Notes: <br />
      </p>
      <ul className={left ? "handnotes-noteslist-left" : "handnotes-noteslist"}>
        {episodeDetails.notes.map((note) => {
          return (
            <li
              key={uuidv4()}
              className="handwritten handnotes-singlenote"
            >{`• ${note}`}</li>
          );
        })}
      </ul>
    </div>
  );
}
