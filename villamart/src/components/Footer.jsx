import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <main className="w-full bg-[#3c641b]  mx-auto py-[35px] px-2 flex flex-col items-center justify-center  mt-6">
      <section className="max-w-7xl text-white  flex justify-between w-full flex-wrap">
        <ul>
          <li className=" text-[22px] font-bold">ABOUT VILLAMART </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            contact us
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            about us
          </li>

          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            terms and condition{" "}
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">PAYMENT</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            villamart pay
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">BUYING ON VILLAMART </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            buyers safety center
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            FAQs
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            delivery
          </li>

          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            bulk purchase
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">MORE INFO</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            privacy policy
          </li>

          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            track my order
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">MAKE MONEY ON VILLAMART </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            become a villamart affiliate
          </li>
        </ul>
      </section>
      <section className=" w-full max-w-7xl mt-[20px]  ">
        <h4 className=" text-[18px] font-bold text-white capitalize   ">
          connect on socials
        </h4>

        <div className=" w-[80px] flex justify-between  items-center ">
          <a target="_blank" href="" rel="noreferrer">
            <FaTwitter className=" text-[30px]   cursor-pointer text-[#00acee]" />
          </a>

          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=2349081999924&text&type=phone_number&app_absent=0"
            rel="noreferrer"
          >
            <FaInstagram className=" text-[30px]   cursor-pointer text-[#fa5682]" />
          </a>
        </div>
      </section>
      <p className="  text-white">
        {" "}
        Copyright &copy; Villamart 2023. All rights reserved{" "}
      </p>
    </main>
  );
}

export default Footer;
