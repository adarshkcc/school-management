import { GiTeacher } from "react-icons/gi";
import { FcReading } from "react-icons/fc";
import { RiFileListLine } from "react-icons/ri";
import {
  SiLibrarything,
  SiAsciidoctor,
  SiAcademia,
  SiMicrosoftacademic,
} from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";

import { MdSubject, MdMenuBook } from "react-icons/md";

export const sidebarMenuItems = [
  {
    key: "users",
    title: "Users",
    icon: <FaUsers />,

    items: [
      {
        key: 1,
        content: "Teacher",
        icon: <GiTeacher />,

        path: "/",
      },
      {
        key: 2,
        content: "Student",
        icon: <FcReading />,
        path: "/student-list",
      },
      {
        key: 3,
        content: "Librarian",
        icon: <SiLibrarything />,
        path: "/b",
      },
      {
        key: 4,
        content: "Accountant",
        icon: <SiAsciidoctor />,
        path: "/c",
      },
    ],
  },

  {
    key: "ACADEMICS",
    title: "Academic",
    icon: <SiMicrosoftacademic />,

    items: [
      {
        key: 1,
        content: "Attendance",
        icon: <SiAcademia />,

        path: "/d",
      },
      {
        key: 2,
        content: "Subject",
        icon: <MdSubject />,
        path: "/e",
      },
      {
        key: 3,
        content: "Syllabus",
        icon: <MdMenuBook />,
        path: "/f",
      },
      {
        key: 4,
        content: "Progress report",
        icon: <RiFileListLine />,
        path: "/g",
      },
      {
        key: 5,
        content: "Event calender",
        icon: <BsFillCalendarEventFill />,
        path: "/g",
      },
    ],
  },
];
