import React from "react";
import { motion } from "framer-motion";

import "./Styles.scss";

import TimelineDot from "../../SVG components/TimelineDot";

export default function TimelineBar() {
  return (
    <div className="timelinebar-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 1 }}
        className="redbar-top"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 1 }}
        className="redbar-bot"
      ></motion.div>
      <div className="glassbar"></div>
      <TimelineDot />
    </div>
  );
}
