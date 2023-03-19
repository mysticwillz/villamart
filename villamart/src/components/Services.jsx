import React from "react";

export default function Services() {
  return (
    <main className="max-w-7xl my-[2.5rem] mx-auto">
      <h1 className="text-[3rem] text-bold font-[Sora] text-center text-[#c40414]">
        {" "}
        Our Services
      </h1>
      <section className="w-full flex justify-between items-center h-[70vh] ">
        <div className="w-[49%] h-full">
          <div className="w-full h-[65%] border border-red-500 rounded "></div>
        </div>
        <div className="w-[49%] h-full flex flex-col justify-between items-center">
          <div className=" w-full h-[30%] border border-red-500 rounded"></div>
          <div className=" w-full h-[30%] border border-red-500 rounded"></div>
          <div className=" w-full h-[30%] border border-red-500 rounded"></div>
        </div>
      </section>
    </main>
  );
}
