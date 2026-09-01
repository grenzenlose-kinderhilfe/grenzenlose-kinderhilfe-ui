import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Renders the loading, error and empty states of content coming from the
 * content spreadsheet.
 */
const DataBoundary = ({ isLoading, isError, isEmpty, children }) => {
  const { t } = useTranslation();

  const localization = {
    error: t(
      "ui.data.error",
      "A tartalom betöltése nem sikerült. Kérjük, próbálja újra később.",
    ),
    empty: t("ui.data.empty", "Jelenleg nincs megjeleníthető tartalom."),
  };

  if (isLoading) {
    return (
      <Flex justifyContent="center" p="50px">
        <Spinner color="primary.blue" size="xl" />
      </Flex>
    );
  }

  if (isError || isEmpty) {
    return (
      <Flex justifyContent="center" p="50px">
        <Text color="black">
          {isError ? localization.error : localization.empty}
        </Text>
      </Flex>
    );
  }

  return children;
};

export default DataBoundary;
