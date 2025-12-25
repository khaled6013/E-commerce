import { useContext, useEffect, useState } from "react"
import { AiOutlineBars } from "react-icons/ai"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { FiPlus } from "react-icons/fi"
import { IoAppsSharp } from "react-icons/io5"
import Post from "./Post"
import Pagination from "./Pagination"
import { Apidata } from "./ContextApi"

const Products = () => {
  let info = useContext(Apidata)
  let [show, SetShow] = useState(false)
  let [showOne, setShowTwo] = useState(false)
  let [perPage, setPerpage] = useState(10)
  let [currentPage, setCurrenPage] = useState(1)
  let [Category, setCategory] = useState([])
  let [filterCate, setFilterCate] = useState([])
  let [brand, setBrand] = useState([])
  let [active, setActive] = useState(false)
  let [price, setPrice] = useState(false)
  let [shop, setShop] = useState(false)
  let [low, setLow] = useState({})
  let [high, setHigh] = useState({})

  let [activeCategory, setActiveCategory] = useState("");
  let [activeBrand, setActiveBrand] = useState("");
  let [activePrice, setActivePrice] = useState(null);

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)
  let pageNumber = []
  for (let i = 1; i <= Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i)
  }

  let paginate = (index) => {
    setCurrenPage(index + 1)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrenPage((state) => state + 1)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  let prev = () => {
    if (currentPage > 1) {
      setCurrenPage((state) => state - 1)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  let handlePageNum = (e) => {
    setPerpage(e.target.value);
  }

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrand([...new Set(info.map((item) => item.brand))]);
  }, [info])

  let handleCategory = (cItem) => {
    let filterItem = info.filter((item) => item.category == cItem)
    setFilterCate(filterItem);
    setActiveCategory(cItem); 
    setActiveBrand("");      
    setActivePrice(null);    
    setCurrenPage(1);        
  }

  let handleAllPro = () => {
    setFilterCate("");
    setActiveCategory("");
    setActiveBrand("");
    setActivePrice(null);
    setCurrenPage(1);
  }

  let handleList = () => {
    setActive(!active);
  }

  let handleBrand = (bItem) => {
    let filterBrand = info.filter((item) => item.brand == bItem)
    setFilterCate(filterBrand)
    setActiveBrand(bItem); 
    setActiveCategory("");  
    setActivePrice(null);   
    setCurrenPage(1);
  }

  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let filterPrice = info.filter((item) => item.price >= value.low && item.price <= value.high)
    setFilterCate(filterPrice);
    setActivePrice(value);   
    setActiveCategory("");  
    setActiveBrand("");     
    setCurrenPage(1);
  }

  return (
    <>
      <div className="lg:py-[100px] py-[40px]">
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="w-full">
            <div className="">
              <p className="text-[#262626] lg:text-[49px] text-[30px] font-bold font-dm">Products</p>
              <p className="text-[#767676] text-[12px] font-dm font-normal">Home Products</p>
            </div>
          </div>
          <div className="lg:flex lg:mt-[90px] mt-[30px]">
            <div className="lg:w-3/12">
              <div className="">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShop(!shop)}>
                  <p className="text-[#262626] lg:text-[20px] font-dm font-bold">Shop by Category</p>
                  {shop ? <FaCaretUp /> : <FaCaretDown />}
                </div>
                {shop &&
                  <div className="lg:mt-8 mt-3">
                    <>
                      <div onClick={handleAllPro} className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-2 cursor-pointer">
                        <p className={`${activeCategory === "" ? "text-[#07e012] font-bold" : "text-[#767676]"} text-[16px] font-dm font-normal pt-2`}>All Product</p>
                        <FiPlus />
                      </div>
                      {Category.map((item) => (
                        <div key={item} onClick={() => handleCategory(item)} className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-2 cursor-pointer">
                          <p className={`${activeCategory === item ? "text-[#07e012] font-bold" : "text-[#767676]"} text-[16px] font-dm font-normal pt-2`}>{item}</p>
                          <FiPlus />
                        </div>
                      ))}
                    </>
                  </div>
                }

                {/* Shop by Brand */}
                <div className="lg:mt-10 mt-3">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowTwo(!showOne)}>
                    <h2 className="text-[#262626] lg:text-[20px] font-dm font-bold">Shop by Brand</h2>
                    {showOne ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                  <div className={`lg:mt-8 mt-3 ${showOne ? "block" : "hidden"}`}>
                    <div onClick={handleAllPro} className=" border-b-[1px] border-[#F0F0F0] pb-2 cursor-pointer">
                        <p className={`${activeBrand === "" ? "text-[#07e012] font-bold" : "text-[#767676]"} text-[16px] font-dm font-normal pt-2`}>All Brand</p>
                      </div>
                    {brand.map((item) => (
                      <div key={item} className="border-b-[1px] border-[#F0F0F0] pb-2 cursor-pointer" onClick={() => handleBrand(item)}>
                        <p className={`${activeBrand === item ? "text-[#07e012] font-bold" : "text-[#767676]"} text-[16px] font-dm font-normal pt-2`}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shop by Price */}
                <div className="lg:mt-10 mt-3 ">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setPrice(!price)} >
                    <h2 className="text-[#262626] lg:text-[20px] font-dm font-bold">Shop by Price</h2>
                    {price ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                  {price &&
                    <div className='lg:mt-8 mt-3'>
                      {[
                        { low: 0, high: 9.99, label: "$0.00 - $9.99" },
                        { low: 10, high: 19.99, label: "$10.00 - $19.99" },
                        { low: 20, high: 29.99, label: "$20.00 - $29.99" },
                        { low: 30, high: 39.99, label: "$30.00 - $39.99" },
                        { low: 40, high: 69.99, label: "$40.00 - $69.99" }
                      ].map((pRange) => (
                        <div key={pRange.label} className="border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer" onClick={() => handlePrice(pRange)}>
                          <p className={`${activePrice?.label === pRange.label ? "text-[#07e012] font-bold" : "text-[#767676]"} text-[16px] font-dm font-normal`}>
                            {pRange.label}
                          </p>
                        </div>
                      ))}
                    </div>}
                </div>
              </div>
            </div>

            {/* right part start */}
            <div className="lg:w-9/12 lg:ml-10">
              <div className="lg:flex items-center justify-between">
                <div className="lg:block hidden">
                  <div className="flex items-center">
                    <IoAppsSharp onClick={handleList} className={`${active == false ? "bg-[#262626] text-[#ffff]" : ""} cursor-pointer border-[1px] border-[#737373] !w-[30px] !h-[30px] p-1 text-[25px] ml-4`} />
                    <AiOutlineBars onClick={handleList} className={`${active == true ? "bg-[#262626] text-[#ffff]" : ""} cursor-pointer border-[1px] border-[#737373] !w-[30px] !h-[30px] p-1 text-[25px] ml-4`} />
                  </div>
                </div>
                <div className="lg:flex items-center">
                  <div className="lg:ml-8 flex lg:mt-0 mt-6 items-center gap-x-2">
                    <p className="text-[#767676] text-[16px] font-dm font-normal">Show:</p>
                    <select onChange={handlePageNum} className="border-[1px] border-[#F0F0F0] outline-0 px-1 w-[120px]">
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Post allPage={allPage} filterCate={filterCate} active={active}></Post>
              </div>
              <div className="lg:mt-7">
                <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage} filterCate={filterCate}></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products