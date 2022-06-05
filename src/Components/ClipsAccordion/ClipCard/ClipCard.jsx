import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import eyeImage from "../../../Static/eye-main.png";

import ClipCardPlayer from "./ClipCardPlayer/ClipCardPlayer";

export default function ClipCard({
  title,
  id,
  link,
  episode,
  viewCount,
  highlightClip,
  highlightedClip,
}) {
  const animateSingle = {
    initial: { opacity: 1, y: `${(id - 1) * 124.64}%`, zIndex: 11 },
    animate: { translateY: `-${(id - 1) * 124.64}%` },
    exit: { translateY: `${(id - 1) * 124.64}%` },
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        initial={
          highlightedClip === id ? animateSingle.initial : { y: `-${id}00%` }
        }
        animate={
          highlightedClip === id
            ? animateSingle.animate
            : { translateY: `${id}00%` }
        }
        exit={highlightedClip === id ? animateSingle.exit : null}
        onClick={() => highlightClip(highlightedClip ? null : id)}
        className="clip-card"
        id={highlightedClip === id ? "highlighted" : null}
      >
        <p className="clip-title">{title}</p>
        <div className="card-right-container">
          <p className="clip-episode">{`Episode #0${episode}`}</p>
          <img src={eyeImage} width="35px" height="35px" alt="" />
          <p className="clip-view-count">{viewCount}</p>
        </div>
      </motion.div>
      {highlightedClip ? (
        <ClipCardPlayer first={id === 1 ? true : false} link={link} />
      ) : null}
    </AnimatePresence>
  );
}
