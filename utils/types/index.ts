import { IconType } from "react-icons";

export interface MenuType {
  label: string;
  icon?: IconType;
  data: { title: string; href: string; icon: IconType }[];
}

export interface GameCardProps {
  games: {
    label: string;
    data: { id: number; image: string; title: string; region: string }[];
  }[];
}
