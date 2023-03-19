import React from "react";
import "../App.css";
export default function Services() {
  return (
    <main className="max-w-7xl mt-[3.5rem] mx-auto">
      <h1 className="text-[3rem] mb-[2.5rem] text-bold font-[Sora] text-center text-[#c40414]">
        {" "}
        Our Services
      </h1>
      <section className="w-full flex justify-between items-center h-[70vh] ">
        <div className="w-[49%] h-full  shadow">
          <div className="w-full h-[65%] rounded-[0.45rem]  "></div>
        </div>
        <div className="w-[49%] h-full flex flex-col justify-between items-center">
          <div className=" w-full h-[30%] rounded-[0.45rem] shadow"></div>
          <div className=" w-full h-[30%] rounded-[0.45rem]  shadow"></div>
          <div className=" w-full h-[30%] rounded-[0.45rem]  shadow"></div>
        </div>
      </section>
    </main>
  );
}
