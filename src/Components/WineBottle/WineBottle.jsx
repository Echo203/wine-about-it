import React from "react";

import "./Styles.scss";

export default function WineBottle() {
  return (
    <>
      <svg
        width="160"
        height="400"
        viewBox="0 0 16 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1">
          <g id="bottle">
            <rect id="Rectangle 1" y="15" width="16" height="25" fill="black" />
            <ellipse id="Ellipse 1" cx="8" cy="15" rx="8" ry="4" fill="black" />
            <path
              id="Rectangle 2"
              d="M5 1C5 0.447715 5.44772 0 6 0H10C10.5523 0 11 0.447715 11 1V12H5V1Z"
              fill="black"
            />
            <rect
              id="Rectangle 3"
              x="4"
              y="2"
              width="8"
              height="3"
              rx="1"
              fill="black"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
