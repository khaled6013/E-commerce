import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const JournalBanner = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <div className="lg:py-[100px] py-[30px]">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        <div className="w-full">
          <h1 className="text-[#262626] lg:text-[49px] text-[30px] font-dm font-bold capitalize">
            {path ? path : "Journal"}
          </h1>
          <div className="mt-3 flex items-center gap-x-2">
            <Link 
              to="/" 
              className="text-[#767676] hover:text-[#262626] font-dm text-[12px] cursor-pointer transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-[#767676] text-[12px] font-dm">/</span>
            <span className="text-[#262626] font-dm text-[12px] capitalize font-bold">
              {path ? path : "Journal"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalBanner