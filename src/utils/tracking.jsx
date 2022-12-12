import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const withTracker = (WrappedComponent) => {
  const HOC = (props) => {
    useEffect(() => ReactGA.send("pageview"));
    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
