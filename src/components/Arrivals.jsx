import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import ariImg from '../assets/ari1.png';
import { FaCodeCompare } from "react-icons/fa6";
import ari2Img from '../assets/ari2.png'
import ari3Img from '../assets/ari3.png'
import ari4Img from '../assets/ari4.png'
import ari5Img from '../assets/ari5.png'
import ari6Img from '../assets/ari6.png'
import ari7Img from '../assets/ari7.png'
import ari8Img from '../assets/ari8.png'
import addd2 from'../assets/addd2.png'

const Arrivals = () => {
   const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <FaLongArrowAltRight />,
    prevArrow: <FaLongArrowAltLeft />,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <>
     <div className="py-10">
       <div className="lg:w-10/12 mx-auto w-11/12">
       <div className="w-full">
        <p className="text-[#262626] text-[39px] font-semibold font-dm">New Arrivals</p>
       </div>
         <div className="w-full lg:mt-[40px]">
            <Slider {...settings} className="gap-3" >


                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ariImg} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari2Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari3Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari4Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari5Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>

            </Slider>
         </div>
       </div>
       <div className="lg:w-10/12 mx-auto w-11/12">
        <div className="lg:mt-[150px]">
           <Slider {...settings} className="gap-3" >


                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari6Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari7Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari8Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari5Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className=" !w-[290px] relative group">
                        <div className="w-full ">
                            <img src={ari6Img} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                         <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute left-0 bottom-[42px]">
                          <div className="w-[290px] h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>

            </Slider>
            <div className="w-full">
              <div className="lg:mt-[100px]">
                <img src={addd2} alt="" className="w-full"/>
              </div>
            </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default Arrivals