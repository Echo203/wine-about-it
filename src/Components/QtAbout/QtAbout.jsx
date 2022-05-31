import React from "react";
import { motion } from "framer-motion";

//QT pics
import qt1 from "../../Static/qt-1.jpg";
import qt2 from "../../Static/qt-2.jpg";

import "./Styles.scss";

export default function QtAbout() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      exit={{ opacity: 0, translateX: "100px" }}
      transition={transition}
      className="QtAbout"
    >
      <div className="QtAbout-container">
        <div className="inner-Qt">
          <div className="content">
            <h2>QtCinderella</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consequatur facere, asperiores blanditiis similique dignissimos
              ratione inventore eaque aliquam, officia qui dicta? Ad quo, ipsam
              magni ab sed autem ducimus!
            </p>
            <div className="btn-row">
              <a href="youtube.com">YouTube</a>
            </div>
          </div>
          <div className="images">
            <div className="bottom-left">
              <img src={qt1} alt="" />
            </div>
            <div className="top-right">
              <img src={qt2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </motion.div>
  );
}
