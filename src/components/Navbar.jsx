import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo.png'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let [manu, setManu] = useState(false)
    let location = useLocation()

    return (
        <>
            <div className="lg:py-8 py-5">
                <div className="lg:w-10/12 mx-auto w-11/12">
                    <div className="lg:flex items-center">
                        <div className="lg:w-2/6">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="lg:w-4/6">
                            <ul className={`lg:flex lg:gap-x-10 duration-200 ease-in-out ${manu == true ? "block" : "hidden"}`}>
                                <li className='lg:pt-0 pt-1'>
                                    <Link to='/' className={` ${location.pathname == "/" ? "font-bold text-[#262626]" : "font-normal text-[#767676]"}  text-[14px] font-dm  hover:font-bold`}>Home</Link>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <Link to='/shop' className={`${location.pathname == "/shop" ? "font-bold text-[#262626]" : "font-normal text-[#767676]"} text-[14px] font-dm  hover:font-bold`}>Shop</Link>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <Link to='/about' className={`${location.pathname == "/about" ? "font-bold text-[#262626]" : "font-normal text-[#767676]"} text-[14px] font-dm  hover:font-bold`}>About</Link>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <Link to='/contacts' className={`${location.pathname == "/contacts" ? "font-bold text-[#262626]" : "font-normal text-[#767676]"} text-[14px] font-dm  hover:font-bold`}>Contacts</Link>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <a href="#" className='text-[#767676] text-[14px] font-dm font-normal hover:font-bold'>Journal</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden absolute lg:top-7 top-5 right-3" onClick={() => setManu(!manu)}>
                            {manu ? <RxCross2 className="text-[20px]" /> : <FaBars className="text-[20px]" />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar