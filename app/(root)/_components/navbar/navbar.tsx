"use client";

import TopNav from "./top-nav";
import BottomNav from "./bottom-nav";
import { MenuList } from "@/utils/constants/menu";

const Navbar = () => {
  const data = MenuList;
  return (
    <nav className="flex flex-col shadow-lg">
      <TopNav data={data} />
      <BottomNav data={data} />
    </nav>
  );
};

export default Navbar;
