import React from "react";

import { GoVideo } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";
import { useTranslation } from "react-i18next";

import {
  VStack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";

import withTracker from "../../utils/tracking";
import VideoGrid from "./VideoGrid/VideoGrid";
import ArticleGrid from "./ArticleGrid/ArticleGrid";

const Media = () => {
  const { t } = useTranslation();

  const localization = {
    videos: t("pages.media.videos", "Videos"),
    articles: t("pages.media.articles", "Articles"),
  };

  return (
    <Tabs isFitted>
      <TabList>
        <Tab>
          <VStack>
            <GoVideo size={40} />
            <div>{localization.videos}</div>
          </VStack>
        </Tab>
        <Tab>
          <VStack>
            <ImNewspaper size={40} />
            <div>{localization.articles}</div>
          </VStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <VideoGrid />
        </TabPanel>
        <TabPanel>
          <ArticleGrid />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default withTracker(Media);
