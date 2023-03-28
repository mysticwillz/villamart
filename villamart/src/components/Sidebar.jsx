import React from "react";

export default function Sidebar({
  showMenu,
  setShowMenu,
  scrollToSection,
  services,
  about,
  contact,
}) {
  return (
    <main
      className={
        !showMenu
          ? "w-[75%] h-auto pb-[3rem] rounded-br-md fixed top-[5rem] left-0 bg-white md:hidden z-[100] transform translate-x-[-100%] transition all duration-350 ease-in-out"
          : "w-[75%] h-auto pb-[3rem] rounded-br-md fixed top-[5rem] left-0 bg-white md:hidden z-[100] transform translate-x-[0%] transition all duration-250 ease-in-out "
      }
    >
      <section className="flex flex-col mt-[5rem] items-center px-4 md:px-8  w-full mx-auto h-full ">
        <ul className=" text-[1.8rem] font-[Poppins] capitalize text-[#c50610] ">
          <li
            onClick={() => {
              scrollToSection(services);
              setShowMenu(!showMenu);
            }}
            className="stores  text-[#c50610]"
          >
            <i className="fa-sharp fa-solid fa-shop "></i> services
          </li>

          <li
            onClick={() => {
              scrollToSection(about);
              setShowMenu(!showMenu);
            }}
            className="my-[5rem]"
          >
            {" "}
            <i className="fa-solid fa-sliders "></i> about us
          </li>
          <li
            onClick={() => {
              scrollToSection(contact);
              setShowMenu(!showMenu);
            }}
            className="about"
          >
            <i className="fa-regular fa-address-card "></i> contact us
          </li>
        </ul>
        <button className=" mt-[5rem] flex justify-center items-center contact w-[80%] h-[50px] rounded-[10px] bg-[#3c641b]  text-[1.4rem] text-[#fff] hover:bg-[#3c641b] hover:border hover:border-[#fff]  hover:text-white transition duration-300 ease-in">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=2349081999924&text&type=phone_number&app_absent=0"
          >
            contact us
          </a>
        </button>
      </section>
    </main>
  );
}
