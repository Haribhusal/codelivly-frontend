import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const Login = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container  w-full md:w-2/3 p-10 md:p-24 flex justify-center items-center flex-col bg-gradient-to-b from-transparent via-[--secondary] to-transparent rounded-lg">
        <div className="wrapper w-full flex flex-col justify-center items-center">
          <Link href={"/"}>
            <div className="brand flex flex-col justify-center items-center">
              <Image src={"/codelivly.svg"} width={50} height={50} />
              <h3 className="text-2xl mt-5">Codelivly</h3>
            </div>
          </Link>
          <div className="my-5 textgradient  text-3xl">Account Login</div>
          <form action="" className="my-5 w-full md:w-1/2">
            <div className="group mb-5">
              <label htmlFor="name" className="block mb-2 text-sm">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="px-5 py-4 rounded-md w-full bg-transparent border-2 border-gray-500 focus:border-gray-200"
              />
            </div>
            <div className="group mb-5 relative">
              <div className="heading text-sm flex justify-between">
                <label htmlFor="name" className="block mb-2 text-sm">
                  Password
                </label>
                <Link href={"/"} className="">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="px-5 py-4 rounded-md w-full bg-transparent border-2 border-gray-500 focus:border-gray-200"
              />
              <button className="absolute bottom-5 right-5">
                <RiEyeCloseLine className="text-xl" />
              </button>
            </div>
            <button className="btn w-full py-5">Login</button>
          </form>

          <button className="border-[1px] border-dashed px-5 my-10 py-4 border-slate-600 text-slate-400 flex gap-3 items-center justify-center rounded-md">
            <FcGoogle className="text-3xl" />
            Sign in with Google
          </button>
          <Link href="/" className="flex gap-1 items-center">
            Don&apos;t have an account? Let&apos;s create
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
