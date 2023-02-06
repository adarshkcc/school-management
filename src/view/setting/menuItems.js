import { FcMindMap } from "react-icons/fc";
import { SiGoogleclassroom } from "react-icons/si";

export const menuItems = [
  {
    key: "customization",
    title: "CUSTOMIZATION",
    items: [
      {
        key: 1,
        content: "Classroom",
        icon: <SiGoogleclassroom />,
        path: "/setting/class",
      },
      {
        key: 2,
        content: "Themes",
        icon: <FcMindMap />,
        path: "/setting/theme",
      },
    ],
  },
];
