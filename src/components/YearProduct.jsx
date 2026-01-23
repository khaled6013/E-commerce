import React from 'react';
import { Link } from 'react-router-dom';
import yearProductImg from '../assets/sp1.png'; 

const YearProduct = () => {
  return (
    <div className='w-full bg-amber-50 md:py-[100px] py-[40px] mt-10 lg:mt-[50px]'>
        <div className="lg:w-10/12 w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group">
                    <div className="overflow-hidden">
                        <img 
                            src={yearProductImg} 
                            alt="Product of the Year" 
                            className='w-full h-auto object-cover hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer' 
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                    <h2 className='text-[#262626] font-dm font-bold lg:text-[39px] text-[28px] mb-6 leading-tight'>
                        Product of The Year
                    </h2>
                    <p className='text-[#767676] font-dm text-[16px] mb-10 leading-7 text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div>
                        <Link 
                            to="/shop" 
                            className='bg-[#262626] text-white font-dm font-bold text-[14px] py-4 px-12 hover:bg-black transition-all duration-300 rounded-sm'
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YearProduct;