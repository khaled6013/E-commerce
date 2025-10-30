import Slider from "react-slick";
import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import sp1 from '../assets/sp1.png'
import sp2 from '../assets/sp2.png'
import sp3 from '../assets/sp3.png'
import sp4 from '../assets/sp4.png'

const Special = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <FaLongArrowAltRight />,
    prevArrow: <FaLongArrowAltLeft />,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // smaller tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const products = [
    { img: sp1, title: "Basic Crew Neck Tee", price: "44.00" },
    { img: sp2, title: "Basic Crew Neck Tee", price: "44.00" },
    { img: sp3, title: "Basic Crew Neck Tee", price: "44.00" },
    { img: sp4, title: "Basic Crew Neck Tee", price: "44.00" },
    { img: sp3, title: "Basic Crew Neck Tee", price: "44.00" },
  ];

  return (
    <div className="lg:py-10 py-4">
      <div className="lg:w-10/12 mx-auto w-11/12">
        <p className="text-[#262626] lg:text-[39px] text-[23px] font-semibold font-dm text-center lg:text-left">
              Special Offers
            </p>

        <div className="w-full lg:mt-[40px] mt-[20px]">
          <Slider {...settings} className="gap-3">
            {products.map((item, index) => (
              <div key={index} className="!w-[90%] sm:!w-[95%] relative group mx-auto px-2">
                {/* Image */}
                <div className="w-full">
                  <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded-lg" />
                </div>

                {/* Title & Price */}
                <div className="flex justify-between mt-4 sm:mt-3 z-10">
                  <p className="text-[#262626] text-[16px] sm:text-[14px] font-dm font-bold truncate">{item.title}</p>
                  <p className="text-[#767676] text-[16px] sm:text-[14px] font-normal font-dm">${item.price}</p>
                </div>

                {/* Color */}
                <p className="text-[#767676] text-[15px] sm:text-[13px] font-dm font-normal pt-2 sm:pt-1">Black</p>

                {/* New Tag */}
                <div className="absolute top-2 left-2">
                  <p className="text-white text-[14px] sm:text-[12px] font-dm font-bold py-[6px] px-[24px] sm:px-[16px] bg-black hover:bg-[#2e2b2b] cursor-pointer rounded-md">
                    New
                  </p>
                </div>

                {/* Hover Box (lg & md only) */}
                <div className="absolute !w-full left-0 bottom-[62px] sm:bottom-[45px]">
                  <div className="h-[0px] lg:group-hover:h-[130px] md:group-hover:h-[130px] duration-300 ease-in-out bg-white rounded-b-lg shadow-sm">
                    <div className="pt-[24px] opacity-0 lg:group-hover:opacity-95 md:group-hover:opacity-95 transition-opacity duration-300">
                      {/* Wish List */}
                      <div className="flex items-center justify-end mr-3">
                        <p className="text-[#262626] hover:text-[#767676] text-[15px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
                          Add to Wish List
                        </p>
                        <FaHeart />
                      </div>

                      {/* Compare */}
                      <div className="flex items-center justify-end mr-3 mt-[14px]">
                        <FaCodeCompare />
                      </div>

                      {/* Add to Cart */}
                      <div className="flex items-center justify-end mr-3 mt-[14px]">
                        <p className="text-[#262626] hover:text-[#767676] text-[15px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
                          Add to Cart
                        </p>
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Special;
