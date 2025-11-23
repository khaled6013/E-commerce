import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Post = ({ allPage, filterCate, active }) => {
    let [AllFilter, setAllFilter] = useState([]);
    let [showAll, setShowAll] = useState(true);

    useEffect(() => {
        let setAllFil = filterCate.slice(0, 10);
        setAllFilter(setAllFil);
    }, [filterCate]);

    let handleShow = () => {
        setAllFilter(filterCate);
        setShowAll(false);
    };
    let handleLess = () => {
        let setAllFil = filterCate.slice(0, 10);
        setAllFilter(setAllFil);
        setShowAll(true);
    };

    let renderItem = (item) => (
        
        <div className="w-2/4 lg:w-1/3 relative group gap-3 lg:mb-0 mb-5 lg:px-3 px-1" key={item.id}>
            <div className="w-full">
                <Link to={`/shop/${item.id}`}>
                    <img src={item.thumbnail} alt="" className="w-full cursor-pointer" />
                </Link>
            </div>

            <div className="flex justify-between mt-5 z-10">
                <p className=" text-[#262626] text-[16px] font-dm font-bold 
  whitespace-nowrap overflow-hidden text-ellipsis 
  sm:whitespace-normal sm:overflow-visible sm:text-clip">{item.title}</p>
                <p className="text-[#767676] text-[16px] font-normal font-dm">${item.price}</p>
            </div>

            <div>
                <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
            </div>

            <div className="absolute top-2 left-2 lg:block hidden">
                <p className="text-white text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2e2e] cursor-pointer">
                    New
                </p>
            </div>
            <div className="absolute w-full left-0 bottom-[62px] hidden lg:block">
                <div className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out bg-white">
                    <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                        <div className="flex items-center justify-end mr-3">
                            <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">
                                Add to Wish List
                            </p>
                            <FaHeart />
                        </div>

                        <div className="flex items-center justify-end mr-3 mt-[16px]">
                            <FaCodeCompare />
                        </div>

                        <div className="flex items-center justify-end mr-3 mt-[16px]">
                            <Link
                                to={`/shop/${item.id}`}
                                className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer"
                            >
                                Add to Cart
                            </Link>
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {AllFilter.length > 0 ? (
                <div>
                    <div>
                        <div className={`${active ? "mt-6" : "flex flex-wrap justify-between mt-6 gap-y-10"}`}>
                            {AllFilter.map((item) => renderItem(item))}
                        </div>
                    </div>

                    <div className="py-5">
                        {showAll ? (
                            filterCate.length > 10 && (
                                <h2
                                    onClick={handleShow}
                                    className="cursor-pointer py-2 hover:text-green-950 hover:font-bold font-dm"
                                >
                                    Show All.....
                                </h2>
                            )
                        ) : (
                            <h2
                                onClick={handleLess}
                                className="cursor-pointer py-2 hover:text-green-950 hover:font-bold font-dm"
                            >
                                Less Show
                            </h2>
                        )}
                    </div>
                </div>
            ) : (
                <div className={`${active ? "mt-6" : "flex flex-wrap justify-between mt-6 gap-y-10"}`}>
                    {allPage.map((item) => renderItem(item))}
                </div>
            )}
        </>
    );
};

export default Post;
