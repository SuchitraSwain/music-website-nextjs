"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hadleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    //  event listener
    window.addEventListener("scroll", hadleScroll);

    // clear event

    return () => {
      window.removeEventListener("scroll", hadleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* logo */}
        <Link
          href={"/"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image src={"/assets/header/logo.svg"} fill alt="logo" />
        </Link>
        <Navbar containerStyles="hidden xl:flex items-center gap-x-8" />

        <NavbarMobile />
        <div className="absolute right-7 top-9 z-10">
          <MenuBtn />
        </div>

        <Socials
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
