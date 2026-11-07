/**
 * Minimal schema validation for spreadsheet rows.
 *
 * The spreadsheet is edited by non-technical people, so every value coming out
 * of it is treated as untrusted: it is trimmed, stripped of control characters
 * and checked against a field validator. A row is only rendered when all of its
 * fields pass; rows failing validation are dropped and reported on the console.
 */

// Everything except tab, line feed and carriage return.
// eslint-disable-next-line no-control-regex -- stripping them is the point
const CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;

const clean = (value) =>
  String(value ?? "")
    .replace(CONTROL_CHARACTERS, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[^\S\n]+/g, " ")
    .trim();

const pass = (value) => ({ ok: true, value });
const fail = (error) => ({ ok: false, error });

// Editors often type a placeholder instead of leaving a cell empty.
const PLACEHOLDER = /^(-+|\u2013|\u2014|n\/?a|nincs|kein[e]?|none)$/i;

const isBlank = (value) => value === "" || PLACEHOLDER.test(value);

const optional = (value, required) =>
  isBlank(value) ? (required ? fail("is required") : pass("")) : null;

const normalizeKey = (key) => key.replace(/[^a-z0-9]/gi, "").toLowerCase();

/**
 * Free text with a length limit. A trailing separator left over from copying
 * ("Önkormányzat, ") is removed, so it neither shows up in the rendered text
 * nor hides a duplicate.
 */
export const text =
  ({ required = true, maxLength = 500 } = {}) =>
  (raw) => {
    const value = clean(raw)
      .replace(/[,;]+$/, "")
      .trim();
    const empty = optional(value, required);

    if (empty) return empty;

    return value.length > maxLength
      ? fail(`is longer than ${maxLength} characters`)
      : pass(value);
  };

/** Calendar date, normalized to YYYY-MM-DD. */
export const isoDate =
  ({ required = true } = {}) =>
  (raw) => {
    const value = clean(raw);
    const empty = optional(value, required);

    if (empty) return empty;

    const parts = value.replace(/\.$/, "").split(/[-./]/);

    if (parts.length !== 3) return fail("is not a date (expected YYYY-MM-DD)");

    const [year, month, day] = parts.map((part) => Number.parseInt(part, 10));

    if ([year, month, day].some(Number.isNaN)) {
      return fail("is not a date (expected YYYY-MM-DD)");
    }

    const date = new Date(Date.UTC(year, month - 1, day));

    const isRealDate =
      date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day;

    return isRealDate
      ? pass(date.toISOString().slice(0, 10))
      : fail(`is not a valid calendar date: "${value}"`);
  };

/** Value from a fixed list, compared case insensitively. */
export const oneOf =
  (allowed, { required = true } = {}) =>
  (raw) => {
    const value = clean(raw);
    const empty = optional(value, required);

    if (empty) return empty;

    const match = allowed.find(
      (option) => option.toLowerCase() === value.toLowerCase(),
    );

    return match
      ? pass(match)
      : fail(`must be one of ${allowed.join(", ")} but was "${value}"`);
  };

const parseUrl = (value) => {
  try {
    return new URL(value);
  } catch {
    return null;
  }
};

const matchesHost = (url, hosts) =>
  hosts.some(
    (host) => url.hostname === host || url.hostname.endsWith(`.${host}`),
  );

/**
 * Absolute http(s) link. Blocks javascript:, data: and other schemes that would
 * be dangerous once the value ends up in an href or an iframe src.
 */
export const link =
  ({ required = true, hosts = null } = {}) =>
  (raw) => {
    const value = clean(raw);
    const empty = optional(value, required);

    if (empty) return empty;

    const url = parseUrl(value);

    if (!url) return fail(`is not a valid URL: "${value}"`);

    if (!["http:", "https:"].includes(url.protocol)) {
      return fail(`must be an http(s) link but was "${url.protocol}"`);
    }

    if (hosts && !matchesHost(url, hosts)) {
      return fail(`points to an unsupported site: "${url.hostname}"`);
    }

    return pass(url.toString());
  };

const YOUTUBE_ID = /^[\w-]{6,20}$/;
const VIDEA_ID = /^[A-Za-z0-9]{8,32}$/;

const youtubeEmbedUrl = (url) => {
  const [, first, second] = url.pathname.split("/");

  const id =
    url.hostname.replace(/^www\./, "") === "youtu.be"
      ? first
      : first === "watch"
        ? url.searchParams.get("v")
        : ["embed", "shorts", "live", "v"].includes(first)
          ? second
          : null;

  return id && YOUTUBE_ID.test(id)
    ? `https://www.youtube.com/embed/${id}?controls=0&rel=0`
    : null;
};

const videaEmbedUrl = (url) => {
  const id =
    url.pathname === "/player"
      ? url.searchParams.get("v")
      : // Watch links look like /videok/<source>/<slug>-<id>
        (url.pathname.split("/").pop() ?? "").split("-").pop();

  return id && VIDEA_ID.test(id) ? `https://videa.hu/player?v=${id}` : null;
};

/**
 * Player URL for the embed iframe. Only known video hosts are accepted and the
 * URL is always rebuilt from the extracted video id, so an editor can paste a
 * regular "watch" link and nothing unexpected ever reaches the iframe src.
 */
export const videoEmbed =
  ({ required = true, hosts } = {}) =>
  (raw) => {
    const asLink = link({ required, hosts })(raw);

    if (!asLink.ok || asLink.value === "") return asLink;

    const url = new URL(asLink.value);

    const embedUrl = matchesHost(url, ["videa.hu"])
      ? videaEmbedUrl(url)
      : youtubeEmbedUrl(url);

    return embedUrl
      ? pass(embedUrl)
      : fail(`is not a recognizable video link: "${asLink.value}"`);
  };

const parseRow = (schema, row) => {
  const value = {};
  const errors = [];

  Object.entries(schema).forEach(([field, validate]) => {
    const result = validate(row[normalizeKey(field)]);

    if (result.ok) {
      value[field] = result.value;
    } else {
      errors.push(`${field} ${result.error}`);
    }
  });

  return errors.length ? { ok: false, errors } : { ok: true, value };
};

/**
 * Validates every row and returns only the valid ones. Rejected rows are logged
 * with their spreadsheet row number so the editors can fix them.
 */
export const parseRows = (schema, rows, sheetName) => {
  const items = [];
  const rejected = [];

  rows.forEach((row, index) => {
    const result = parseRow(schema, row);

    if (result.ok) {
      items.push(result.value);
    } else {
      // +2: the header takes the first row and spreadsheets are 1-based.
      rejected.push(`  row ${index + 2}: ${result.errors.join("; ")}`);
    }
  });

  if (rejected.length) {
    console.warn(
      `Skipped ${rejected.length} invalid row(s) in sheet "${sheetName}":\n${rejected.join("\n")}`,
    );
  }

  return items;
};
