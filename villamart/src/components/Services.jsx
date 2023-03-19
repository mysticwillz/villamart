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
          <div className="w-full h-full rounded-[0.45rem]  ">
            <img
              src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="service card"
              className="w-full h-full  rounded-[0.45rem] "
            />
          </div>
        </div>
        <div className="w-[49%] h-full flex flex-col justify-between items-center">
          <div className=" w-full h-[30%] rounded-[0.45rem] bg-red-500  shadow"></div>
          <div className=" w-full h-[30%] rounded-[0.45rem]  bg-red-500  shadow"></div>
          <div className=" w-full h-[30%] rounded-[0.45rem]  bg-red-500  shadow"></div>
        </div>
      </section>
    </main>
  );
}
