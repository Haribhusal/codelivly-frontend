import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <Image
        src={"./bg.svg"}
        className="absolute opacity-50 inset-0 w-full h-full z-0"
        height={100}
        width={1000}
        alt="image"
      />
      <div className="wrapper z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="text text-center">
          <h3 className="title py-5">
            Your cybersecurity <br />
            journey starts here
          </h3>
          <p className="text my-10 w-1/2 mx-auto text-slate-400">
            Kick off your cybersecurity adventure with us! Dive deep, stay
            curious, and let&apos;s navigate the digital waves together. Ready
            to level up? Start here.
          </p>
          <div className="buttons space-x-5 flex justify-center">
            <button className="btn flex gap-3 items-center">
              Get Started <BsArrowRight />
            </button>
            <div className=" cursor-pointer inline-block bg-gradient-to-r from-[#6666FF] to-[#C701F9] p-[1px] rounded-md">
              <div className="flex px-5 py-3 h-full w-full items-center justify-center rounded-md bg-[#080A1A] back">
                <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#6666FF] to-[#C701F9]">
                  Explore paths
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
