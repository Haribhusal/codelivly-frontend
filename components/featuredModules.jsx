import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const FeaturedModules = () => {
  return (
    <section className="block my-10 py-10">
      <div className=" wrapper flex items-center  justify-center max-w-screen-2xl mx-auto">
        <div className="text text-center">
          <h3 className="subtitle py-5">Featured Modules</h3>
          <nav className="flex space-x-5 justify-center">
            <button className="active">General</button>
            <button className="btn">Offensive</button>
            <button>Defensive</button>
          </nav>

          <div className="items my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-md bg-[--secondary]   flex items-center flex-col">
              <Image
                src="http://picsum.photos/id/14/500/300"
                width={500}
                height={200}
                alt="image"
                className="w-full rounded-md h-72 object-cover"
              />
              <div className="excerpt text-left p-10 relative">
                <button className="absolute bg-[--secondary] shadow-2xl hover:shadow-xl shadow-purple-500 hover:shadow-purple-700 hover:scale-105 transition-all duration-200 h-16 w-16 flex justify-center items-center right-5 -top-8 rounded-full ">
                  <FaHeart className="text-white " />
                </button>

                <h3 className="mb-3  text-2xl ">Artificial Intelligence</h3>
                <p className="my-5 text-slate-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias nam alias voluptatum deleniti sunt, animi harum
                  accusantium, provident blanditiis enim, autem eos perferendis
                  qui odio voluptate. Dolore vero quibusdam similique.
                </p>
                <div className="footer flex items-center justify-between">
                  <button className="btn flex gap-3 items-center">
                    Explore Module
                    <BsArrowRight />
                  </button>
                  <div className=" cursor-pointer inline-block bg-gradient-to-r from-[#6666FF] to-[#C701F9] p-[1px] rounded-md">
                    <div className="flex px-5 py-3 h-full w-full items-center justify-center rounded-md bg-[--secondary] back">
                      <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#6666FF] to-[#C701F9]">
                        32 Rooms
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-[--secondary] group flex items-center flex-col">
              <Image
                src="http://picsum.photos/id/14/500/300"
                width={500}
                height={200}
                alt="image details"
                className="w-full rounded-md h-72 object-cover"
              />
              <div className="excerpt text-left p-10 relative">
                <button className="absolute bg-[--secondary] shadow-2xl hover:shadow-xl shadow-purple-500 hover:shadow-purple-700 hover:scale-105 transition-all duration-200 h-16 w-16 flex justify-center items-center right-5 -top-8 rounded-full ">
                  <FaHeart className="text-white " />
                </button>

                <h3 className="mb-3 text-2xl ">Artificial Intelligence</h3>
                <p className="my-5 text-slate-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias nam alias voluptatum deleniti sunt, animi harum
                  accusantium, provident blanditiis enim, autem eos perferendis
                  qui odio voluptate. Dolore vero quibusdam similique.
                </p>
                <div className="footer flex items-center justify-between">
                  <button className="btn flex gap-3 items-center">
                    Explore Module
                    <BsArrowRight />
                  </button>
                  <div className=" cursor-pointer inline-block bg-gradient-to-r from-[#6666FF] to-[#C701F9] p-[1px] rounded-md">
                    <div className="flex px-5 py-3 h-full w-full items-center justify-center rounded-md bg-[--secondary] back">
                      <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#6666FF] to-[#C701F9]">
                        12 Rooms{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-[--secondary]   flex items-center flex-col">
              <Image
                src="http://picsum.photos/id/14/500/300"
                width={500}
                height={200}
                alt="Image details"
                className="w-full rounded-md h-72 object-cover"
              />
              <div className="excerpt text-left p-10 relative">
                <button className="absolute bg-[--secondary] shadow-2xl hover:shadow-xl shadow-purple-500 hover:shadow-purple-700 hover:scale-105 transition-all duration-200 h-16 w-16 flex justify-center items-center right-5 -top-8 rounded-full ">
                  <FaHeart className="text-white " />
                </button>

                <h3 className="mb-3  text-2xl ">Artificial Intelligence</h3>
                <p className="my-5 text-slate-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias nam alias voluptatum deleniti sunt, animi harum
                  accusantium, provident blanditiis enim, autem eos perferendis
                  qui odio voluptate. Dolore vero quibusdam similique.
                </p>
                <div className="footer flex items-center justify-between">
                  <button className="btn flex gap-3 items-center">
                    Explore Module
                    <BsArrowRight />
                  </button>
                  <div className=" cursor-pointer inline-block bg-gradient-to-r from-[#6666FF] to-[#C701F9] p-[1px] rounded-md">
                    <div className="flex px-5 py-3 h-full w-full items-center justify-center rounded-md bg-[--secondary] back">
                      <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#6666FF] to-[#C701F9]">
                        1 Room
                      </h1>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="buttons flex justify-center space-x-5">
            <button className="btn flex gap-3 items-center">
              Explore all
              <BsArrowRight className="text-white" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModules;
