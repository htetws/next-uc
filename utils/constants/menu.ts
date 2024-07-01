import {
  FaComputer,
  FaGamepad,
  FaMobile,
  FaPlaystation,
  FaWebAwesome,
  FaXbox,
} from "react-icons/fa6";
import {
  MdCardMembership,
  MdGames,
  MdMobileFriendly,
  MdMoney,
} from "react-icons/md";

export const MenuList = [
  {
    label: "game",
    icon: MdGames,
    data: [
      {
        title: "PC",
        href: "/docs/primitives/alert-dialog",
        icon: FaComputer,
      },
      {
        title: "Webgame",
        href: "/docs/primitives/hover-card",
        icon: FaWebAwesome,
      },
      {
        title: "Mobile",
        href: "/docs/primitives/progress",
        icon: FaMobile,
      },
      {
        title: "Playstation",
        href: "/docs/primitives/scroll-area",
        icon: FaPlaystation,
      },
      {
        title: "Xbox",
        href: "/docs/primitives/tabs",
        icon: FaXbox,
      },
      {
        title: "Nintendo Switch",
        href: "/docs/primitives/tooltip",
        icon: FaGamepad,
      },
    ],
  },

  {
    label: "card",
    icon: MdCardMembership,
    data: [
      {
        title: "PC",
        href: "/docs/primitives/alert-dialog",
        icon: FaComputer,
      },
      {
        title: "Webgame",
        href: "/docs/primitives/hover-card",
        icon: FaWebAwesome,
      },
      {
        title: "Mobile",
        href: "/docs/primitives/progress",
        icon: FaMobile,
      },
    ],
  },

  {
    label: "direct-topup",
    icon: MdMoney,
    data: [
      {
        title: "Playstation",
        href: "/docs/primitives/scroll-area",
        icon: FaPlaystation,
      },
      {
        title: "Xbox",
        href: "/docs/primitives/tabs",
        icon: FaXbox,
      },
      {
        title: "Nintendo Switch",
        href: "/docs/primitives/tooltip",
        icon: FaGamepad,
      },
    ],
  },

  {
    label: "mobile recharge",
    icon: MdMobileFriendly,
    data: [
      {
        title: "PC",
        href: "/docs/primitives/alert-dialog",
        icon: FaComputer,
      },
      {
        title: "Webgame",
        href: "/docs/primitives/hover-card",
        icon: FaWebAwesome,
      },
      {
        title: "Mobile",
        href: "/docs/primitives/progress",
        icon: FaMobile,
      },
      {
        title: "Playstation",
        href: "/docs/primitives/scroll-area",
        icon: FaPlaystation,
      },
    ],
  },
];
