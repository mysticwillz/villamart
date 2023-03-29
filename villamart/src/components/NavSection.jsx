import "./nav.css";
import villamart from "../assets/villamart.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Sidebar from "./Sidebar";
export default function NavSection({
  scrollToSection,
  services,
  about,
  contact,
  home,
}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      ref={home}
      className="flex justify-between items-center px-4 md:px-8 h-[5rem] py-4 w-full mx-auto fixed top-0 z-[150]  shadow-lg"
    >
      <img
        src={villamart}
        alt="villamart logo"
        className="  w-[10.23rem] h-[7.8rem] flex justify-center items-center  cursor-pointer"
        onClick={() => {
          scrollToSection(home);
        }}
      />

      <ul className="nav-links text-[1.4rem] font-[Poppins] capitalize text-[#c50610] hidden md:block">
        <li
          className="stores cursor-pointer  text-[#c50610]"
          onClick={() => {
            scrollToSection(services);
          }}
        >
          <i className="fa-sharp fa-solid fa-shop in"></i> services
        </li>

        <li
          className="about cursor-pointer"
          onClick={() => {
            scrollToSection(about);
          }}
        >
          {" "}
          <i className="fa-solid fa-sliders in"></i> about us
        </li>
        <li
          className="contact cursor-pointer"
          onClick={() => {
            scrollToSection(contact);
          }}
        >
          <i className="fa-regular fa-address-card in"></i> contact us
        </li>
      </ul>
      <button className=" hidden  md:flex justify-center items-center contact w-[10rem] h-[50px] rounded-[10px] text-[#3c641b]  text-[1.4rem] bg-[#fff] hover:bg-[#3c641b] hover:border hover:border-[#fff]  hover:text-white transition duration-300 ease-in">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=2349081999924&text&type=phone_number&app_absent=0"
        >
          contact us
        </a>
      </button>

      <div className="burger">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      {!showMenu ? (
        <BiMenu
          className="text-[3rem] text-white md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <AiOutlineClose
          className="text-[3rem] text-white md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}
      <Sidebar
        showMenu={showMenu}
        scrollToSection={scrollToSection}
        services={services}
        about={about}
        contact={contact}
        setShowMenu={setShowMenu}
      />
    </nav>
  );
}
