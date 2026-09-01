import {
  COUNTRY_CODES,
  SHEET_ARTICLES,
  SHEET_LOCATIONS,
  SHEET_VIDEOS,
  VIDEO_EMBED_HOSTS,
} from "../constants";
import {
  isoDate,
  link,
  oneOf,
  parseRows,
  text,
  videoEmbed,
} from "../utils/schema";
import { fetchSheetRows } from "./googleSheet";

/**
 * Schemas of the content spreadsheet. Each key is a column of the matching tab;
 * rows that do not satisfy every rule are dropped before they reach the UI.
 */

const country = oneOf(COUNTRY_CODES, { required: false });

const articleSchema = {
  date: isoDate(),
  countryCode: country,
  title: text({ maxLength: 300 }),
  source: text({ required: false, maxLength: 120 }),
  sourceUrl: link({ required: false }),
};

const videoSchema = {
  ...articleSchema,
  description: text({ required: false, maxLength: 4000 }),
  videoEmbedUrl: videoEmbed({ hosts: VIDEO_EMBED_HOSTS }),
};

const locationSchema = {
  countryCode: oneOf(COUNTRY_CODES),
  name: text({ maxLength: 250 }),
  place: text({ maxLength: 120 }),
};

const byDateDescending = (a, b) => Date.parse(b.date) - Date.parse(a.date);

const byCountryThenName = (a, b) =>
  a.countryCode.localeCompare(b.countryCode) || a.name.localeCompare(b.name);

const locationKey = ({ countryCode, name, place }) =>
  [countryCode, name, place].join(" / ").toLowerCase();

/**
 * Drops rows that describe the same entry twice. The same institution tends to
 * be added again over the years, and only the first occurrence is kept.
 */
const unique = (items, keyOf, sheetName) => {
  const byKey = new Map();
  const duplicates = [];

  items.forEach((item) => {
    const key = keyOf(item);

    if (byKey.has(key)) {
      duplicates.push(`  ${key}`);
    } else {
      byKey.set(key, item);
    }
  });

  if (duplicates.length) {
    console.warn(
      `Skipped ${duplicates.length} duplicate row(s) in sheet "${sheetName}":\n${duplicates.join("\n")}`,
    );
  }

  return [...byKey.values()];
};

const getSheetItems = async (sheetName, schema) =>
  parseRows(schema, await fetchSheetRows(sheetName), sheetName);

export const getArticles = async () =>
  (await getSheetItems(SHEET_ARTICLES, articleSchema)).sort(byDateDescending);

export const getVideos = async () =>
  (await getSheetItems(SHEET_VIDEOS, videoSchema)).sort(byDateDescending);

export const getLocations = async () =>
  unique(
    await getSheetItems(SHEET_LOCATIONS, locationSchema),
    locationKey,
    SHEET_LOCATIONS,
  ).sort(byCountryThenName);
