import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import items from "./videos.json";
import { useInfiniteQuery } from "@tanstack/react-query";

import Video from "./Video/Video";

const MEDIA_CHUNK_SIZE = 4;

const VideoGrid = () => {
  const observer = React.useRef();

  const sortedMediaItems = React.useMemo(
    () => items.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    [],
  );

  const chunks = sortedMediaItems.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / MEDIA_CHUNK_SIZE);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const fetchMedia = async ({ pageParam = 0 }) =>
    chunks.length > pageParam ? chunks[pageParam] : [];

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["media"],
      queryFn: fetchMedia,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length ? allPages.length : undefined,
    });

  const lastElementRef = React.useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading],
  );

  const flatData = React.useMemo(
    () => data?.pages.reduce((acc, current) => [...acc, ...current], []),
    [data],
  );

  return (
    <Grid color="black" m="25px" gap={8}>
      {flatData &&
        flatData.map((item, idx) => (
          <GridItem key={idx} ref={lastElementRef}>
            <Video {...item} />
          </GridItem>
        ))}
    </Grid>
  );
};

export default VideoGrid;
