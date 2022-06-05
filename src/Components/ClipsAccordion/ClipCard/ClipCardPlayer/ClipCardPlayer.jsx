import React from "react";

import "./Styles.scss";

export default function ClipCardPlayer({ link }) {
  return (
    <div className="ClipCardPlayer-Container">
      <iframe
        title="YT-clip"
        scrolling="no"
        width="50.625%"
        height="90%"
        type="text/html"
        src={`${link}?autoplay=1&fs=0&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720`}
      ></iframe>
    </div>
  );
}
