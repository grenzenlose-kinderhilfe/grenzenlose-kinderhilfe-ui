import React from "react";

const isSame = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Content that was prerendered at build time and is refreshed in the browser.
 *
 * The prerendered `initialData` is shown straight away (and is what search
 * engines index); the live version is loaded once the island hydrates and
 * replaces it if it changed. Without prerendered data — the source was down
 * during the build — this behaves like a plain client-side fetch.
 */
const useLiveContent = (load, initialData) => {
  const [state, setState] = React.useState({
    data: initialData ?? null,
    isPending: initialData == null,
    isError: false,
  });

  React.useEffect(() => {
    let isActive = true;

    load()
      .then((data) => {
        if (!isActive) return;

        setState((previous) => ({
          data: isSame(previous.data, data) ? previous.data : data,
          isPending: false,
          isError: false,
        }));
      })
      .catch((error) => {
        console.error(error);

        if (!isActive) return;

        // Keep showing the prerendered content when the refresh fails.
        setState((previous) => ({
          ...previous,
          isPending: false,
          isError: previous.data == null,
        }));
      });

    return () => {
      isActive = false;
    };
    // Loads once per page view; `load` is a module-level function.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export default useLiveContent;
