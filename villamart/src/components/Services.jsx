import React from "react";
import "../App.css";
import Separator1 from "./Separator1";
export default function Services() {
  return (
    <main className="max-w-7xl mt-[0.5rem] md:mt-[3.5rem] mx-auto px-2  relative">
      <h1 className=" text-[2.3rem] md:text-[3rem] mb-[1.5rem] md:mb-[2.5rem] text-bold font-[Sora] text-center text-[#c40414]">
        {" "}
        Our Services
      </h1>
      <section className="w-full flex justify-between items-center md:h-[85vh] h-[105vh] ">
        <div className="w-[49%] h-full hidden md:block shadower">
          <div className="w-full h-full rounded-[0.45rem]  hidden md:flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="service card"
              className="w-full h-full  rounded-[0.45rem] "
            />
          </div>
        </div>
        <div className=" w-full md:w-[49%]  h-full flex flex-col justify-between items-center">
          <div className=" w-full h-[30%] rounded-[0.45rem]   shadower flex items-center justify-center ">
            <div className=" w-[50%] h-full rounded-r-[0.45rem] px-2">
              <h3 className="text-[1.5rem] text-center font-bold text-gray-500">
                Grocery Store
              </h3>
              <p className=" text-gray-500 text-sm md:text-[1.1rem]">
                We pride ourselves on offering a wide selection of high-quality,
                fresh produce and pantry staples at affordable prices. We're
                your one-stop-shop for all your grocery needs!
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/2255793/pexels-photo-2255793.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="services card one"
              className="h-full rounded-r-[0.45rem] w-[50%] "
            />
          </div>
          <div className=" w-full h-[30%] rounded-[0.45rem]   shadower flex items-center justify-center ">
            <div className=" w-[50%] h-full rounded-r-[0.45rem] px-2">
              <h3 className="text-[1.5rem] text-center font-bold text-gray-500">
                Catering services
              </h3>
              <p className=" text-gray-500 text-sm md:text-[1.1rem]">
                Whether you're hosting a wedding, birthday party, or any special
                event, our catering service can help you create an unforgettable
                dining experience.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="services card two"
              className="h-full rounded-l-[0.45rem] w-[50%] "
            />
          </div>

          <div className=" w-full h-[30%] rounded-[0.45rem]   shadower flex items-center justify-center ">
            <div className=" w-[50%] h-full rounded-r-[0.45rem] px-2">
              <h3 className="text-[1.5rem] text-center font-bold text-gray-500">
                Grocery Delivery
              </h3>
              <p className=" text-gray-500 text-sm md:text-[1.1rem]">
                Don't have time to go grocery shopping? No problem! Our grocery
                delivery service makes it easy to stock up on everything you
                need without ever leaving your home.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/4957355/pexels-photo-4957355.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="services card three"
              className="h-full rounded-r-[0.45rem] w-[50%] "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
