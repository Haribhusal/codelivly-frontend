import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";

const CTA = () => {
  return (
    <section className="block my-10 py-10 px-5 md:px-0 relative overflow-hidden">
      <Image
        src={"./bg.svg"}
        className="absolute opacity-50 inset-0 w-full h-full z-0"
        height={100}
        alt="image details"
        width={1000}
      />
      <div className="absolute h-1/2 md:w-3/4 w-full left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-b from-[--secondary] to-transparent top-0 "></div>
      <div className=" wrapper px-5 md:px-0 text-center z-20 flex items-center justify-center max-w-screen-2xl mx-auto relative">
        <div className="text">
          <h3 className="pt-5 text-3xl md:text-5xl">
            Are you ready to uplift your cybersecurity career?
          </h3>
          <div className="text w-1/2 mx-auto my-10 text-slate-400">
            Learners from all around the world are learning cybersecurity and
            getting their career a step ahead. Subscribe and get regular updates
            from codelivly.
          </div>
          <div className="formwrapper">
            <form
              action=""
              className="flex flex-col md:flex-row gap-3 items-stretch justify-center"
            >
              <input
                type="text"
                className="px-5 py-5 rounded-md text-slate-500 text-centre md:text-left min-w-full md:min-w-[400px] "
                placeholder="Enter your email"
              />
              <button className="btn flex gap-3 items-center justify-center text-centre md:text-left">
                Subscribe our newsletter
                <BsArrowRight className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
