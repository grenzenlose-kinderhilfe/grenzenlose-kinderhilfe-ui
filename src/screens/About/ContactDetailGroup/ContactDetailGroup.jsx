import { Flex } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import {
  BANK_DETAILS,
  CONTACTS,
  FOUNDING_DOCUMENTS,
  ORGANIZATION,
} from "../../../data/organization";
import ContactDetail from "./ContentDetail/ContactDetail";

const ContactDetailGroup = () => {
  const { t } = useTranslation();

  const localization = {
    foundingDocument: t("pages.aboutUs.foundingDocument", "Alapitó okirat"),
    founder: t("pages.aboutUs.founder", "Alapító"),
    foundationChairman: t(
      "pages.aboutUs.foundationChairman",
      "Alapítvány kuratórium elnök",
    ),
    taxNumber: t("pages.aboutUs.taxNumber", "Adószám"),
  };

  const documents = [
    {
      name: localization.foundingDocument,
      links: FOUNDING_DOCUMENTS,
    },
  ];

  return (
    <Flex justifyContent="center" flexDirection="column" maxWidth="500px">
      {CONTACTS.map(({ name, roleKey, phone }) => (
        <ContactDetail
          key={name}
          title={name}
          phone={phone}
          subtitle={localization[roleKey]}
        />
      ))}
      <ContactDetail
        title={ORGANIZATION.name}
        address={ORGANIZATION.address}
        email={ORGANIZATION.email}
        taxNumber={`${localization.taxNumber}: ${ORGANIZATION.taxNumber}`}
        documents={documents}
      />
      <ContactDetail details={BANK_DETAILS} />
    </Flex>
  );
};

export default ContactDetailGroup;
