/**
 * The click-to-play YouTube embed ("lite YouTube"): the page first shows only
 * a thumbnail, and the real player — from the privacy-enhanced
 * youtube-nocookie.com domain — is loaded when the visitor presses play. No
 * YouTube player and no YouTube cookies for anyone who never does.
 */

const EMBED_ID = /^https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/;

/** The video id of a YouTube embed URL, or null for any other player. */
export const youtubeIdOf = (embedUrl) => embedUrl?.match(EMBED_ID)?.[1] ?? null;

export const youtubeThumbnailUrl = (videoId) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

export const youtubePlayerUrl = (videoId) =>
  `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

export const PLAYER_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
