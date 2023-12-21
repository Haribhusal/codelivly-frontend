import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const Features = () => {
  return (
    <section className="block my-10 py-10 px-3 md:px-0 relative overflow-hidden">
      <Image
        src={"./bg.svg"}
        className="absolute opacity-50 inset-0  h-full z-0 w-screen"
        height={100}
        width={1000}
        alt="image details"
      />
      <div className=" wrapper relative z-10 flex flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto">
        <div className="text">
          <h3 className="subtitle py-5">
            Land your first job <br /> with our learning paths
          </h3>
          <div className="features flex flex-col gap-5 my-10">
            <div className="items ">
              <div className="item flex items-center gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md">
                  <BsCheck2Square className="text-white text-2xl" />
                </div>
                <div className="text">
                  Learn, adopt and secure your cybersecurity career
                </div>
              </div>
            </div>
            <div className="items ">
              <div className="item flex items-center gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md">
                  <BsCheck2Square className="text-white text-2xl" />
                </div>
                <div className="text">Defend virtually, learn virtually</div>
              </div>
            </div>
            <div className="items ">
              <div className="item flex items-center gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md">
                  <BsCheck2Square className="text-white text-2xl" />
                </div>
                <div className="text">Efficient learning, zero cost</div>
              </div>
            </div>
          </div>

          <div className="buttons flex space-x-5">
            <button className="btn flex gap-3 items-center">
              Start developing your career
              <BsArrowRight className="text-white" />
            </button>
            <div className=" cursor-pointer inline-block bg-gradient-to-r from-[#6666FF] to-[#C701F9] p-[1px] rounded-md">
              <div className="flex px-5 py-3 h-full w-full items-center justify-center rounded-md bg-[#080A1A] back">
                <h1 className="text-transparent  bg-clip-text flex items-center gap-3 bg-gradient-to-r from-[#6666FF] to-[#C701F9]">
                  <BsFillQuestionSquareFill className="text-white" />
                  how it works?
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="image p-5 md:p-0 my-10 md:my-0">
          <Image
            src={"/career.svg"}
            height={700}
            width={700}
            alt="Career with codelivly"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
