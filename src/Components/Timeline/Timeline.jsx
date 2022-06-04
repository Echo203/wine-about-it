import React from "react";

import "./Styles.scss";

//Components
import WineServing from "../SVG components/WineServing";
import EpisodeCard from "./EpisodeCard/EpisodeCard";
import TimelineBar from "./TimelineBar/TimelineBar";
import Handnotes from "./Handnotes/Handnotes";

//Episodes images
import sevenThumbnail from "../../Static/ep7-thumbnail.jpg";
import sixThumbnail from "../../Static/ep6-thumbnail.jpg";
import fiveThumbnail from "../../Static/ep5-thumbnail.jpg";

const episodesDataMock = [
  {
    title: `Girl's Trip Is Cancelled`,
    description: `  QTCinderella and Maya recap Girls Trip, hanging out with the girls, weird stories, and more! Wine About It Podcast`,
    thumbnail: sevenThumbnail,
    episodeNumber: 7,
    day: "07/05/22",
    notes: ["covid’s a b*tch", "constipation hurts", "mayas ex hehe"],
  },
  {
    title: `I Confronted My Ex...`,
    description: ` QTCinderella and Maya Wine About it Podcast #6. Maya calls her ex about the bandcamp incident, Toxic stories from past relationships, Coachella, QTCinderella reads her highschool diary, and much more.`,
    thumbnail: sixThumbnail,
    episodeNumber: 6,
    day: "11/04/22",
    notes: ["xx", "yy", "zz"],
  },
  {
    title: `The Streamer Awards Afterparty `,
    description: ` QTCinderella and Maya Wine About it Podcast #5. Streamer Awards Recap, Maya finds out she was cheated on in the 8th grade, Qt explains mormon loopholes and a bunch of other topics. `,
    thumbnail: fiveThumbnail,
    episodeNumber: 5,
    day: "14/03/22",
    notes: ["xx", "yy", "zz"],
  },
];

export default function Timeline() {
  return (
    <div className="timeline-section">
      <div className="timeline-section-container">
        <div className="timeline-section-top-container">
          <div className="timeline-section-title-container">
            <h2 className="timeline-section-title handwritten">
              Episode History
            </h2>
          </div>
          <WineServing />
        </div>
        <div className="timeline-section-bot-container">
          {episodesDataMock.map((ep) => {
            return (
              <div className="timeline-section-episode-container">
                <div className="timeline-section-side-container">
                  {ep.episodeNumber % 2 ? (
                    <EpisodeCard episodeDetails={ep} />
                  ) : (
                    <Handnotes episodeDetails={ep} />
                  )}
                </div>
                <div className="timeline-section-bar-container">
                  <TimelineBar />
                </div>
                <div className="timeline-section-side-container">
                  {ep.episodeNumber % 2 ? (
                    <Handnotes episodeDetails={ep} />
                  ) : (
                    <EpisodeCard episodeDetails={ep} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
