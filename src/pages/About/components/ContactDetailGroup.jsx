import { Flex } from "@chakra-ui/react";
import React from "react";

import ContactDetail from "./ContactDetail";

const ContactDetailGroup = () => {
  const documents = [
    {
      name: "Alapitó okirat",
      links: [
        "https://grenzenlose-kinderhilfe.com/wp-content/uploads/2021/07/Határtalan-segítség-alapítvány.doc",
        "https://grenzenlose-kinderhilfe.com/wp-content/uploads/2021/07/HATÁRTALAN-SEGÍTSÉG-egyéb-1.doc",
      ],
    },
  ];

  return (
    <Flex flexDirection="column" maxWidth="500px">
      <ContactDetail
        title="Kocsik Enikő"
        subtitle="Alapítvány kuratórium elnök"
        phone="+36205919590"
      />
      <ContactDetail
        title="Mester János"
        subtitle="Alapító"
        phone="+41784063331"
      />
      <ContactDetail
        title="Határtalan Segítség Alapítvány"
        address="4405 Nyíregyháza Molnár utca 26"
        email="hatartalansegitsegalapitvany@gmail.com"
        description="Adoszam: 19102186115"
        bank="ERSTE BANK"
        bankAccountNumber="11600006-00000000-83451166"
        documents={documents}
      />
    </Flex>
  );
};

export default ContactDetailGroup;
