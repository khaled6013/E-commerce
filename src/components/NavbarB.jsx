import categoryIcon from '../assets/categoryIcon.png'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';


const NavbarB = () => {
    let cateref = useRef()
    let accateref = useRef()
    let accTwoateref = useRef()
    let [cate, setCeta] = useState(false)
    let [accate, setacCeta] = useState(false)
    let [accateTwo, setacCetaTwo] = useState(false)

    document.addEventListener("click", (e) => {
        if (cateref.current.contains(e.target) == true) {
            setCeta(!cate)
        } else {
            setCeta(false)
        }
        if (accateref.current.contains(e.target) == true) {
            setacCeta(!accate)
        } else {
            setacCeta(false)
        }
        if (accTwoateref.current.contains(e.target) == true) {
            setacCetaTwo(!accateTwo)
        } else {
            setacCetaTwo(false)
        }
    });

    return (
        <>
    <div className="bg-[#F5F5F3] lg:py-[30px]">
        <div className="lg:w-10/12 mx-auto w-11/12">
            <div className="lg:flex items-center">
                <div className="lg:w-2/7 relative">
                    <div className="flex items-center " >
                        <img src={categoryIcon} alt="categoryIcon" />
                        <p className='text-[#262626] text-[14px] font-dm font-normal pl-2 cursor-pointer' ref={cateref}>Shop by Category</p>
                    </div>
                    {cate &&
                        <div className={`absolute top-9 left-0 duration-200 ease-in-out`}>
                            <div className="bg-[#2D2D2D] pt-[16px] pl-[20px] pr-[23px]">
                                <ul>
                                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3">
                                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                                    </div>
                                    <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Furniture</a>
                                        < FaCaretRight className='ml-[143px] text-[#FFFFFFB2]' />
                                    </div>
                                    <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Electronics</a>
                                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                                    </div>
                                    <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Clothes</a>
                                        < FaCaretRight className='ml-[152px] text-[#FFFFFFB2]' />
                                    </div>
                                    <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Bags</a>
                                        < FaCaretRight className='ml-[167px] text-[#FFFFFFB2]' />
                                    </div>
                                    <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Home appliances</a>
                                        < FaCaretRight className='ml-[91px] text-[#FFFFFFB2]' />
                                    </div>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
                <div className="lg:w-4/7">
                    <div className="flex">
                        <div className="relative">
                            <form action="#" className=''>
                                <input type="text" placeholder='Search Products' className='border-none bg-white py-4 lg:pl-5 lg:w-[560px] outline-0' />
                            </form>
                            <IoSearch className='absolute top-4 right-3 lg:text-[24px]' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/7">
                    <div className="flex justify-end">
                        <div className="relative">
                            <FaUser className='cursor-pointer ' ref={accateref} />
                            {accate &&
                                <div className=" absolute top-[22px] right-0">
                                    <div className="bg-white hover:bg-black py-4 px-[59px] cursor-pointer">
                                        <p className='text-black hover:text-white text-[14px] font-dm font-bold w-[84px] '>My Account</p>
                                    </div>
                                    <div className="bg-white hover:bg-black py-4 px-[73px] cursor-pointer">
                                        <p className='text-black text-[14px] font-dm font-bold w-[54px] text-center'>Log Out</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="relative">
                            <FaShoppingCart className='ml-7 cursor-pointer' ref={accTwoateref}/>
                            {accateTwo &&
                            <div className="absolute top-8 right-[-30px]">
                                <div className="bg-[#F5F5F3] py-5 w-[358px] pl-5">
                                    <div className="flex items-center relative">
                                        <div className="h-[80px] w-[80px] bg-[#979797]"></div>
                                        <div className="pl-5">
                                        <p className='text-[#262626] text-[14px] font-dm font-bold w-[131px]'>Black Smart Watch</p>
                                        <p className='text-[#262626] text-[14px] font-dm font-bold'>$44.00</p>
                                        </div>
                                        <div className=""><RxCross2 className='absolute top-[40%] right-5 cursor-pointer'/></div>
                                    </div>
                                </div>
                                <div className="pt-[14px] w-[358px] pl-5 pb-[36px]">
                                    <div className="">
                                    <span className='text-[#767676] text-[16px] font-dm font-normal'>Subtotal:</span><span className='text-[#262626] text-[14px] font-dm font-bold'>$44.00</span>
                                    </div>
                                    <div className="flex items-center mt-[25px]">
                                    <div className="">
                                        <a href="#" className='px-10 border-2 py-4 text-[#262626] text-[14px] font-dm font-bold hover:bg-black hover:text-white'>View Cart</a>
                                    </div>
                                    <div className="ml-4">
                                        <a href="#" className='px-10 border-2 py-4 text-[#262626] text-[14px] font-dm font-bold hover:bg-black hover:text-white'>Checkout</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default NavbarB