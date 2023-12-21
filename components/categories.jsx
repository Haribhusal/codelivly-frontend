import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiCyberdefenders } from "react-icons/si";
import { SiHackaday } from "react-icons/si";

const Categories = () => {
  return (
    <section className="block py-10 md:p-0">
      <div className=" wrapper flex items-center  justify-center max-w-screen-2xl mx-auto">
        <div className="text text-center">
          <h3 className="subtitle py-3 md:py-5">Choose what to learn</h3>

          <div className="items p-3 md:p-0 my-3 md:my-10 grid grid-cols-2 place-self-center items-center justify-center place-content-center sm:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-5">
            <Link href={"/category/courseid"}>
              <div className=" bg-[--secondary]  p-3 md:p-10 rounded-md flex items-center flex-col">
                <GiArtificialIntelligence className="text-7xl" />
                <h3 className="mt-5 textgradient text-base md:text-xl ">
                  Artificial Intelligence
                </h3>
              </div>
            </Link>
            <Link href={"/category/courseid"}>
              <div className=" bg-[--secondary]  p-3 md:p-10 rounded-md flex items-center flex-col">
                <SiCyberdefenders className="text-7xl" />
                <h3 className="mt-5 textgradient text-base md:text-xl ">
                  Cybersecurity
                </h3>
              </div>
            </Link>
            <Link href={"/category/courseid"}>
              <div className=" bg-[--secondary]  p-3 md:p-10 rounded-md flex items-center flex-col">
                <SiHackaday className="text-7xl" />
                <h3 className="mt-5 textgradient text-base md:text-xl ">
                  Hacking
                </h3>
              </div>
            </Link>
            <Link href={"/category/courseid"}>
              <div className=" bg-[--secondary]  p-3 md:p-10 rounded-md flex items-center flex-col">
                <GiArtificialIntelligence className="text-7xl" />
                <h3 className="mt-5 textgradient text-base md:text-xl ">
                  Artificial Intelligence
                </h3>
              </div>
            </Link>
            <Link href={"/category/courseid"}>
              <div className=" bg-[--secondary]  p-3 md:p-10 rounded-md flex items-center flex-col">
                <SiCyberdefenders className="text-7xl" />
                <h3 className="mt-5 textgradient text-base md:text-xl ">
                  Cybersecurity
                </h3>
              </div>
            </Link>
          </div>

          <div className="buttons flex justify-center space-x-5">
            <button className="btn flex gap-3 items-center">
              Explore all
              <BsArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
