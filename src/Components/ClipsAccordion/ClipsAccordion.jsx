import React from "react";

import "./Styles.scss";

//Images
// import WineBottle from "../SVG components/WineBottle";

//Single clip component
import ClipCard from "./ClipCard/ClipCard";

//Clips Data Mock
const clipsData = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=vOoaLhFOy4A",
    title: `Pokimane talks QTCinderella out of a $270,000 mistake`,
    episode: "5",
    viewCount: "583.0K",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=VvHbKdHuR50",
    title: `"I thought you were dumb"`,
    episode: "5",
    viewCount: "335.3K",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=XHfSDcTzNHg",
    title: `"you do look like her with the glasses on"`,
    episode: "6",
    viewCount: "235.9K",
  },
  {
    id: 4,
    link: "https://www.youtube.com/watch?v=NiZUclF6C1g",
    title: "QTCinderella and Maya asks if it smells or tastes good",
    episode: "4",
    viewCount: "203.5K",
  },
];

export default function ClipsAccordion() {
  return (
    <div className="clips-section-bg">
      <div className="clips-section-container">
        <div className="clips-section-title-container">
          <h2 className="clips-section-title handwritten">
            Most Memorable Moments
          </h2>
        </div>
        <div className="accordion-container">
          {clipsData.map((el) => {
            return (
              <ClipCard
                key={el.id}
                title={el.title}
                episode={el.episode}
                viewCount={el.viewCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
