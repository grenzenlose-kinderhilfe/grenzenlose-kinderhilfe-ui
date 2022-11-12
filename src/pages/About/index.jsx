import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import aboutUsImage from "../../assets/img/about-us.jpg";
import AboutContent from "./components/AboutContent";
import ContactDetailGroup from "./components/ContactDetailGroup";

const About = () => (
  <Grid
    color="black"
    templateColumns={{ base: "1fr", xl: "3fr 2fr 2fr" }}
    margin={{ base: 0, lg: "25px", xl: "25px 50px 25px" }}
  >
    <GridItem align="center" m={{ base: "0px 25px 0px" }}>
      <AboutContent />
    </GridItem>
    <GridItem
      m="50px"
      align="center"
      backgroundImage={`url(${aboutUsImage})`}
      bgSize="cover"
      borderRadius={{ base: 0, lg: "10px" }}
    />
    <GridItem align="center">
      <ContactDetailGroup />
    </GridItem>
  </Grid>
);

export default About;
