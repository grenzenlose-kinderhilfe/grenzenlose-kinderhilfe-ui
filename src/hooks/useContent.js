import { useQuery } from "@tanstack/react-query";

import { getArticles, getLocations, getVideos } from "../api/content";

const CONTENT_QUERY_OPTIONS = {
  staleTime: 5 * 60 * 1000,
  gcTime: 30 * 60 * 1000,
  retry: 1,
  refetchOnWindowFocus: false,
};

const useContentQuery = (key, queryFn) =>
  useQuery({ queryKey: ["content", key], queryFn, ...CONTENT_QUERY_OPTIONS });

export const useArticles = () => useContentQuery("articles", getArticles);

export const useVideos = () => useContentQuery("videos", getVideos);

export const useLocations = () => useContentQuery("locations", getLocations);
