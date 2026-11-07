import React from "react";

import DataBoundary from "../DataBoundary";
import MediaMeta from "./MediaMeta";

const MEDIA_CHUNK_SIZE = 4;

const Video = ({
  date,
  countryCode,
  title,
  description,
  source,
  sourceUrl,
  videoEmbedUrl,
  linkLabel,
}) => (
  <article className="video-card">
    <div className="video-card-text">
      <h2>{title}</h2>
      {description && <p className="video-card-description">“{description}”</p>}
      <MediaMeta
        date={date}
        countryCode={countryCode}
        source={source}
        sourceUrl={sourceUrl}
        linkLabel={linkLabel}
      />
    </div>
    <div className="video-card-player">
      <div className="video-frame">
        <iframe
          title={title}
          src={videoEmbedUrl}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </article>
);

/**
 * The videos, newest first. They are revealed in chunks: the next chunk
 * appears once the last rendered video scrolls into view.
 */
const VideoList = ({ data: videos, isPending, isError, strings }) => {
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
            <Video {...item} linkLabel={strings.sourceLink} />
          </div>
        ))}
      </div>
    </DataBoundary>
  );
};

export default VideoList;
