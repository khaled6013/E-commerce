import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import ariImg from '../assets/ari1.png';
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
            <Slider {...settings} >
                  <div className=" w-[270px]">
                        <div className="">
                            <img src={ariImg} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[20px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                  </div>
                  <div className=" w-[270px]">
                        <div className="">
                            <img src={ariImg} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[20px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                  </div>
                  <div className=" w-[270px]">
                        <div className="">
                            <img src={ariImg} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[20px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                  </div>
                  <div className=" w-[240px]">
                        <div className="">
                            <img src={ariImg} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[20px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
                        </div>
                  </div>
                  <div className=" w-[270px]">
                        <div className="">
                            <img src={ariImg} alt="" className="w-full" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="text-[#262626] text-[20px] font-dm font-bold">Basic Crew  Neck Tee</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">$44.00</p>
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