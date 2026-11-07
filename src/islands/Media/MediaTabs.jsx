import React from "react";
import { GoVideo } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";

import { getArticles, getVideos } from "../../lib/content";
import useLiveContent from "../useLiveContent";
import ArticleGrid from "./ArticleGrid";
import VideoList from "./VideoList";
import "./Media.css";

const TABS = [
  { id: "videos", icon: GoVideo },
  { id: "articles", icon: ImNewspaper },
];

/**
 * Videos and press articles from the content spreadsheet, one tab each. Both
 * panels are in the HTML; the inactive one is only hidden.
 */
const MediaTabs = ({ strings, initialVideos, initialArticles }) => {
  const [selected, setSelected] = React.useState(TABS[0].id);
  const tabRefs = React.useRef({});

  const videos = useLiveContent(getVideos, initialVideos);
  const articles = useLiveContent(getArticles, initialArticles);

  // Arrow keys move between the tabs, as in the WAI-ARIA tabs pattern.
  const onKeyDown = (event) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];

    if (!step) return;

    const index = TABS.findIndex(({ id }) => id === selected);
    const next = TABS[(index + step + TABS.length) % TABS.length].id;

    setSelected(next);
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
            onClick={() => setSelected(id)}
          >
            <Icon size={40} aria-hidden="true" />
            <span>{strings[id]}</span>
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
        <VideoList {...videos} strings={strings} />
      </div>
      <div
        role="tabpanel"
        id="media-panel-articles"
        aria-labelledby="media-tab-articles"
        className="media-panel"
        hidden={selected !== "articles"}
      >
        <ArticleGrid {...articles} strings={strings} />
      </div>
    </div>
  );
};

export default MediaTabs;
