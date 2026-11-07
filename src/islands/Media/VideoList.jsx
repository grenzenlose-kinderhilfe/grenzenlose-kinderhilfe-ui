import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { PLAYER_ALLOW, youtubeIdOf } from "../../lib/youtube";
import DataBoundary from "../DataBoundary";
import LiteYouTube from "../LiteYouTube";
import MediaMeta from "./MediaMeta";

const MEDIA_CHUNK_SIZE = 4;

/**
 * The description, clamped to a few lines (see Media.css). A toggle to show
 * the rest appears only when the text actually overflows the clamp; the full
 * text is always in the HTML.
 */
const VideoDescription = ({ id, text, strings }) => {
  const ref = React.useRef();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isClamped, setIsClamped] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (!node || isExpanded) return undefined;

    const measure = () =>
      setIsClamped(node.scrollHeight > node.clientHeight + 1);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);

    return () => observer.disconnect();
  }, [text, isExpanded]);

  return (
    <>
      <p
        ref={ref}
        id={id}
        className="video-card-description"
        data-expanded={isExpanded}
      >
        {text}
      </p>
      {(isClamped || isExpanded) && (
        <button
          type="button"
          className="video-card-toggle"
          aria-expanded={isExpanded}
          aria-controls={id}
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? strings.showLess : strings.showMore}
        </button>
      )}
    </>
  );
};

/** YouTube waits for a click; other players (videa.hu) embed as they are. */
const VideoPlayer = ({ title, videoEmbedUrl, playLabel }) => {
  const youtubeId = youtubeIdOf(videoEmbedUrl);

  if (youtubeId) {
    return (
      <LiteYouTube videoId={youtubeId} title={title} playLabel={playLabel} />
    );
  }

  return (
    <div className="video-frame">
      <iframe
        title={title}
        src={videoEmbedUrl}
        loading="lazy"
        allow={PLAYER_ALLOW}
        allowFullScreen
      />
    </div>
  );
};

const Video = ({
  title,
  description,
  sourceUrl,
  videoEmbedUrl,
  strings,
  descriptionId,
  ...meta
}) => (
  <article className="video-card">
    <div className="video-card-player">
      <VideoPlayer
        title={title}
        videoEmbedUrl={videoEmbedUrl}
        playLabel={strings.playVideo}
      />
    </div>
    <div className="video-card-text">
      <MediaMeta {...meta} />
      <h2>{title}</h2>
      {description && (
        <VideoDescription
          id={descriptionId}
          text={description}
          strings={strings}
        />
      )}
      {sourceUrl && (
        <a
          className="video-card-source"
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {strings.viewSource}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </div>
  </article>
);

/**
 * The videos, newest first. They are revealed in chunks: the next chunk
 * appears once the last rendered video scrolls into view.
 */
const VideoList = ({
  data: videos,
  isPending,
  isError,
  strings,
  locale,
  countries,
}) => {
  const observer = React.useRef();

  const [visibleCount, setVisibleCount] = React.useState(MEDIA_CHUNK_SIZE);

  const visibleItems = React.useMemo(
    () => (videos ?? []).slice(0, visibleCount),
    [videos, visibleCount],
  );

  const hasMore = visibleCount < (videos?.length ?? 0);

  const lastElementRef = React.useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      if (!node || !hasMore) return;

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((count) => count + MEDIA_CHUNK_SIZE);
        }
      });

      observer.current.observe(node);
    },
    [hasMore],
  );

  React.useEffect(() => () => observer.current?.disconnect(), []);

  return (
    <DataBoundary
      isLoading={isPending}
      isError={isError}
      isEmpty={!videos?.length}
      strings={strings}
    >
      <div className="video-list">
        {visibleItems.map((item, idx) => (
          <div
            key={`${item.videoEmbedUrl}-${idx}`}
            ref={idx === visibleItems.length - 1 ? lastElementRef : undefined}
          >
            <Video
              {...item}
              descriptionId={`video-description-${idx}`}
              strings={strings}
              locale={locale}
              countries={countries}
            />
          </div>
        ))}
      </div>
    </DataBoundary>
  );
};

export default VideoList;
