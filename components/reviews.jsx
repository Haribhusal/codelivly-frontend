import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Reviews = () => {
  return (
    <section className="block my-10 py-10 relative overflow-hidden">
      <Image
        src={"./bg.svg"}
        className="absolute opacity-50 inset-0 w-full h-full z-0"
        height={100}
        width={1000}
        alt="bg"
      />
      <div className="absolute h-1/2 w-3/4 left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-b from-[--secondary] to-transparent top-0 "></div>
      <div className=" wrapper text-center z-20 flex items-center justify-between max-w-screen-2xl mx-auto relative">
        <div className="text">
          <h3 className="subtitle py-5">What our readers are saying</h3>
          <div className="text w-1/2 mx-auto my-5 text-slate-400">
            Learners from all around the world are learning cybersecurity and
            getting their career step ahead. Here's the reviews
          </div>
          <div className="Reviews grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
            <div className="items ">
              <div className="item bg-gradient-to-b from-[--secondary] to-transparent  p-10 rounded-md text-left flex flex-col items-start gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md bg-[--primary]">
                  <ImQuotesLeft className="text-white text-2xl" />
                </div>

                <div className="text text-slate-400 text-sm">
                  I recently completed the "Cybersecurity Fundamentals" course
                  on codelivly.com, and I must say, it exceeded my expectations.
                  The course structure is comprehensive, covering everything
                  from basic principles to advanced techniques. The instructors
                  are industry professionals who provide real-world examples and
                  scenarios, making the learning experience both practical and
                  engaging. The platform's user interface is intuitive, and I
                  appreciated the hands-on labs that allowed me to apply what I
                  learned. Highly recommended for anyone looking to build a
                  solid foundation in cybersecurity!
                </div>
                <div className="user">
                  <h3 className=" textgradient my-0 text-2xl ">Suman Dulal</h3>
                  <div className="location">Kathmandu, Nepal</div>
                </div>
              </div>
            </div>

            <div className="items ">
              <div className="item bg-gradient-to-b from-[--secondary] to-transparent  p-10 rounded-md text-left flex flex-col items-start gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md bg-[--primary]">
                  <ImQuotesLeft className="text-white text-2xl" />
                </div>

                <div className="text text-slate-400 text-sm">
                  I enrolled in the "Ethical Hacking and Penetration Testing"
                  course at codelivly.com to enhance my cybersecurity skills for
                  my job. Overall, the content was informative and up-to-date,
                  covering a range of topics relevant to today's cybersecurity
                  landscape. The course materials were well-organized, and the
                  videos were of high quality. However, I felt that some
                  sections could have been more interactive, perhaps with live
                  Q&A sessions or more hands-on exercises. Nonetheless, I found
                  value in the course, and the certification will undoubtedly
                  boost my career prospects.
                </div>
                <div className="user">
                  <h3 className=" textgradient my-0 text-2xl ">Raj Patel</h3>
                  <div className="location">Maharastra, India</div>
                </div>
              </div>
            </div>
            <div className="items ">
              <div className="item bg-gradient-to-b from-[--secondary] to-transparent  p-10 rounded-md text-left flex flex-col items-start gap-5">
                <div className="icon h-12 w-12 bg-gradient-to-b from-violet-600 to-blue-500 flex justify-center items-center rounded-md bg-[--primary]">
                  <ImQuotesLeft className="text-white text-2xl" />
                </div>

                <div className="text text-slate-400 text-sm">
                  I can't speak highly enough about codelivly.com! I enrolled in
                  their "Advanced Cybersecurity Techniques" course, and it was a
                  game-changer for me. The instructors are top-notch, providing
                  in-depth insights and practical strategies that I immediately
                  implemented in my organization. What sets codelivly.com apart
                  is their commitment to student success; they offer continuous
                  support, networking opportunities, and career guidance. The
                  course content is regularly updated to reflect the latest
                  industry trends, ensuring that students remain at the
                  forefront of cybersecurity knowledge. If you're serious about
                  advancing your cybersecurity career, look no further than
                  codelivly.com!
                </div>
                <div className="user">
                  <h3 className=" textgradient my-0 text-2xl ">
                    Emily Johnson
                  </h3>
                  <div className="location">Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
