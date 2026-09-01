import { GOOGLE_SHEET_BASE_URL, GOOGLE_SHEET_ID } from "../constants";

/**
 * Reads a tab of the public content spreadsheet through the gviz endpoint.
 *
 * The endpoint needs no API key as long as the spreadsheet is shared with
 * "Anyone with the link can view", and it answers with typed cells, so no CSV
 * parsing is needed. The response is JSON wrapped in a JavaScript callback:
 *
 *   /..../ google.visualization.Query.setResponse({...});
 */

const GVIZ_DATE = /^Date\((\d+),(\d+),(\d+)/;

const unwrapResponse = (body) => {
  const start = body.indexOf("(");
  const end = body.lastIndexOf(")");

  if (start === -1 || end <= start) {
    throw new Error("Unexpected response from Google Sheets");
  }

  return JSON.parse(body.slice(start + 1, end));
};

const pad = (value) => String(value).padStart(2, "0");

const readCell = (cell) => {
  const value = cell?.v;

  if (value === null || value === undefined) return "";

  if (typeof value === "string") {
    // Cells formatted as a date come back as "Date(2024,0,15)" (month is
    // zero based), everything else is plain text.
    const date = value.match(GVIZ_DATE);

    return date
      ? `${date[1]}-${pad(Number(date[2]) + 1)}-${pad(date[3])}`
      : value;
  }

  if (typeof value === "boolean") return value ? "true" : "false";

  return String(value);
};

// Header cells are matched loosely, so "Country code" and "countryCode" both
// map to the same field.
const normalizeHeader = (label) =>
  String(label ?? "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();

const toRows = (table) => {
  const headers = table.cols.map((col) => normalizeHeader(col.label));

  return table.rows
    .map((row) =>
      headers.reduce(
        (acc, header, index) =>
          header ? { ...acc, [header]: readCell(row?.c?.[index]) } : acc,
        {},
      ),
    )
    .filter((row) => Object.values(row).some((value) => value !== ""));
};

export const fetchSheetRows = async (sheetName) => {
  if (!GOOGLE_SHEET_ID) {
    throw new Error(
      "Missing Google Sheet id: set GOOGLE_SHEET_ID in src/constants.js or the PUBLIC_GOOGLE_SHEET_ID environment variable",
    );
  }

  const url = `${GOOGLE_SHEET_BASE_URL}/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&headers=1&sheet=${encodeURIComponent(sheetName)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Could not load sheet "${sheetName}": ${response.status} ${response.statusText}`,
    );
  }

  const payload = unwrapResponse(await response.text());

  if (payload.status === "error") {
    const reason = (payload.errors ?? [])
      .map((error) => error.detailed_message ?? error.message)
      .join(", ");

    throw new Error(`Could not load sheet "${sheetName}": ${reason}`);
  }

  return toRows(payload.table);
};
