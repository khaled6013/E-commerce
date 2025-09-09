import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"
import { GoDotFill, GoPlus } from "react-icons/go"
import { FaPlus } from "react-icons/fa"
import { FiMinus } from "react-icons/fi"
import { Apidata } from "../components/ContextApi"


const ProductDetails = () => {
let productId = useParams()
let [singleProducts , setSingleproducts] = useState({})

let singleProduct = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((res)=>{
      setSingleproducts(res.data);
    })
}
useEffect(()=>{
   singleProduct()
},[])

let info = useContext(Apidata)
let [count , setCount] = useState(0);
let [ show ,setShow] = useState(false)
let [ showOne , setShowOne] = useState(false)

let increment =()=>{
  if(count < 10 ){
    setCount(count+1);
  }
}
let decrement =()=>{
  if( count > 0){
    setCount(count-1);
  }
}
let clientRating = Array.from({length:5},(_,index)=>{
  let number = index + 0.5
  return (
    singleProducts.rating > index + 1 ? (<MdOutlineStarPurple500 /> ): singleProducts.rating > number ? <MdOutlineStarHalf /> :(<MdOutlineStarOutline />) 
  );
})

let MainPrice = (singleProducts.price / 100) * singleProducts.discountPercentage;
let AccuratePrice = singleProducts.price - MainPrice





  return (
    <>
    <div className="py-[80px]">
      <div className="lg:w-10/12 mx-auto">
        <div className="w-[50%]">
          <div className="">
            <img src={singleProducts.thumbnail} alt="" />
            <p className="text-[#262626] text-[16px] font-dm font-normal py-10">{singleProducts.title}</p>
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <div className="flex gap-x-3 text-amber-300">
              {clientRating}
            </div>
            <div className="">
              <p className="text-[#262626] font-dm font-normal">Review</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-5 border-b-1 border-[#F0F0F0] pb-2">
            <del className="font-bold font-dm text-[#262626]">${singleProducts.price}</del>
            <p className="font-bold font-dm text-[#262626]">${AccuratePrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <div className="">
              <p className="font-dm font-bold text-[16px] text-[#262626]">COLOR:</p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="text-[#979797] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#FF8686] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#979797] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#979797] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#15CBA5] !w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <div className="font-bold font-dm text-[#262626]">
              <p>SIZE:</p>
            </div>
            <div className="">
              <select name="" id="" className="border-[#F0F0F0] border-1 px-5">
                <option value="">s</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className="flex items-center mt-5 gap-x-3 border-b-1 pb-5 border-[#F0F0F0]">
            <div className="">
              <p className="font-bold font-dm text-[#262626]">QUANTITY:</p>
            </div>
            <div className="flex items-center gap-x-3 border-1 border-[#F0F0F0] px-5 border-b-1 ">   
             <button onClick={increment} className="cursor-pointer"><GoPlus /></button>
             <p>{count}</p>
             <button onClick={decrement } className="cursor-pointer"><FiMinus /></button>
            </div>
          </div>
          <div className="flex items-center mt-5 gap-x-3 border-b-1 pb-5 border-[#F0F0F0]">
           <div className="">
            <p className="text-[#262626] font-bold font-dm text-[16px]">STATUS:</p>
           </div>
           <div className="">
            <p className="text-[#767676] font-dm font-normal text-[16px]">{singleProducts.availabilityStatus}</p>
           </div>
          </div>
          <div className="flex items-center mt-7 gap-x-3 border-b-1 pb-7 border-[#F0F0F0]">
            <div className="">
              <a className="text-[#262626] font-dm font-bold text-[16px] hover:text-[#FFFFFF] hover:bg-black border-1 border-black py-[16px] px-[40px] cursor-pointer">Add to Wish List</a>
            </div>
            <div className="">
              <a className="text-[#262626] font-dm font-bold text-[16px] hover:text-[#FFFFFF] hover:bg-black border-1 border-black py-[16px] px-[40px] cursor-pointer">Add to Cart</a>
            </div>
          </div>
          <div className=" mt-5  border-b-1 pb-5 border-[#F0F0F0]">
            <div className="items-center justify-between flex cursor-pointer" onClick={()=>setShow(!show)}>
              <p className="font-dm text-[#262626] text-[16px] font-bold">FEATURES  & DETAILS</p>
              { show ?  <FiMinus />:<GoPlus />  }
             
            </div>
            <div className={`pt-4 ${show == true? "block" : "hidden"}`}>
              <p className="font-dm text-[#767676] text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
           <div className=" mt-5  border-b-1 pb-5 border-[#F0F0F0]">
            <div className="items-center justify-between flex cursor-pointer" onClick={()=>setShowOne(!showOne)}>
              <p className="font-dm text-[#262626] text-[16px] font-bold">SHIPPING & RETURNS</p>
              {showOne ? <FiMinus /> : <GoPlus /> }
              
            </div>
            <div className={`pt-4 ${showOne == true ? "block":"hidden"}`}>
              <p className="font-dm text-[#767676] text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="mt-5">
              <div class="mb-4  ">
                  <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                      <li class="me-2" role="presentation">
                          <button class="inline-block p-4 font-bold text-[20px] font-dm " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Description</button>
                      </li>
                      <li class="me-2" role="presentation">
                          <button class="inline-block p-4 font-bold text-[20px] font-dm " id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Reviews</button>
                      </li>
                  </ul>
              </div>
              <div id="default-tab-content">
                  <div class="hidden p-4 rounded-lg " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus.</p>
                  </div>
                  <div class="hidden p-4 rounded-lg " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolor debitis suscipit temporibus tempora porro?</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default ProductDetails