import { NavContext } from "@/context/NavbarContext";
import React, { useContext } from "react";

const MenuBtn = () => {
  const { setIsOpen } = useContext(NavContext);
  return (
    <div
      className="group flex flex-col gap-y-2 cursor-pointer xl:hidden items-end transition-all"
      onClick={() => setIsOpen(true)}
    >
      <div className="w-7 h-[2px] bg-white"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white"></div>
      <div className="w-7 h-[2px] bg-white"></div>
    </div>
  );
};

export default MenuBtn;
