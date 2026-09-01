import {
  FaBoxOpen,
  FaHandsHelping,
  FaRoad,
  FaTrafficLight,
  FaTruck,
} from "react-icons/fa";

import { ORGANIZATION, ROLLING_KIDS_URL } from "./organization";

/**
 * The programmes the foundation is currently collecting for. The wording of
 * each card ("what is needed", "who it helps", "how to join") lives in the
 * translation files under pages.home.campaigns.<id>.
 */

export const CAMPAIGNS = [
  {
    id: "shoebox",
    icon: FaBoxOpen,
    url: "/pages/shoebox",
  },
  {
    id: "rollingKids",
    icon: FaTrafficLight,
    url: ROLLING_KIDS_URL,
    isExternal: true,
  },
  {
    id: "trafficPark",
    icon: FaRoad,
    url: `mailto:${ORGANIZATION.email}`,
    isExternal: true,
  },
  {
    id: "ukraine",
    icon: FaTruck,
    url: "/support",
  },
  {
    id: "volunteer",
    icon: FaHandsHelping,
    url: `mailto:${ORGANIZATION.email}`,
    isExternal: true,
  },
];
