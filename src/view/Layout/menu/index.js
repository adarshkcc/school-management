import { faSignOut, faSpider, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcons } from "../../../common/FontAwesomeIcons";

export const MenuItems = [
  {
    key: "/profile",
    icon: FontAwesomeIcons(faUser),
    label: "Profile",
  },
  {
    key: "/userDetailList",
    icon: FontAwesomeIcons(faSpider),

    label: "Student List",
  },
  {
    key: "logout",
    icon: FontAwesomeIcons(faSignOut),

    label: "Logout",
  },
];
