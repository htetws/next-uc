import { IconType } from "react-icons";

export interface MenuType {
  label: string;
  icon?: IconType;
  data: { title: string; href: string; icon: IconType }[];
}
