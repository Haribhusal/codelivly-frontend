import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 z-50 bg-blue-900/5  backdrop-blur-lg p-5 sm:px-0 sm:py-10">
      <div className="wrapper wrapper items-start justify-between max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
        <div className="brand">
          <Image
            src={"/codelivly.svg"}
            width={50}
            height={50}
            alt="logo of codelivly"
          />
          <h2 className="text-2xl my-3">Codelivly</h2>
        </div>
        <div className="resources">
          <strong className="uppercase text-slate-500">Resources</strong>
          <nav className="flex flex-col gap-3 my-5">
            <Link href={"/"}>Paths</Link>
            <Link href={"/"}>Modules</Link>
            <Link href={"/"}>Rooms</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>News &amp; Events</Link>
          </nav>
        </div>
        <div className="company">
          <strong className="uppercase text-slate-500">Company</strong>

          <nav className="flex flex-col gap-3 my-5">
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Why Codelivly</Link>
            <Link href={"/"}>How we work</Link>
            <Link href={"/"}>Customer Support</Link>
            <Link href={"/"}>Contact Us</Link>
          </nav>
        </div>
        <div className="legal">
          <strong className="uppercase text-slate-500">Legal</strong>

          <nav className="flex flex-col gap-3 my-5">
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </nav>
        </div>
      </div>
      <div className="wrapper border-t-[1px] pt-5 border-slate-700 border-dashed mt-5 flex gap-5 flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto">
        <div className="logo">&copy; Codelivly, All rights reserved</div>

        <div className="buttons flex gap-5 text-2xl ">
          <Link href={"/"}>
            <FaFacebook />
          </Link>
          <Link href={"/"}>
            <FaTwitter />
          </Link>
          <Link href={"/"}>
            <FaInstagram />
          </Link>
          <Link href={"/"}>
            <FaLinkedin />
          </Link>
          <Link href={"/"}>
            <FaDiscord />
          </Link>
          <Link href={"/"}>
            <FaTelegram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
