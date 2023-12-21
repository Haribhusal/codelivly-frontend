"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 80); // 80 is just a threshold value

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className="sticky top-0 z-50 bg-blue-900/5  backdrop-blur-lg p-5">
      <div className="wrapper flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="logo flex gap-3 items-center">
          <Image src="/codelivly.svg" width={50} height={50} alt="logo" />
          <div className="">
            <h1 className="text-xl md:text-3xl">Codelivly</h1>
            <p className="text-sm text-slate-500">
              Guarding the Digital Frontier
            </p>
          </div>
        </div>
        <nav className="space-x-5 hidden md:flex">
          <Link href={"/home"}>Paths</Link>
          <Link href={"/home"}>Modules</Link>
          <Link href={"/home"}>Pricing</Link>
          <Link href={"/home"}>News</Link>
          <Link href={"/home"}>About</Link>
          <Link href={"/home"}>FAQ&apos;s</Link>
        </nav>
        <div className="buttons flex gap-5 ">
          <button>Login</button>
          <button className="btn flex gap-3 items-center">
            Start Learning <BsArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
