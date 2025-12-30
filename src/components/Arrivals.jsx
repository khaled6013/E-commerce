
import {
  FaHeart,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaShoppingCart,
} from "react-icons/fa";
import Slider from "react-slick";
import addd2 from "../assets/addd2.png";
import { useContext } from "react";
import { Apidata } from "./ContextApi";
import { Link } from "react-router-dom";

const Arrivals = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FaLongArrowAltRight />,
    prevArrow: <FaLongArrowAltLeft />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  let data = useContext(Apidata);

  return (
    <>
      <div className="lg:py-10 py-5">
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="w-full">
            <p className="text-[#262626] lg:text-[39px] text-[23px] font-semibold font-dm text-center lg:text-left">
              New Arrivals
            </p>
          </div>

          <div className="w-full lg:mt-[40px] mt-[15px]">
            <Slider {...settings} className="gap-3">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="!w-[90%] sm:!w-[95%] relative group mx-auto px-2"
                >
                  <div className="w-full">
                    <Link to="/shop">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-auto cursor-pointer object-cover rounded-lg"
                      />
                    </Link>
                  </div>
                  <div className="flex justify-between mt-4 sm:mt-3 z-10">
                    <p className="text-[#262626] text-[16px] sm:text-[14px] font-dm font-bold truncate">
                      {item.title}
                    </p>
                    <p className="text-[#767676] text-[16px] sm:text-[14px] font-normal font-dm">
                      ${item.price}
                    </p>
                  </div>
                  <p className="text-[#767676] text-[15px] sm:text-[13px] font-dm font-normal pt-2 sm:pt-1">
                    Black
                  </p>
                  <div className="absolute top-2 left-2">
                    <p className="text-white text-[14px] sm:text-[12px] font-dm font-bold py-[6px] px-[24px] sm:px-[16px] bg-black hover:bg-[#2e2b2b] cursor-pointer rounded-md">
                      New
                    </p>
                  </div>
                  <div className="absolute !w-full left-0 bottom-[60px] sm:bottom-[40px]">
                    <div className="h-[0px] lg:group-hover:h-[120px] md:group-hover:h-[120px] duration-300 ease-in-out bg-white rounded-b-lg shadow-sm">
                      <div className="pt-[24px] opacity-0 lg:group-hover:opacity-95 md:group-hover:opacity-95 transition-opacity duration-300">
                        <div className="flex items-center justify-end mr-3">
                          <p className="text-[#262626] hover:text-[#767676] text-[18px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
                            Add to Wish List
                          </p>
                          <FaHeart />
                        </div>
                        <div className="flex items-center justify-end mr-3 mt-[14px]">
                          <Link to={`/shop/${item.id}`} className="text-[#262626] hover:text-[#767676] text-[18px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
                            Add to Cart
                          </Link>
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

        {/* Banner */}
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="lg:mt-[150px] mt-[30px]">
            <img
              src={addd2}
              alt="ad-banner"
              className="w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
