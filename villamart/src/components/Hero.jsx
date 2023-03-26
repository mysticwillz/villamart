import React from "react";

import manoman from "../assets/manoman.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="w-full back-hero h-full pt-4">
      <main className="w-7xl max-w-7xl mx-auto flex justify-center items-center w-full overflow-x-hidden px-2 md:px-0  mt-[7rem]  z-10 backdrop-blur-sm ">
        <section className="w-full md:w-[60%] h-auto font-[Poppins]">
          <h1 className="text-[2.7rem] md:text-[4rem]  text-[#3c641b] font-[Sora] leading-[3.4rem] md:leading-[3.9rem] tracking-[-0.07rem]  font-bold">
            Fresh
            <span className="text-[#c40414]"> groceries </span>
            delivered to your <span className="text-[#c40414]"> door </span>
          </h1>
          <p className="text-[1.1rem] md:text-[1.4rem]  text-gray-500 font-[Sora] font-normal mt-4 ">
            {" "}
            Get fresh groceries online without stepping out, <br /> make
            delicious foods with the freshest ingredients.
          </p>
          <button className=" mt-6 w-[15rem] h-[60px] rounded-[10px] border border-[#c50610] text-[1.4rem] text-[#c50610] hover:text-white hover:bg-[#c50610]   transition duration-300 ease-in">
            <a href="#contact-us">send us a message</a>
          </button>{" "}
          <div className=" mt-4 w-full text-[0.8rem] md:text-[1.4rem]  text-gray-500 font-[Sora] font-normal ">
            <div className=" flex  items-center ">
              <div className=" flex justify-center items-center mr-4 ">
                <BsFillCheckCircleFill className="text-[1.4rem]  text-[#FFD700] nt-normal pr-1" />
                <p>Fresh Farm Foods</p>
              </div>
              <div className=" flex justify-center items-center ">
                <BsFillCheckCircleFill className="text-[1.4rem]  text-[#FFD700] nt-normal pr-1 " />
                <p>100% Guarantee</p>
              </div>
            </div>
            <div className=" flex  items-center ">
              <div className=" flex justify-center items-center mr-4">
                <BsFillCheckCircleFill className="text-[1.4rem]  text-[#FFD700] nt-normal pr-1" />
                <p>Cash on Delivery</p>
              </div>
              <div className=" flex justify-center items-center ">
                <BsFillCheckCircleFill className="text-[1.4rem]  text-[#FFD700] nt-normal pr-1" />
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden md:block w-[40%] h-auto">
          <img
            src={manoman}
            alt="Villa mart hero image"
            className="w-full h-full"
          />
        </section>
      </main>
    </section>
  );
}
