import "./nav.css";
import villamart from "../assets/villamart.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Sidebar from "./Sidebar";
export default function NavSection() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 h-[7rem] w-full mx-auto fixed top-0 z-[150]  shadow-lg">
      <img
        src={villamart}
        alt="villamart logo"
        className="  w-[8.23rem] h-[6rem] flex justify-center items-center "
      />

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

      <div className="burger">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      {!showMenu ? (
        <BiMenu
          className="text-[4rem] text-white md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <AiOutlineClose
          className="text-[4rem] text-white md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}
      <Sidebar showMenu={showMenu} />
    </nav>
  );
}
