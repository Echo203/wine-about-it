import React from "react";
import { motion } from "framer-motion";

import "./Styles.scss";

//Svgs
import WineBottle from "../SVG components/WineBottle";
import TwitchIcon from "../SVG components/TwitchIcon";
import YouTubeIcon from "../SVG components/YouTubeIcon";

//Image
import MainPhoto from "../../Static/bg-removebg-outline-5-4-min — kopia cut.png";

export default function Hero() {
  // const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const slideIn = {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
  };
  const color = "#322D2F";

  return (
    <div className="hero">
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
            <motion.div
              transition={slideIn}
              initial={{ opacity: 0, y: "100px" }}
              animate={{ opacity: 1, translateY: "-100px" }}
              className="title-container"
            >
              <h1 className="handwritten">Wine About It</h1>
              <p className="handwritten">by Maya & QtCinderella</p>
            </motion.div>
          </div>
          <div className="vertical-33">
            <div className="orange-bar"></div>
          </div>
        </div>
        <div className="bottom-half-container">
          <div className="hero-text-container">
            <p className="welcome-text">
              The best podcast about lifestyle you can find on this planet.{" "}
              <br />
              Expand your view about life with succesfull women's perspective!
              <br /> 'Drunk calling' your ex at girl's night?
              <br /> We've got you on first one, second has already happened...
            </p>
          </div>
          <div className="buttons-container">
            <a href="https://www.twitch.com" className="hero-button">
              <p className="button-text">Watch live</p>
              <TwitchIcon />
            </a>
            <a href="https://www.youtube.com" className="hero-button">
              <p className="button-text">Past VODs</p>
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <img className="hero-image" src={MainPhoto} alt="" />
      </div>
    </div>
  );
}
