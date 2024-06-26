import { NavContext } from "@/context/NavbarContext";
import React, { useContext } from "react";

import { RiCloseLine } from "react-icons/ri";
import Navbar from "./Navbar";

const NavbarMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden bg-primary w-full top-0 fixed z-20 bottom-0 transition-all duration-500`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-5 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <Navbar containerStyles="flex flex-col text-[30px] uppercase font-bold h-full items-center justify-center gap-y-8" />
    </nav>
  );
};

export default NavbarMobile;
