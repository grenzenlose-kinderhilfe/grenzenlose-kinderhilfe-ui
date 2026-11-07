import React from "react";

/**
 * Renders the loading, error and empty states of content coming from the
 * content spreadsheet.
 */
const DataBoundary = ({ isLoading, isError, isEmpty, strings, children }) => {
  if (isLoading) {
    return (
      <div className="status" role="status">
        <div className="spinner" />
      </div>
    );
  }

  if (isError || isEmpty) {
    return (
      <div className="status">
        <p>{isError ? strings.error : strings.empty}</p>
      </div>
    );
  }

  return children;
};

export default DataBoundary;
