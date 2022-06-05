import React from "react";
import { motion } from "framer-motion";

import "./Styles.scss";

export default function ClipCardPlayer({ link, first }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.5, delay: first ? 0 : 0.3 }}
      initial={{ y: -200, opacity: 0, marginTop: "-2rem" }}
      animate={{ translateY: 200, opacity: 1, marginTop: 0 }}
      // exit={}
      className="ClipCardPlayer-Container"
    >
      <iframe
        title="YT-clip"
        scrolling="no"
        width="50.625%"
        height="90%"
        type="text/html"
        src={`${link}?autoplay=1&fs=0&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&samesite=secure`}
      ></iframe>
    </motion.div>
  );
}
