import React from "react";

export default function AboutUs() {
  return (
    <main className="max-w-7xl mt-[3.5rem] mx-auto">
      <h1 className="text-[3rem] mb-[2.5rem] text-bold font-[Sora] text-center text-[#3c641b] ">
        {" "}
        About Us
      </h1>
      <section className="w-full flex justify-between items-center h-[70vh] ">
        <div className="w-[49%] h-full bg-red-500  shadow">
          <img
            src="  https://images.pexels.com/photos/1093837/pexels-photo-1093837.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="about card "
            className="w-full h-full"
          />{" "}
        </div>
        <div className="w-[49%] h-full flex flex-col justify-between items-center  shadow"></div>
      </section>
    </main>
  );
}
