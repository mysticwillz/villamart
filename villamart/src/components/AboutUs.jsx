import React from "react";

export default function AboutUs() {
  return (
    <main className="max-w-7xl mt-[2.5rem] md:mt-[3.5rem] mx-auto px-2 md:px-0">
      <h1 className="text-[2.3rem] md:text-[3rem] mb-[1.5rem] md:mb-[2.5rem] text-bold font-[Sora] text-center text-[#3c641b] ">
        {" "}
        About Us
      </h1>
      <section className="w-full flex justify-between flex-wrap items-center h-full md:h-[70vh] ">
        <div className="md:w-[49%] md:h-full h-[50%]   w-full shadow">
          <img
            src="  https://images.pexels.com/photos/1093837/pexels-photo-1093837.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="about card "
            className="w-full h-full rounded-[0.45rem]"
          />{" "}
        </div>
        <div className="w-full md:w-[49%] md:h-full h-[80%] flex flex-col justify-center  items-center  shadow md:p-4">
          <h3 className="text-gray-500 text-[1.5rem] text-center mt-12 mb-2 md:mb-0 md:mt-0 font-bold capitalize">
            Know more about us
          </h3>
          <p className=" text-gray-500  text-[1rem] md:text-[1.1rem]">
            We have over ten years of experience as a grocer, selling and
            delivering groceries to a diverse range of customers. Our passion
            for providing high-quality products and exceptional customer service
            has helped us build a loyal customer base.
          </p>
          <p className=" text-gray-500  text-[1rem] md:text-[1.1rem] hidden md:block mt-6 md:mt-0 ">
            At our grocery store, We offer a wide range of products, including
            fresh produce, meat, dairy, bakery items, and pantry staples. We
            source our products from reliable suppliers to ensure that our
            customers always receive fresh, high-quality goods. wE also offer a
            convenient delivery service.
          </p>
          <p className=" text-gray-500 text-[1rem] md:text-[1.1rem] mt-2 md:mt-0">
            Our focus as a grocer is on providing excellent customer service and
            building long-term relationships with our customers. Whether
            customers are shopping in-store or online, We strive to make the
            grocery shopping experience as convenient and enjoyable as possible.
            With our years of experience and dedication to quality, We are
            confident that We can meet the needs of any customer looking for a
            reliable and trustworthy grocery provider.
          </p>
        </div>
      </section>
    </main>
  );
}
