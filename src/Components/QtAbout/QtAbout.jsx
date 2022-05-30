import React from "react";
import { motion } from "framer-motion";

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
        <div className="QtAbout-container-left QtAbout-half"></div>
        <div className="QtAbout-container-right QtAbout-half"></div>
      </div>
    </motion.div>
  );
}
