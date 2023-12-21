import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const WhyCodelivly = () => {
  return (
    <section className="block my-10 py-10 relative overflow-hidden">
      <div className="absolute h-1/2 w-3/4 left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-b from-[--secondary] to-transparent top-0 "></div>
      <div className=" wrapper text-center z-10 flex items-center justify-between max-w-screen-2xl mx-auto relative">
        <div className="text">
          <h3 className="subtitle py-5">Why codelivly</h3>
          <div className="text w-1/2 mx-auto my-5 text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            officiis dignissimos eos enim! Vitae facere odit porro repudiandae
            eos pariatur.
          </div>
          <div className="WhyCodelivly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 md:px-0 my-10">
            <div className="items ">
              <div className="item bg-gradient-to-b from-[--secondary] to-transparent  p-10 rounded-md text-left flex flex-col items-start gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md bg-[--primary]">
                  <BsCheck2Square className="text-white text-2xl" />
                </div>
                <h3 className=" textgradient text-2xl ">
                  Comprehensive Curriculum
                </h3>
                <div className="text text-slate-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus accusantium, dolores nobis sed corporis quidem?
                </div>
              </div>
            </div>

            <div className="items ">
              <div className="item bg-gradient-to-b from-[--secondary] to-transparent  p-10 rounded-md text-left flex flex-col items-start gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md bg-[--primary]">
                  <BsCheck2Square className="text-white text-2xl" />
                </div>
                <h3 className=" textgradient text-2xl ">
                  Community & Networking
                </h3>
                <div className="text text-slate-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus accusantium, dolores nobis sed corporis quidem?
                </div>
              </div>
            </div>
            <div className="items ">
              <div className="item bg-gradient-to-b from-[--secondary] to-transparent  p-10 rounded-md text-left flex flex-col items-start gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md bg-[--primary]">
                  <BsCheck2Square className="text-white text-2xl" />
                </div>
                <h3 className=" textgradient text-2xl ">Free Access</h3>
                <div className="text text-slate-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus accusantium, dolores nobis sed corporis quidem?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCodelivly;
