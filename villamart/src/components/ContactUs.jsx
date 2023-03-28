import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone, FaAddressCard } from "react-icons/fa";
export default function ContactUs() {
  return (
    <main className="max-w-7xl mt-[2.5rem] md:mt-[3.5rem] mx-auto px-2  md:h-[50vh]  h-[60vh]">
      <h1 className="text-[2.3rem] md:text-[3rem] mb-[1.5rem] md:mb-[2.5rem] text-bold font-[Sora] text-center  text-gray-700">
        {" "}
        Contact Us
      </h1>
      <section className="w-full flex justify-between items-center h-[15vh] md:h-[30vh] flex-wrap text-gray-500 ">
        <div className=" w-full md:w-[30%] border  h-full rounded-[0.45rem]  shadower flex items-center justify-center flex-col">
          <AiOutlineMail className="md:text-[5rem] text-[3rem] text-center" />
          <em className="text-[1.2rem] text-center mt-3 md:mt-4">
            villamart2023@gmail.com
          </em>
        </div>
        <div className=" w-full md:w-[30%] border  h-full rounded-[0.45rem]  shadower flex items-center justify-center flex-col">
          <FaPhone className="md:text-[5rem] text-[3rem] text-center" />
          <p className="text-[1.2rem] text-center mt-3 md:mt-4">
            +234 802 222 8954
          </p>
        </div>
        <div className=" w-full md:w-[30%] border  h-full rounded-[0.45rem]  shadower flex items-center justify-center flex-col">
          <FaAddressCard className="md:text-[5rem] text-[3rem] text-center" />
          <em className="text-[1.2rem] text-center mt-3 md:mt-4">
            3656 kofo kasumu Lakeview estate phase 1, amuwo odofin
          </em>
        </div>
      </section>
    </main>
  );
}
