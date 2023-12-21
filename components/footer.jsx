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
    <footer className="p-5 md:py-10 md:pb-0 z-50 bg-blue-900/5  backdrop-blur-lg">
      <div className="wrapper wrapper items-start justify-between max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
        <div className="brand flex items-center gap-3">
          <Image
            src={"/codelivly.svg"}
            width={50}
            height={50}
            alt="logo of codelivly"
          />
          <div className="">
            <h1 className="text-xl md:text-3xl">Codelivly</h1>
            <p className="text-sm text-slate-500">
              Guarding the Digital Frontier
            </p>
          </div>
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
      <div className="wrapper border-t-[1px] py-5 border-slate-800 border-dashed mt-5 flex gap-5 flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto">
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
