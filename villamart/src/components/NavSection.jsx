import React from "react";
import "./nav.css";
import villamart from "../assets/villamart.png";
export default function NavSection() {
  return (
    <nav className="flex justify-between items-center px-8  w-full mx-auto ">
      <img
        src={villamart}
        alt="villamart logo"
        className="  w-[8.23rem] h-[6rem] flex justify-center items-center "
      />

      <ul className="nav-links text-[1.4rem] font-[Poppins] capitalize text-[#c50610] hidden md:block">
        <li className="stores  text-[#c50610]">
          <a href="#stores">
            <i className="fa-sharp fa-solid fa-shop in"></i> services
          </a>
        </li>

        <li className="reviews">
          <a href="#reviews">
            {" "}
            <i className="fa-solid fa-sliders in"></i> reviews
          </a>
        </li>
        <li className="reviews">
          <a href="#reviews">
            {" "}
            <i className="fa-solid fa-sliders in"></i> reviews
          </a>
        </li>
        <li className="about">
          <a href="#services">
            {" "}
            <i className="fa-regular fa-address-card in"></i> about{" "}
          </a>
        </li>
      </ul>
      <button className=" hidden  md:flex justify-center items-center contact w-[10rem] h-[50px] rounded-[10px] text-[#3c641b]  text-[1.4rem] bg-[#fff] hover:bg-[#3c641b] hover:border hover:border-[#fff]  hover:text-white transition duration-300 ease-in">
        <a href="#contact-us">contact us</a>
      </button>

      <div className="burger">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </nav>
  );
}
