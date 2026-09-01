import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import DataBoundary from "../../../components/DataBoundary/DataBoundary";
import { useVideos } from "../../../hooks/useContent";
import Video from "./Video/Video";

const MEDIA_CHUNK_SIZE = 4;

const VideoGrid = () => {
  const observer = React.useRef();

  const { data: videos, isPending, isError } = useVideos();

  const [visibleCount, setVisibleCount] = React.useState(MEDIA_CHUNK_SIZE);

  const visibleItems = React.useMemo(
    () => (videos ?? []).slice(0, visibleCount),
    [videos, visibleCount],
  );

  const hasMore = visibleCount < (videos?.length ?? 0);

  // Reveals the next chunk once the last rendered video scrolls into view.
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
    >
      <Grid color="black" m="25px" gap={8}>
        {visibleItems.map((item, idx) => (
          <GridItem
            key={`video-${idx}`}
            ref={idx === visibleItems.length - 1 ? lastElementRef : undefined}
          >
            <Video {...item} />
          </GridItem>
        ))}
      </Grid>
    </DataBoundary>
  );
};

export default VideoGrid;
