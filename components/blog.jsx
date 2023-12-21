import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="block my-10 py-10 px-5 md:px-0">
      <div className=" wrapper flex items-center  justify-center max-w-screen-2xl mx-auto">
        <div className="text text-center">
          <h3 className="subtitle py-5">From the blog</h3>

          <div className="items my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-md bg-[--secondary]   flex items-center flex-col">
              <Image
                src="http://picsum.photos/id/14/500/300"
                width={500}
                height={200}
                alt="image alt"
                className="w-full rounded-md h-72 object-cover"
              />
              <div className="excerpt text-left p-10 relative">
                <h3 className="mb-3  text-xl ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, ea?
                </h3>
                <p className="my-5 text-slate-400 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias nam alias voluptatum deleniti sunt, animi harum
                  accusantium, provident blanditiis enim, autem eos perferendis
                  qui odio voluptate. Dolore vero quibusdam similique.
                </p>
                <div className="footer flex items-center justify-between">
                  <button className="btn flex gap-3 items-center">
                    Read More
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-[--secondary]   flex items-center flex-col">
              <Image
                src="http://picsum.photos/id/14/500/300"
                width={500}
                alt="image alt"
                height={200}
                className="w-full rounded-md h-72 object-cover"
              />
              <div className="excerpt text-left p-10 relative">
                <h3 className="mb-3  text-xl ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, ea?
                </h3>
                <p className="my-5 text-slate-400 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias nam alias voluptatum deleniti sunt, animi harum
                  accusantium, provident blanditiis enim, autem eos perferendis
                  qui odio voluptate. Dolore vero quibusdam similique.
                </p>
                <div className="footer flex items-center justify-between">
                  <button className="btn flex gap-3 items-center">
                    Read More
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-[--secondary]   flex items-center flex-col">
              <Image
                src="http://picsum.photos/id/14/500/300"
                width={500}
                height={200}
                alt="image alt"
                className="w-full rounded-md h-72 object-cover"
              />
              <div className="excerpt text-left p-10 relative">
                <h3 className="mb-3  text-xl ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, ea?
                </h3>
                <p className="my-5 text-slate-400 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias nam alias voluptatum deleniti sunt, animi harum
                  accusantium, provident blanditiis enim, autem eos perferendis
                  qui odio voluptate. Dolore vero quibusdam similique.
                </p>
                <div className="footer flex items-center justify-between">
                  <button className="btn flex gap-3 items-center">
                    Read More
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="buttons flex justify-center space-x-5">
            <button className="btn flex gap-3 items-center">
              Find more blogposts
              <BsArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
