"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuType } from "@/utils/types";

const NavItem = ({ label, data }: MenuType) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase text-[.8rem] tracking-wide font-bold ">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 w-[400px] px-8 py-6 gap-5 backdrop-blur-sm">
              {data.map(({ title, href, icon: Icon }, idx) => (
                <div key={idx} className="flex items-center">
                  <Icon className="w-5 h-5 mr-4" />
                  <a
                    className="text-xs font-semibold tracking-wide"
                    href={href}
                  >
                    {title}
                  </a>
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItem;
