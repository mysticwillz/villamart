import React from "react";

export default function ContactUs() {
  return (
    <main className="max-w-7xl my-[3.5rem] mx-auto">
      <h1 className="text-[3rem] mb-[2.5rem] text-bold font-[Sora] text-center text-gray-500">
        {" "}
        Contact Us
      </h1>
      <section className="w-full flex justify-between items-center h-[30vh] ">
        <div className="w-[30%] bg-red-500 h-full rounded-[12px]  shadow"></div>
        <div className="w-[30%] h-full bg-red-500  rounded-[12px] shadow"></div>
        <div className="w-[30%] h-full bg-red-500  rounded-[12px]  shadow"></div>
      </section>
    </main>
  );
}
