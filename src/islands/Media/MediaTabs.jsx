import React from "react";
import { FaHome } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";

import { getArticles, getLocations, getVideos } from "../../lib/content";
import useLiveContent from "../useLiveContent";
import ArticleGrid from "./ArticleGrid";
import InstitutionList from "./InstitutionList";
import VideoList from "./VideoList";
import "./Media.css";

const TABS = [
  { id: "videos", icon: GoVideo },
  { id: "articles", icon: ImNewspaper },
  { id: "institutions", icon: FaHome },
];

const isTab = (id) => TABS.some((tab) => tab.id === id);

/**
 * Videos, press articles and the supported institutions from the content
 * spreadsheet, one tab each. Every panel is in the HTML; the inactive ones are
 * only hidden. The selected tab is kept in the URL hash (/media#articles), so
 * a tab can be linked to directly.
 */
const MediaTabs = ({
  locale,
  strings,
  countries,
  initialVideos,
  initialArticles,
  initialLocations,
}) => {
  const [selected, setSelected] = React.useState(TABS[0].id);
  const tabRefs = React.useRef({});

  const videos = useLiveContent(getVideos, initialVideos);
  const articles = useLiveContent(getArticles, initialArticles);
  const institutions = useLiveContent(getLocations, initialLocations);
  const content = { videos, articles, institutions };
  const shared = { strings, locale, countries };

  React.useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);

      if (isTab(id)) setSelected(id);
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);

    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (id) => {
    setSelected(id);
    window.history.replaceState(window.history.state, "", `#${id}`);
  };

  // Arrow keys move between the tabs, as in the WAI-ARIA tabs pattern.
  const onKeyDown = (event) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];

    if (!step) return;

    const index = TABS.findIndex(({ id }) => id === selected);
    const next = TABS[(index + step + TABS.length) % TABS.length].id;

    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="media-tabs">
      <div className="media-tablist" role="tablist" onKeyDown={onKeyDown}>
        {TABS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            ref={(node) => {
              tabRefs.current[id] = node;
            }}
            type="button"
            role="tab"
            id={`media-tab-${id}`}
            aria-controls={`media-panel-${id}`}
            aria-selected={selected === id}
            tabIndex={selected === id ? 0 : -1}
            className="media-tab"
            onClick={() => select(id)}
          >
            <Icon aria-hidden="true" />
            <span>{strings[id]}</span>
            {content[id].data?.length > 0 && (
              <span className="media-tab-count">{content[id].data.length}</span>
            )}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="media-panel-videos"
        aria-labelledby="media-tab-videos"
        className="media-panel"
        hidden={selected !== "videos"}
      >
        <VideoList {...videos} {...shared} />
      </div>
      <div
        role="tabpanel"
        id="media-panel-articles"
        aria-labelledby="media-tab-articles"
        className="media-panel"
        hidden={selected !== "articles"}
      >
        <ArticleGrid {...articles} {...shared} />
      </div>
      <div
        role="tabpanel"
        id="media-panel-institutions"
        aria-labelledby="media-tab-institutions"
        className="media-panel"
        hidden={selected !== "institutions"}
      >
        <InstitutionList {...institutions} {...shared} />
      </div>
    </div>
  );
};

export default MediaTabs;
