import milik from "../assets/milik.jpeg";
import veg from "../assets/veg.jpeg";
import tubers from "../assets/tubers.jpeg";
import rice from "../assets/rice.jpeg";
import spices from "../assets/spices.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Separator1 from "./Separator1";
export default function Slide() {
  const swipe = [
    {
      image: milik,
      title: "Diary Products",
      text: "Say goodbye to boring breakfasts and bland snacks – with our dairy food products, you can indulge in a variety of delicious flavors and textures that are sure to satisfy your cravings.",
    },
    {
      image: veg,

      title: "Vegetables and Fruits",
      text: "Introducing the freshest, juiciest, and most colorful selection of fruits and vegetables! From farm to table, our produce is carefully grown and hand-picked for maximum taste and nutrition. Come try our bountiful harvest today!",
    },
    {
      image: tubers,
      title: " Tubers",
      text: "Are you looking for a budget-friendly way to add variety and nutrition to your meals? Tubers are the perfect solution! Our selection of high-quality and affordable potatoes, sweet potatoes, and yams will satisfy your hunger and your wallet. ",
    },
    {
      image: spices,
      title: "Spices and Seasoning",
      text: "Spice up your life with our premium selection of exotic and aromatic spices! From fragrant cinnamon to fiery chili, our range of seasonings will take your dishes to the next level. Add some excitement to your pantry today!",
    },

    {
      image: rice,
      title: "Grains and flour",
      text: "Discover the incredible world of rices! Our selection of premium grains includes everything from aromatic basmati to nutty brown rice, all carefully sourced and handpicked for maximum quality and flavor. Treat your taste buds to a new adventure today!",
    },
  ];

  return (
    <main className="w-7xl mx-auto flex md:flex-row justify-between items-center mt-4 flex-col px-2 md:px-0 relative">
      <Carousel
        autoPlay={true}
        centerMode={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        interval={3000}
        className=" md:hidden w-[100%] shadower"
      >
        {swipe.map((card) => {
          const { image, title, text } = card;
          return (
            <div className=" w-[100%] md:w-[230px] h-[330px] mx-0 md:mx-[2rem] rounded-[15px] px-4 ">
              <img
                src={image}
                alt="Villa mart product card"
                className="w-[30%] h-[50%] mx-auto"
              />
              <h5 className="text-[1rem]  text-gray-700 font-bold pt-1">
                {title}
              </h5>
              <div>
                <p className="text-[0.98rem] leading-[1rem] text-gray-400 font-normal text-left">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
      {swipe.map((card) => {
        const { image, title, text } = card;
        return (
          <div className=" w-[auto]  h-[150px]   hidden md:block ">
            <img
              src={image}
              alt="Villa mart product card"
              className="w-[30%] h-[80%] mx-auto"
            />
            <h5 className="text-[1rem] text-center  text-gray-700 font-bold pt-1">
              {title}
            </h5>
          </div>
        );
      })}
    </main>
  );
}
