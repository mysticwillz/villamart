import React from "react";
import villamart from "../assets/villamart.png";
export default function Sidebar({ showMenu }) {
  return (
    <main
      className={
        !showMenu
          ? "w-[75%] h-auto pb-[3rem] rounded-br-md fixed top-[7rem] left-0 bg-white md:hidden z-[100] transform translate-x-[-100%] transition all duration-350 ease-in-out"
          : "w-[75%] h-auto pb-[3rem] rounded-br-md fixed top-[7rem] left-0 bg-white md:hidden z-[100] transform translate-x-[0%] transition all duration-250 ease-in-out "
      }
    >
      <section className="flex flex-col mt-[5rem] items-center px-4 md:px-8  w-full mx-auto h-full ">
        <ul className=" text-[1.8rem] font-[Poppins] capitalize text-[#c50610] ">
          <li className="stores  text-[#c50610]">
            <a href="#services">
              <i className="fa-sharp fa-solid fa-shop "></i> services
            </a>
          </li>

          <li className="my-[5rem]">
            <a href="#about">
              {" "}
              <i className="fa-solid fa-sliders "></i> about us
            </a>
          </li>
          <li className="about">
            <a href="#contact">
              <i className="fa-regular fa-address-card "></i> contact us
            </a>
          </li>
        </ul>
        <button className=" mt-[5rem] flex justify-center items-center contact w-[80%] h-[50px] rounded-[10px] bg-[#3c641b]  text-[1.4rem] text-[#fff] hover:bg-[#3c641b] hover:border hover:border-[#fff]  hover:text-white transition duration-300 ease-in">
          <a href="#contact-us">contact us</a>
        </button>
      </section>
    </main>
  );
}
