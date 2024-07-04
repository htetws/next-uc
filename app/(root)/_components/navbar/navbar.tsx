"use client";

import TopNav from "./top-nav";
import BottomNav from "./bottom-nav";
import { MenuList } from "@/utils/constants/menu";

const Navbar = () => {
  const data = MenuList;
  return (
    <>
      <TopNav data={data} />
      <BottomNav data={data} />
    </>
  );
};

export default Navbar;
