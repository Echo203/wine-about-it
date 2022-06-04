import React from "react";

import "./Styles.scss";

import WineServing from "../SVG components/WineServing";

export default function Timeline() {
  return (
    <div className="timeline-section">
      <div className="timeline-section-container">
        <div className="timeline-section-top-container">
          <div className="timeline-section-title-container">
            <h2 className="timeline-section-title handwritten">
              Episode History
            </h2>
          </div>
          <WineServing />
        </div>
      </div>
    </div>
  );
}
