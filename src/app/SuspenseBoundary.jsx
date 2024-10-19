import { Spinner } from "@chakra-ui/react";
import React from "react";

const SuspenseBoundary = ({ children }) => (
  <React.Suspense
    fallback={
      <Spinner
        position="relative"
        left="50%"
        top="50%"
        color="primary.blue"
        size="xl"
      />
    }
  >
    {children}
  </React.Suspense>
);

export default SuspenseBoundary;
