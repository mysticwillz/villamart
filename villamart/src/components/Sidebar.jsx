import React from "react";

export default function Sidebar({ showMenu }) {
  return (
    <main
      className={
        !showMenu
          ? "w-[75%] h-full fixed top-0 left-0 bg-white md:hidden z-[100] transform translate-x-[-100%] transition all duration-350 ease-in-out"
          : "w-[75%] h-full fixed top-0 left-0 bg-white md:hidden z-[100] transform translate-x-[0%] transition all duration-250 ease-in-out "
      }
    >
      <section className="flex flex-col justify-between items-center px-4 md:px-8  w-full mx-auto  ">
        <ul className="nav-links text-[1.4rem] font-[Poppins] capitalize text-[#c50610] hidden md:block">
          <li className="stores  text-[#c50610]">
            <a href="#services">
              <i className="fa-sharp fa-solid fa-shop in"></i> services
            </a>
          </li>

          <li className="reviews">
            <a href="#about">
              {" "}
              <i className="fa-solid fa-sliders in"></i> about us
            </a>
          </li>
          <li className="about">
            <a href="#contact">
              <i className="fa-regular fa-address-card in"></i> contact us
            </a>
          </li>
        </ul>
        <button className=" hidden  md:flex justify-center items-center contact w-[10rem] h-[50px] rounded-[10px] text-[#3c641b]  text-[1.4rem] bg-[#fff] hover:bg-[#3c641b] hover:border hover:border-[#fff]  hover:text-white transition duration-300 ease-in">
          <a href="#contact-us">contact us</a>
        </button>
      </section>
    </main>
  );
}
