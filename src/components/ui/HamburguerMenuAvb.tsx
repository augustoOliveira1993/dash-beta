"use client";
import { User, MoonIcon, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "./ButtonAvb";
import {
  NavBar,
  NavBarHeader,
  NavBarContent,
  NavBarLink,
  NavBarFooter,
} from "./NavBarAvb";
import { menuItems } from "../SidBarAvb";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import LOGOAVBHORIZONTAL from "@/assets/horizontal-logo.png";
import { useState } from "react";

export const HamburguerMenu = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleTheme = () => {
    return theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const isActiveLink = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className={`fixed top-3 left-3 z-50 border border-border/20 bg-avb-green-600 text-avb-green-100 right-3 size-6 md:hidden`}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <Menu className="size-4" />
      </Button>
      <div
        className={`h-screen bg-avb-green-600 overflow-hidden justify-between flex flex-col fixed top-0 md:hidden ${isOpenMenu ? "left-0" : "-left-96"} shadow-xl border-r`}
      >
        <NavBarHeader
          urlImage={LOGOAVBHORIZONTAL}
          href={"/"}
          headerTitle="SIG AVB"
        />

        <NavBarContent>
          {menuItems.map((item, index) => (
            <NavBarLink
              key={index}
              Icon={item.icon}
              href={item.href}
              className={`${isActiveLink(item.href) && "bg-avb-green-400/60 text-white"}  "justify-center `}
            >
              <span className={`ms-3  "hidden`}>{item.name}</span>
            </NavBarLink>
          ))}
        </NavBarContent>

        <NavBarFooter className={` "justify-center `}>
          <Button
            className="text-avb-green-100 border border-border/20 rounded-full"
            variant="outline"
            size="icon"
          >
            <User className="size-4" />
          </Button>

          <Button
            onClick={toggleTheme}
            className="text-avb-green-100 border border-border/20"
            variant="outline"
            size="icon"
          >
            <MoonIcon className="size-4" />
          </Button>
        </NavBarFooter>
      </div>
    </>
  );
};
