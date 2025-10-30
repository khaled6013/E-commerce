// import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
// import Slider from "react-slick";
// import { FaCodeCompare } from "react-icons/fa6";
// import addd2 from '../assets/addd2.png'
// import { useContext } from "react";
// import { Apidata } from "./ContextApi";
// import { Link } from "react-router-dom";

// const Arrivals = () => {
//   const settings = {
//   arrows: true,
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3, // Default 3 slides everywhere
//   slidesToScroll: 1,
//   nextArrow: <FaLongArrowAltRight />,
//   prevArrow: <FaLongArrowAltLeft />,
//   responsive: [
//     {
//       breakpoint: 1280, // large laptop
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 1024, // tablet landscape
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 768, // tablet portrait
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false,
//       },
//     },
//     {
//       breakpoint: 600, // mobile
//       settings: {
//         slidesToShow: 3, // 👈 still show 3 slides in mobile
//         slidesToScroll: 1,
//         arrows: false,
//         dots: false,
//       },
//     },
//   ],
//   appendDots: (dots) => (
//     <div
//       style={{
//         backgroundColor: "#ddd",
//         borderRadius: "10px",
//         padding: "10px",
//       }}
//     >
//       <ul style={{ margin: "0px" }}>{dots}</ul>
//     </div>
//   ),
//   customPaging: (i) => (
//     <div
//       style={{
//         width: "30px",
//         color: "blue",
//         border: "1px blue solid",
//       }}
//     >
//       {i + 1}
//     </div>
//   ),
// };



//   let data = useContext(Apidata);

//   return (
//     <>
//       <div className="lg:py-10 py-5">
//         <div className="lg:w-10/12 mx-auto w-11/12">
//           <div className="w-full">
//             <p className="text-[#262626] lg:text-[39px] text-[23px] font-semibold font-dm">New Arrivals</p>
//           </div>
//           <div className="w-full lg:mt-[40px] mt-[15px]">
//             <Slider {...settings} className="gap-3">
//               {data.map((item) => (
//                 <div
//                   key={item.id}
//                   className="!w-[90%] sm:!w-[95%] relative group mx-auto"
//                 >
//                   <div className="w-full">
//                     <Link to="/shop">
//                       <img
//                         src={item.thumbnail}
//                         alt={item.title}
//                         className="w-full cursor-pointer object-cover"
//                       />
//                     </Link>
//                   </div>

//                   <div className="flex justify-between mt-5 z-10">
//                     <p className="text-[#262626] text-[16px] sm:text-[14px] font-dm font-bold">
//                       {item.title}
//                     </p>
//                     <p className="text-[#767676] text-[16px] sm:text-[14px] font-normal font-dm">
//                       ${item.price}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[#767676] text-[16px] sm:text-[14px] font-dm font-normal pt-3">
//                       Black
//                     </p>
//                   </div>

//                   <div className="absolute top-2 left-2">
//                     <p className="text-[#FFFFFF] text-[14px] sm:text-[12px] font-dm font-bold py-[7px] px-[28px] sm:px-[18px] bg-black hover:bg-[#2e2b2b] cursor-pointer">
//                       New
//                     </p>
//                   </div>

//                   <div className="absolute !w-full left-0 bottom-[62px] sm:bottom-[45px]">
//                     <div className="h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
//                       <div className="pt-[26px] opacity-0 group-hover:opacity-95">
//                         <div className="flex items-center justify-end mr-3">
//                           <p className="text-[#262626] hover:text-[#767676] text-[15px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
//                             Add to Wish List
//                           </p>
//                           <FaHeart />
//                         </div>

//                         <div className="flex items-center justify-end mr-3 mt-[16px]">
//                           <FaCodeCompare />
//                         </div>

//                         <div className="flex items-center justify-end mr-3 mt-[16px]">
//                           <p className="text-[#262626] hover:text-[#767676] text-[15px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
//                             Add to Cart
//                           </p>
//                           <FaShoppingCart />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* <div className="w-full lg:mt-[40px] mt-[15px]">
//             <Slider {...settings} className="gap-3">
//               {data.map((item) => (
//                 <div className="!w-[90%] sm:!w-[95%] relative group mx-auto">
//                   <div className="w-full">
//                     <Link to="/shop">
//                       <img
//                         src={item.thumbnail}
//                         alt=""
//                         className="w-full cursor-pointer object-cover"
//                       />
//                     </Link>
//                   </div>

//                   <div className="flex justify-between mt-5 z-10">
//                     <p className="text-[#262626] text-[16px] sm:text-[14px] font-dm font-bold">
//                       {item.title}
//                     </p>
//                     <p className="text-[#767676] text-[16px] sm:text-[14px] font-normal font-dm">
//                       ${item.price}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[#767676] text-[16px] sm:text-[14px] font-dm font-normal pt-3">
//                       Black
//                     </p>
//                   </div>

//                   <div className="absolute top-2 left-2">
//                     <p className="text-[#FFFFFF] text-[14px] sm:text-[12px] font-dm font-bold py-[7px] px-[24px] sm:px-[18px] bg-black hover:bg-[#2e2b2b] cursor-pointer">
//                       New
//                     </p>
//                   </div>

//                   <div className="absolute !w-[100%] left-0 bottom-[62px] sm:bottom-[45px]">
//                     <div className="h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
//                       <div className="pt-[26px] opacity-0 group-hover:opacity-95">
//                         <div className="flex items-center justify-end mr-3">
//                           <p className="text-[#262626] hover:text-[#767676] text-[15px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
//                             Add to Wish List
//                           </p>
//                           <FaHeart />
//                         </div>
//                         <div className="flex items-center justify-end mr-3 mt-[16px]">
//                           <FaCodeCompare />
//                         </div>
//                         <div className="flex items-center justify-end mr-3 mt-[16px]">
//                           <p className="text-[#262626] hover:text-[#767676] text-[15px] sm:text-[13px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
//                             Add to Cart
//                           </p>
//                           <FaShoppingCart />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div> */}

//         </div>
//         <div className="lg:w-10/12 mx-auto w-11/12">
//           <div className="lg:mt-[150px]">
//             <div className="w-full">
//               <div className="lg:mt-[100px]">
//                 <img src={addd2} alt="" className="w-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Arrivals
import {
  FaHeart,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaShoppingCart,
} from "react-icons/fa";
import Slider from "react-slick";
import { FaCodeCompare } from "react-icons/fa6";
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
                  {/* Image */}
                  <div className="w-full">
                    <Link to="/shop">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-auto cursor-pointer object-cover rounded-lg"
                      />
                    </Link>
                  </div>

                  {/* Title & Price */}
                  <div className="flex justify-between mt-4 sm:mt-3 z-10">
                    <p className="text-[#262626] text-[16px] sm:text-[14px] font-dm font-bold truncate">
                      {item.title}
                    </p>
                    <p className="text-[#767676] text-[16px] sm:text-[14px] font-normal font-dm">
                      ${item.price}
                    </p>
                  </div>

                  {/* Color */}
                  <p className="text-[#767676] text-[15px] sm:text-[13px] font-dm font-normal pt-2 sm:pt-1">
                    Black
                  </p>

                  {/* New Tag */}
                  <div className="absolute top-2 left-2">
                    <p className="text-white text-[14px] sm:text-[12px] font-dm font-bold py-[6px] px-[24px] sm:px-[16px] bg-black hover:bg-[#2e2b2b] cursor-pointer rounded-md">
                      New
                    </p>
                  </div>

                  {/* Hover Box */}
                  <div className="absolute !w-full left-0 bottom-[60px] sm:bottom-[40px]">
                    {/* Desktop & Tablet hover */}
                    <div className="h-[0px] lg:group-hover:h-[120px] md:group-hover:h-[120px] duration-300 ease-in-out bg-white rounded-b-lg shadow-sm">
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
