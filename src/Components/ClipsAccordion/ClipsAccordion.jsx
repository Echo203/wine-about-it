import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import "./Styles.scss";

//Single clip component
import ClipCard from "./ClipCard/ClipCard";

//Clips Data Mock
const clipsData = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/vOoaLhFOy4A",
    title: `Pokimane talks QTCinderella out of a $270,000 mistake`,
    episode: "5",
    viewCount: "583.0K",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/VvHbKdHuR50",
    title: `"I thought you were dumb"`,
    episode: "5",
    viewCount: "335.3K",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/XHfSDcTzNHg",
    title: `"you do look like her with the glasses on"`,
    episode: "6",
    viewCount: "235.9K",
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/NiZUclF6C1g",
    title: "QTCinderella and Maya asks if it smells or tastes good",
    episode: "4",
    viewCount: "203.5K",
  },
];

export default function ClipsAccordion() {
  const [highlightedClip, setHighlightedClip] = useState(null);

  const highlightClip = (id) => {
    setHighlightedClip(id);
  };

  return (
    <div className="clips-section-bg">
      <div className="clips-section-container">
        <div className="clips-section-title-container">
          <h2 className="clips-section-title handwritten">
            Most Memorable Moments
          </h2>
        </div>
        <div className="accordion-container">
          {highlightedClip ? (
            <ClipCard
              id={clipsData[highlightedClip - 1].id}
              key={uuid()}
              link={clipsData[highlightedClip - 1].link}
              title={clipsData[highlightedClip - 1].title}
              episode={clipsData[highlightedClip - 1].episode}
              viewCount={clipsData[highlightedClip - 1].viewCount}
              highlightClip={highlightClip}
              highlightedClip={highlightedClip}
            />
          ) : (
            clipsData.map((el) => {
              return (
                <ClipCard
                  id={el.id}
                  key={uuid()}
                  link={el.link}
                  title={el.title}
                  episode={el.episode}
                  viewCount={el.viewCount}
                  highlightClip={highlightClip}
                  highlightedClip={highlightedClip}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
