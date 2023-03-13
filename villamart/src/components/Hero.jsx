import React from "react";
import milik from "../assets/milik.jpeg";
import veg from "../assets/veg.jpeg";
import tubers from "../assets/tubers.jpeg";
import rice from "../assets/rice.jpeg";
import spices from "../assets/spices.jpeg";
import manoman from "../assets/manoman.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <main className="w-7xl max-w-7xl mx-auto flex justify-center items-center w-full mt-4">
        <section className="w-[60%] h-auto font-[Poppins]">
          <h1 className="text-[4.5rem]  text-[#3c641b] font-[Sora] leading-[3.9rem] tracking-[-0.07rem]  font-bold">
            Let your <span className="text-[#c40414]">groceries </span>
            come to you
          </h1>
          <p className="text-[1.4rem]  text-gray-500 font-[Sora] font-normal mt-4 ">
            {" "}
            Get fresh groceries online without stepping out, <br /> make
            delicious foods with the freshest ingredients.
          </p>
          <button className=" mt-6 w-[15rem] h-[60px] rounded-[10px] border border-[#c50610] text-[1.4rem] text-[#c50610] hover:text-white hover:bg-[#c50610]   transition duration-300 ease-in">
            <a href="#contact-us">send us a message</a>
          </button>{" "}
          <div className=" mt-4 w-full text-[1.4rem]  text-gray-500 font-[Sora] font-normal ">
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
        <section className="w-[40%] h-auto">
          <img
            src={manoman}
            alt="Villa mart hero image"
            className="w-full h-full"
          />
        </section>
      </main>

      <main className="w-7xl mx-auto flex justify-between items-center mt-4">
        <div className="w-[230px] h-[130px] mx-[2rem] rounded-[15px] px-4">
          <img
            src={milik}
            alt="Villa mart hero image"
            className="w-[30%] h-[50%] mx-auto"
          />
          <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
            Diary Products
          </h5>
          <p className="text-[0.88rem] leading-[1rem] text-gray-400 font-normal">
            {" "}
            this is the kind of one that will msrtee you i
          </p>
        </div>
        <div className="w-[230px] h-[130px] mx-[2rem] rounded-[15px] px-4">
          <img
            src={veg}
            alt="Villa mart hero image"
            className="w-[30%] h-[50%] mx-auto"
          />
          <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
            Vegetables and Friuts
          </h5>
          <p className="text-[0.88rem] leading-[1rem] text-gray-400 font-normal">
            {" "}
            this is the kind of one that will msrtee you in
          </p>
        </div>
        <div className="w-[230px] h-[130px] mx-[2rem] rounded-[15px] px-4">
          <img
            src={tubers}
            alt="Villa mart hero image"
            className="w-[30%] h-[50%] mx-auto"
          />
          <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">Tubers</h5>
          <p className="text-[0.88rem] leading-[1rem] text-gray-400 font-normal">
            {" "}
            this is the kind of one that will msrtee you in tjhi
          </p>
        </div>
        <div className="w-[230px] h-[130px] mx-[2rem] rounded-[15px] px-4">
          <img
            src={spices}
            alt="Villa mart hero image"
            className="w-[30%] h-[50%] mx-auto"
          />
          <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
            Spices and Seasoning
          </h5>
          <p className="text-[0.88rem] leading-[1rem] text-gray-400 font-normal">
            {" "}
            this is the kind of one that will msrtee you in jh
          </p>
        </div>
        <div className="w-[230px] h-[140px] mx-[2rem] rounded-[15px] px-4">
          <img
            src={rice}
            alt="Villa mart hero image"
            className="w-[30%] h-[50%] mx-auto"
          />
          <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
            Grains and flour
          </h5>
          <p className="text-[0.88rem] leading-[1rem] text-gray-400 font-normal">
            {" "}
            this is the kind of one that will msrtee you in tj
          </p>
        </div>
      </main>
    </>
  );
}
