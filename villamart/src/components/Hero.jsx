import React from "react";
import villamantwo from "../assets/villamantwo.png";
import villamanone from "../assets/villamanone.png";
export default function Hero() {
  return (
    <main className="max-w-7xl flex justify-center items-center w-full mt-4">
      <section className="w-[40%] min-h-[40vh] font-[Poppins]">
        <h1 className="text-[4rem]  text-[#3c641b] font-[Sora] leading-[3.9rem] tracking-tighter  font-bold">
          Let your <span className="text-[#c40414]">groceries </span>
          <br /> come to you
        </h1>
        <p className="text-[1.4rem]  text-gray-500 font-[Sora] font-normal mt-5 ">
          {" "}
          Get fresh groceries online without stepping out to <br /> make
          delicious food with the freshest ingredients.
        </p>
        <button className=" mt-6 w-[20rem] h-[60px] rounded-full border border-[#c50610] text-[1.4rem] text-[#c50610] hover:text-white hover:bg-[#c50610]   transition duration-300 ease-in">
          <a href="#contact-us">send us a message</a>
        </button>{" "}
      </section>
      <section className="w-[40%] min-h-[40vh] ">
        <img
          src={villamantwo}
          alt="Villa mart hero image"
          className="w-[27rem] h-[25rem]"
        />
      </section>
      <section className="w-[20%] min-h-[40vh]  flex justify-center items-center flex-col ">
        <div className="w-full max-h-[200px]">
          <img
            src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Villa mart hero image"
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-[200px] ">
          <img
            src="https://images.pexels.com/photos/4198043/pexels-photo-4198043.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Villa mart hero image"
            className="w-full max-h-full"
          />
        </div>
      </section>
    </main>
  );
}
