import categoryIcon from '../assets/categoryIcon.png'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Apidata } from './ContextApi';


const NavbarB = () => {

    let cateref = useRef()
    let accateref = useRef()
    let accTwoateref = useRef()
    let searchRef = useRef() 

    let [cate, setCeta] = useState(false)
    let [accate, setacCeta] = useState(false)
    let [accateTwo, setacCetaTwo] = useState(false)
    let [search, setSearch] = useState([])
    let [searchModel, setSearchModel] = useState(false)
    let cartData = useSelector((state) => state.product.cardItem)
    let data = useContext(Apidata)

    useEffect(() => {
        let handler = (e) => {
            if (cateref.current && cateref.current.contains(e.target)) {
                setCeta(!cate)
            } else {
                setCeta(false)
            }
            if (accateref.current && accateref.current.contains(e.target)) {
                setacCeta(!accate)
            } else {
                setacCeta(false)
            }
            if (accTwoateref.current && accTwoateref.current.contains(e.target)) {
                setacCetaTwo(!accateTwo)
            } else {
                setacCetaTwo(false)
            }

            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchModel(false)
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [cate, accate, accateTwo])

    let handleSearch = (e) => {
        if (e.target.value) {
            setSearchModel(true)
            let productSearch = data.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearch(productSearch);
        } else {
            setSearchModel(false)
        }
    }

    return (
        <>
            <div className="bg-[#F5F5F3] lg:py-[20px] py-3 z-50 sticky top-0 right-0 left-0">
                <div className="lg:w-10/12 mx-auto w-11/12">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="lg:w-2/7 md:w-3/7 w-full relative mb-3 lg:mb-0">
                            <div className="flex items-center" >
                                <div className="flex items-center" ref={cateref} >
                                <img
                                    src={categoryIcon}
                                    alt="categoryIcon"
                                    className="lg:w-[22px] w-[16px] cursor-pointer"
                                />
                                <p className="text-[#262626] lg:text-[14px] text-[13px] font-dm font-normal pl-2 cursor-pointer" >
                                    Shop by Category
                                </p>
                                </div>
                            </div>

                            {cate && (
                                <div
                                    className={`absolute top-9 left-0 duration-200 ease-in-out z-50 w-max`}
                                >
                                    <div className="bg-[#2D2D2D] pt-[16px] pl-[20px] pr-[23px]">
                                        <ul>
                                            {[
                                                "Accessories",
                                                "Furniture",
                                                "Electronics",
                                                "Clothes",
                                                "Bags",
                                                "Home appliances",
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between border-b-2 border-[#ffffff42] py-3"
                                                >
                                                    <a className="text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]">
                                                        {item}
                                                    </a>
                                                    <FaCaretRight className="text-[#FFFFFFB2]" />
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="lg:w-4/7 md:w-3/5 w-full mb-3 lg:mb-0">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-full" ref={searchRef}>
                                    <form className="" onChange={handleSearch}>
                                        <input
                                            type="text"
                                            placeholder="Search Products"
                                            className="border-none bg-white lg:py-4 py-3 lg:pl-5 pl-3 pr-10 w-full outline-0 text-[14px]"
                                        />
                                    </form>
                                    <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 lg:text-[22px] text-[18px]" />

                                    {searchModel && (
                                        <div className="w-full absolute left-0 z-50 h-[250px] bg-[#262626] overflow-y-scroll">
                                            {search.length > 0 ? (
                                                search.map((item) => (
                                                    <Link to={`/shop/${item.id}`} key={item.id} onClick={() => setSearchModel(false)}>
                                                        <div className="flex items-center gap-3 hover:bg-gray-600 border-b-[1px] border-[#262626] cursor-pointer p-2">
                                                            <img src={item.thumbnail} alt="" className="w-[40px]" />
                                                            <p className="text-[16px] text-white font-dm">
                                                                {item.title}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <div className="flex items-center justify-center h-full">
                                                    <p className="text-white text-[16px] font-dm">
                                                        No Product Found
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/7 md:w-1/4 w-full flex justify-end lg:justify-end gap-5">
                            <div className="relative">
                                <FaUser
                                    className="cursor-pointer w-[20px] h-[30px]"
                                    ref={accateref}
                                />
                                {accate && (
                                    <div className="absolute top-[22px] right-0 z-50">
                                        <div className="bg-black py-4 px-6 cursor-pointer">
                                            <p className="text-white text-[14px] font-dm font-bold w-max">
                                                My Account
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-black text-[14px] font-dm font-bold text-center bg-white hover:bg-black hover:text-white py-4 px-8 cursor-pointer">
                                                Log Out
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <Link to="cart">
                                    <FaShoppingCart className="cursor-pointer w-[20px] h-[30px]" />
                                <div className="absolute top-[-8px] right-[-8px]">
                                    <h1 className="text-white text-[12px] bg-green-500 lg:py-[3px] py-[2px] lg:px-[6px] px-[4px] rounded-full font-bold">
                                        {cartData.length}
                                    </h1>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavbarB