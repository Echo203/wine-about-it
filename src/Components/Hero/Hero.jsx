import React from "react";
// import { motion } from "framer-motion";

import "./Styles.scss";
import WineBottle from "../WineBottle/WineBottle";

export default function Hero() {
  // const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const color = "#322D2F";

  return (
    <div className="main-container">
      <div className="top-half-container">
        <div className="vertical-66">
          <div className="bottles-container">
            <WineBottle
              classes="bottle"
              id="bottle1"
              width="141px"
              height="141px"
              color={color}
            />
            <WineBottle
              classes="bottle"
              id="bottle2"
              width="141px"
              height="141px"
              color={color}
            />
            <WineBottle
              classes="bottle"
              id="bottle3"
              width="242px"
              height="141px"
              color={color}
            />
          </div>
          <div className="title-container">
            <h1 className="handwritten">Wine About It</h1>
            <p className="handwritten">by Maya & QtCinderella</p>
          </div>
        </div>
        <div className="vertical-33"></div>
      </div>
    </div>
  );
}
