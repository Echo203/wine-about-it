import React from "react";

import WineBottle from "../WineBottle/WineBottle";

import "./Styles.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-container-left container-half">
          <WineBottle />
          <h1 className="handwritten"> Wine About It</h1>
        </div>
        <div className="hero-container-right container-half">
          <h2 className="handwritten">by Maya & QtCinderella</h2>
          <p>NEW EPISODE EVERY MONTH </p>
          <p>Watch live on:</p>
        </div>
      </div>
    </div>
  );
}
