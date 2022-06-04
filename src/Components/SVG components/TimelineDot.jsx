import React from "react";

export default function TimelineDot() {
  return (
    <>
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="timeline-dot-container"
      >
        <circle cx="48" cy="44" r="15" fill="#C82525" />
        <g>
          <circle
            className="timeline-dot"
            cx="48"
            cy="44"
            r="18"
            fill="white"
            fill-opacity="0.2"
            shape-rendering="crispEdges"
          />
        </g>
      </svg>
    </>
  );
}
