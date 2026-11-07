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
  swift: "GIBAHUHB",
  iban: "HU16 1160 0006 0000 0000 8345 1166",
};

export const TWINT = {
  phone: "+41784063331",
  name: "János Mester",
  email: "mester.jnos@gmail.com",
};

// `labelKey` is under pages.aboutUs in the translation files.
export const FOUNDING_DOCUMENTS = [
  {
    url: "/docs/hatartalan-segitseg-alapitvany.doc",
    labelKey: "foundingDocument",
  },
  { url: "/docs/hatartalan-segitseg-egyeb.doc", labelKey: "otherDocument" },
];
