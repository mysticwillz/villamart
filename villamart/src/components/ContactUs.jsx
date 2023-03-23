import React from "react";

export default function ContactUs() {
  return (
    <main className="max-w-7xl mt-[2.5rem] md:mt-[3.5rem] mx-auto px-2 md:px-0">
      <h1 className="text-[2.3rem] md:text-[3rem] mb-[1.5rem] md:mb-[2.5rem] text-bold font-[Sora] text-center  text-gray-500">
        {" "}
        Contact Us
      </h1>
      <section className="w-full flex justify-between items-center h-[15vh] md:h-[30vh] flex-wrap ">
        <div className=" w-full md:w-[30%] bg-red-500 h-full rounded-[0.45rem]  shadow"></div>
        <div className=" w-full md:w-[30%] bg-red-500 h-full rounded-[0.45rem] my-2 md:my-0 shadow"></div>
        <div className=" w-full md:w-[30%] bg-red-500 h-full rounded-[0.45rem]  shadow"></div>
      </section>
    </main>
  );
}
