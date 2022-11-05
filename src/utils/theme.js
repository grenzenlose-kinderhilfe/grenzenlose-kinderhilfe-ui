import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    blue: "#112B5C",
    white: "white",
  },
};

const fonts = {
  body: `Roboto, sans-serif`,
};

const customTheme = extendTheme({ colors, fonts });

export default customTheme;
