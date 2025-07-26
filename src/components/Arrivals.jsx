import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import ariImg from '../assets/ari1.png';
import { FaCodeCompare } from "react-icons/fa6";
// import ari2Img from '../assets/ar2.png'
// import ari3Img from '../assets/ar3.png'
// import ari4Img from '../assets/ar4.png'

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
                  <div className=" !w-[270px] relative group">
                        <div className="w-full">
                            <img src={ariImg} alt="" className="w-full cursor-pointer" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF] text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black">New</p>
                        </div>
                        <div className="absolute left-0 bottom-9">
                          <div className="w-[270px] h-[0px] group-hover:h-[140px] bg-[#FFFFFF]">
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
                  <div className=" !w-[270px] relative group">
                        <div className="w-full">
                            <img src={ariImg} alt="" className="w-full cursor-pointer" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF] text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black">New</p>
                        </div>
                        <div className="absolute left-0 bottom-9">
                          <div className="w-[270px] h-[0px] group-hover:h-[140px] bg-[#FFFFFF]">
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
                  <div className=" !w-[270px] relative group">
                        <div className="w-full">
                            <img src={ariImg} alt="" className="w-full cursor-pointer" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF] text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black">New</p>
                        </div>
                        <div className="absolute left-0 bottom-9">
                          <div className="w-[270px] h-[0px] group-hover:h-[140px] bg-[#FFFFFF]">
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
                  <div className=" !w-[270px] relative group">
                        <div className="w-full">
                            <img src={ariImg} alt="" className="w-full cursor-pointer" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF] text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black">New</p>
                        </div>
                        <div className="absolute left-0 bottom-9">
                          <div className="w-[270px] h-[0px] group-hover:h-[140px] bg-[#FFFFFF]">
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
                  <div className=" !w-[270px] relative group">
                        <div className="w-full">
                            <img src={ariImg} alt="" className="w-full cursor-pointer" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF] text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black">New</p>
                        </div>
                        <div className="absolute left-0 bottom-9">
                          <div className="w-[270px] h-[0px] group-hover:h-[140px] bg-[#FFFFFF]">
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
     </div>
    </>
  )
}

export default Arrivals