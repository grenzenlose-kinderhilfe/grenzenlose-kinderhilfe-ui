/**
 * Facts about the foundation that are shown in several places (about page,
 * support page, footer). They live here so a change has to be made once.
 */

export const ROLLING_KIDS_URL = "https://rollingkids.info/";

export const ORGANIZATION = {
  name: "Határtalan Segítség Alapítvány",
  address: "4405 Nyíregyháza, Molnár utca 26",
  email: "hatartalansegitsegalapitvany@gmail.com",
  taxNumber: "19102186115",
};

export const CONTACTS = [
  {
    name: "Kocsik Enikő",
    roleKey: "foundationChairman",
    phone: "36205919590",
  },
  {
    name: "Mester János",
    roleKey: "founder",
    phone: "41784063331",
  },
];

export const BANK_ACCOUNT = {
  bank: "Erste Bank Hungary Zrt, H-1138 Budapest, Népfürdő utca 24-26",
  swift: "GIBA HUHB",
  iban: "HU 1611600006 00000000 83451166",
};

export const TWINT = {
  phone: "+41784063331",
  name: "János Mester",
  email: "mester.jnos@gmail.com",
};

// Kept in the shape the contact cards on the about page render.
export const BANK_DETAILS = [
  ["Bank", BANK_ACCOUNT.bank],
  ["SWIFT-Code", BANK_ACCOUNT.swift],
  ["IBAN/BIC", BANK_ACCOUNT.iban],
  ["TWINT-Option", `${TWINT.phone} ${TWINT.name}, Gründer ${TWINT.email}`],
];

export const FOUNDING_DOCUMENTS = [
  "/docs/hatartalan-segitseg-alapitvany.doc",
  "/docs/hatartalan-segitseg-egyeb.doc",
];
