import React from "react";

import {
  PLAYER_ALLOW,
  youtubePlayerUrl,
  youtubeThumbnailUrl,
} from "../lib/youtube";

/**
 * Click-to-play YouTube video inside an island (see src/lib/youtube.js).
 * Static pages use src/components/LiteYouTube.astro, the same markup.
 */
const LiteYouTube = ({ videoId, title, playLabel, className = "" }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className={`video-frame lite-youtube ${className}`}>
      {isPlaying ? (
        <iframe
          title={title}
          src={youtubePlayerUrl(videoId)}
          allow={PLAYER_ALLOW}
          allowFullScreen
          // Keyboard users land on the player they just started.
          ref={(node) => node?.focus()}
        />
      ) : (
        <button
          type="button"
          className="lite-youtube-button"
          aria-label={`${playLabel}: ${title}`}
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={youtubeThumbnailUrl(videoId)}
            alt=""
            loading="lazy"
            width="480"
            height="360"
          />
          <svg
            className="lite-youtube-play"
            viewBox="0 0 68 48"
            width="68"
            height="48"
            aria-hidden="true"
          >
            <path
              d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 12.9.1 24 .1 24s0 11.1 1.4 16.3a8.5 8.5 0 0 0 6 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35.1 67.9 24 67.9 24s0-11.1-1.4-16.3z"
              fill="#f00"
            />
            <path d="M45 24 27 14v20z" fill="#fff" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default LiteYouTube;
