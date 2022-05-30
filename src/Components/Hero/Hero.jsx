import React from "react";
import { motion } from "framer-motion";

import WineBottle from "../WineBottle/WineBottle";

import "./Styles.scss";

export default function Hero() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      exit={{ opacity: 0, translateX: "100px" }}
      transition={transition}
      className="hero"
    >
      <div className="hero-container">
        <div className="hero-container-left container-half">
          {/* <WineBottle /> */}
          <h1 className="handwritten title">Wine About It</h1>
          <p className="handwritten authors">by Maya & QtCinderella</p>
          <p className="hero-info-p">NEW EPISODE EVERY MONTH </p>
          <p className="hero-info-p">Watch live on:</p>
        </div>
        <div className="hero-container-right container-half">
          {/* <h2 className="handwritten">by Maya & QtCinderella</h2>
          <p>NEW EPISODE EVERY MONTH </p>
          <p>Watch live on:</p> */}
        </div>
      </div>
    </motion.div>
  );
}
