import React from "react";
// import { motion } from "framer-motion";

import "./Styles.scss";

export default function Hero() {
  // const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="main-container">
      <div className="top-positioner"></div>
      <div className="positioner-container">
        <div className="title-container">
          <h1 className="handwritten">Wine About It</h1>
          <p className="handwritten">by Maya & QtCinderella</p>
        </div>
        <div className="side-positioner"></div>
      </div>
    </div>
  );
}
