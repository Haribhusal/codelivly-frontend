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
    <footer className="py-10 z-50 bg-blue-900/5  backdrop-blur-lg">
      <div className="wrapper flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="logo">&copy; Codelivly, All rights reserved</div>
        <nav className="space-x-5">
          <Link href={"/home"}>Terms and Conditions</Link>
          <Link href={"/home"}>Privacy Policy</Link>
          <Link href={"/home"}>FAQ&aposs</Link>
        </nav>
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
