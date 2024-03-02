import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import mediaItems from "./mediaItems.json";

import withTracker from "../../utils/tracking";
import MediaItem from "./MediaItem/MediaItem";

const Media = () => {
  return (
    <Grid color="black" m="25px" gap={8}>
      {mediaItems.map((item, idx) => (
        <GridItem key={idx}>
          <MediaItem {...item} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default withTracker(Media);
