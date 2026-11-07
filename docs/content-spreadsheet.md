# Content spreadsheet

The media articles, the videos and the supported institutions come from a
public Google Spreadsheet. The sheet is read twice:

- **at build time**, and the content is written into the HTML, so search
  engines index it and visitors see it immediately;
- **in the browser** on every page view, so an edit shows up without a new
  deployment.

## Setting it up

1. Create a spreadsheet with three tabs named exactly `articles`, `videos` and
   `locations`.
2. Import the seed data: **File → Import → Upload**, pick `data/articles.csv`,
   `data/videos.csv`, `data/locations.csv` and choose _Replace current sheet_
   with the comma separator. Do this once per tab.
3. Format the `date` column as a date (**Format → Number → Date**). The display
   format does not matter, the app always receives an unambiguous value.
4. Share the spreadsheet: **Share → General access → Anyone with the link →
   Viewer**. No API key is needed, but the sheet must stay link-viewable.
5. Copy the id from the URL
   (`https://docs.google.com/spreadsheets/d/<id>/edit`) into `GOOGLE_SHEET_ID`
   in [`src/constants.js`](../src/constants.js), or provide it at build time as
   the `PUBLIC_GOOGLE_SHEET_ID` environment variable.

Edits appear for visitors on their next page load. Search engines see them after
the next build, so rebuild now and then to keep the indexed version current. If
the sheet cannot be reached during a build, the build still succeeds and those
pages load the content in the browser only.

## Columns

The first row of every tab is the header and must contain the column names
below. Capitalisation, spaces and accents in the header are ignored, so
`Country code` and `countryCode` both work. Extra columns are ignored, so notes
for the editors can be kept in the sheet.

### `articles`

| Column        | Required | Rules                                                 |
| ------------- | -------- | ----------------------------------------------------- |
| `date`        | yes      | a real calendar date                                  |
| `countryCode` | no       | one of `AT`, `CH`, `DE`, `HU`, `RO`, `SK`, `UA`, `XK` |
| `title`       | yes      | max. 300 characters                                   |
| `source`      | no       | max. 120 characters                                   |
| `sourceUrl`   | no       | `http(s)` link                                        |

### `videos`

The `articles` columns plus:

| Column          | Required | Rules                 |
| --------------- | -------- | --------------------- |
| `description`   | no       | max. 4000 characters  |
| `videoEmbedUrl` | yes      | YouTube or Videa link |

A normal link copied from the browser is fine
(`https://www.youtube.com/watch?v=…`, `https://youtu.be/…`,
`https://videa.hu/videok/…`): the app converts it to the player URL itself.

### `locations`

| Column        | Required | Rules                                                 |
| ------------- | -------- | ----------------------------------------------------- |
| `countryCode` | yes      | one of `AT`, `CH`, `DE`, `HU`, `RO`, `SK`, `UA`, `XK` |
| `name`        | yes      | max. 250 characters                                   |
| `place`       | yes      | max. 120 characters                                   |

Adding a new country means adding its code to `COUNTRY_CODES` in
[`src/constants.js`](../src/constants.js) and a country name to each translation file in
`src/i18n/locales/*.json`.

## What happens to invalid rows

Every value is trimmed and checked against the rules above before it is
displayed. A row that breaks any rule is **skipped entirely** — the rest of the
sheet is still shown. Completely empty rows are ignored, and `-`, `n/a` or
`nincs` in an optional cell count as empty.

In the `locations` tab rows describing the same institution are also collapsed:
`countryCode` + `name` + `place` identify an entry, compared without regard to
capitalisation or spacing, and only the first occurrence is displayed. Adding an
institution that is already listed therefore changes nothing.

Skipped rows are reported in the build log and the browser console with their row number, for
example:

```
Skipped 1 invalid row(s) in sheet "videos":
  row 8: date is not a valid calendar date: "2025-02-30"; videoEmbedUrl points to an unsupported site: "vimeo.com"
```

Text cells are tidied up before use: surrounding and repeated spaces are
collapsed and a trailing comma left over from copying (`Önkormányzat, `) is
removed.

Links are also restricted on purpose: `sourceUrl` only accepts `http(s)`
addresses, and the video embed only accepts YouTube and Videa, because that
value ends up inside an iframe on the site.

## How it is wired together

| File                            | Role                                              |
| ------------------------------- | ------------------------------------------------- |
| `src/lib/googleSheet.js`        | reads a tab through the public gviz endpoint      |
| `src/lib/schema.js`             | field validators and row filtering                |
| `src/lib/content.js`            | the schema of each tab                            |
| `src/lib/buildContent.js`       | loads the content once per build for prerendering |
| `src/islands/useLiveContent.js` | refreshes the prerendered content in the browser  |
| `src/islands/DataBoundary.jsx`  | loading / error / empty states                    |
| `data/*.csv`                    | seed export of the original hard-coded data       |
