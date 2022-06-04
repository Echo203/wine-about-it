import React from "react";

import "./Styles.scss";

import TimelineDot from "../../SVG components/TimelineDot";

export default function TimelineBar() {
  return (
    <div className="timelinebar-container">
      <div className="redbar"></div>
      <div className="glassbar"></div>
      <TimelineDot />
    </div>
  );
}
