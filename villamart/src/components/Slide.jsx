import { useRef, useEffect, useState } from "react";

import milik from "../assets/milik.jpeg";
import veg from "../assets/veg.jpeg";
import tubers from "../assets/tubers.jpeg";
import rice from "../assets/rice.jpeg";
import spices from "../assets/spices.jpeg";
export default function Slide() {
  const swipe = [
    {
      image: milik,
      title: "Diary Products",
      text: "Say goodbye to boring breakfasts and bland snacks – with our dairy food products, you can indulge in a variety of delicious flavors and textures that are sure to satisfy your cravings.",
    },
    {
      image: veg,

      title: "      Vegetables and Fruits",
      text: "Introducing the freshest, juiciest, and most colorful selection of fruits and vegetables! From farm to table, our produce is carefully grown and hand-picked for maximum taste and nutrition. Come try our bountiful harvest today!",
    },
    ,
    {
      image: tubers,
      title: " Tubers",
      text: "Are you looking for a budget-friendly way to add variety and nutrition to your meals? Tubers are the perfect solution! Our selection of high-quality and affordable potatoes, sweet potatoes, and yams will satisfy your hunger and your wallet. ",
    },
    ,
    {
      image: spices,
      title: "    Spices and Seasoning",
      text: "Spice up your life with our premium selection of exotic and aromatic spices! From fragrant cinnamon to fiery chili, our range of seasonings will take your dishes to the next level. Add some excitement to your pantry today!",
    },
    ,
    {
      image: rice,
      title: "Grains and flour",
      text: "Discover the incredible world of rices! Our selection of premium grains includes everything from aromatic basmati to nutty brown rice, all carefully sourced and handpicked for maximum quality and flavor. Treat your taste buds to a new adventure today!",
    },
  ];

  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    const lastSlide = currentIndex === swipe.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    timeRef.current = setTimeout(() => {
      next();
    }, 2000);
    return () => clearInterval(timeRef.current);
  });
  console.log(swipe);
  return (
    <main className="w-7xl mx-auto md:flex-row justify-between items-center mt-4 flex-col px-4 md:px-0 hidden">
      <div className="w-full md:w-[230px] h-[250px] md:h-[130px]  mx-0 md:mx-[2rem] rounded-[15px] px-4">
        <img
          src={milik}
          alt="Villa mart product card"
          className="w-[30%] h-[50%] mx-auto"
        />
        <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
          Diary Products
        </h5>
        <p className="text-[0.98rem] leading-[1rem] text-gray-400 font-normal">
          Say goodbye to boring breakfasts and bland snacks – with our dairy
          food products, you can indulge in a variety of delicious flavors and
          textures that are sure to satisfy your cravings.
        </p>
      </div>
      <div className="w-full md:w-[230px] h-[250px] md:h-[130px]  mx-0 md:mx-[2rem] rounded-[15px] px-4  md:hidden">
        <img
          src={`${swipe[currentIndex].image}`}
          alt="Villa mart product card"
          className="w-[30%] h-[50%] mx-auto"
        />
        <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
          {swipe[currentIndex].title}
        </h5>
        <p className="text-[0.98rem] leading-[1rem] text-gray-400 font-normal">
          {swipe[currentIndex].text}
        </p>
      </div>
    </main>
  );
}
