import React from "react";
import YouTubePlayer from "react-player/lib/players/YouTube";
import "./index.scss";

export default props => {
  const { devicetype } = props;

  return (
    <div className="section-grade-player">
      <div className="content">
        <div className={`player-wrapper ${devicetype}`}>
          <YouTubePlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=NC9qmrS-Cg4&"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};
