import React from "react";
import { motion } from "framer-motion";

//QT pics
import qt1 from "../../Static/qt-1.jpg";
import qt2 from "../../Static/qt-2.jpg";

import "./Styles.scss";

export default function QtAbout() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const transitionDelayed = {
    delay: 0.6,
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <div className="QtAbout">
      <div className="QtAbout-container">
        <div className="inner-Qt">
          <div className="content">
            <h2 className="handwritten">QtCinderella</h2>
            <hr className="hr-qt" />
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consequatur facere, asperiores blanditiis similique dignissimos
              ratione inventore eaque aliquam, officia qui dicta? Ad quo, ipsam
              magni ab sed autem ducimus!
            </p>
            <div className="media-box">
              <div className="media-box-half">
                <div className="btn-row">
                  <a href="https://www.youtube.com/c/QTCinderella">Red Wines</a>
                  <p className="media-stats">YouTube ...... 327k</p>
                </div>
                <div className="btn-row">
                  <a href="https://twitter.com/qtcinderella">Blue Wines</a>
                  <p className="media-stats">Twitter ...... 369k</p>
                </div>
              </div>
              <div className="media-box-half media-box-half-left">
                <div className="btn-row">
                  <a href="https://www.twitch.tv/qtcinderella">Sparkling</a>
                  <p className="media-stats">Twitch ...... 737k</p>
                </div>
                <div className="btn-row">
                  <a href="https://www.instagram.com/qtcinderella/">Rose</a>
                  <p className="media-stats">Instagram ...... 155k</p>
                </div>
              </div>
            </div>
          </div>
          <div className="images">
            <motion.div
              initial={{ opacity: 0, y: "200px" }}
              animate={{ opacity: 1, translateY: "-200px" }}
              transition={transitionDelayed}
              className="bottom-left"
            >
              <img src={qt1} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-200px" }}
              animate={{ opacity: 1, translateY: "200px" }}
              transition={transitionDelayed}
              className="top-right"
            >
              <img src={qt2} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        initial={{ opacity: 0, x: "836px" }}
        animate={{ opacity: 1, translateX: "-836px" }}
        transition={transition}
        className="black-box"
      ></div>
    </div>
  );
}
