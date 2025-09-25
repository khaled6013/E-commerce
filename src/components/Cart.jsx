import { RxCross2 } from "react-icons/rx"
import { useState } from "react"
import { FiMinus } from "react-icons/fi"
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux"
import { cartRemove } from "./slice/ProductSlice"


const Cart = () => {
    let [ count , setCount] = useState(0);

  let increment =()=>{
    setCount(count+1)
   }
  let decrement =()=>{
    if( count > 0){
     setCount(count-1)
    }
   }
   
  let cartData = useSelector((state)=>state.product.cardItem)
  let dispatch = useDispatch()
  let hendleRemove =(item)=>{
    dispatch(cartRemove(item))
  }
  
  return (
    <>
     <div className="py-[80px]">
        <div className="w-10/12 mx-auto">
          <div className="w-full">
            <h1 className="text-[#262626] text-[49px] font-dm font-bold">Cart</h1>
            <span className="cursor-pointer font-dm text-[12px] text-[#6D6D60]">Home Cart </span>
          </div>
          <div className="w-full mt-[80px]">
            <div className="py-[30px] px-[20px] bg-[#F5F5F3]">
               <div className="flex justify-between">
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Product</h1>
                  </div>
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Price</h1>
                  </div>
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Quantity</h1>
                  </div>
                  <div className="w-1/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Total</h1>
                  </div>
               </div>
            </div>
            <div className="w-full px-[20px] py-[5px]  border-b-1 border-[#F0F0F0]">
              {cartData.length > 0? 
               cartData.map((item)=>(
                <div className="flex justify-between items-center">
                  <div className="w-3/10">
                    <div className="flex items-center gap-x-5">
                        <RxCross2 className="cursor-pointer" onClick={()=>hendleRemove(item)}/>
                        <img src={item.thumbnail} alt="" className="w-[100px]" />
                        <p className="text-[16px] font-dm text-[#262626] font-bold">{item.title}</p>
                    </div>
                  </div>
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">$44.00</h1>
                  </div>
                  <div className="w-3/10">
                  <div className="w-2/9">
                    <div className="flex items-center gap-x-4 border-1 border-[#F0F0F0] px-3">
                        <button className="cursor-pointer" onClick={decrement}><FiMinus /></button>
                         <p>{item.qun}</p>
                         <button className="cursor-pointer" onClick={increment}><GoPlus /></button>
                    </div>
                  </div>
                  </div>
                  <div className="w-1/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">$54.00</h1>
                  </div>
               </div>
               ))
              :
               <h2>no product</h2>
              }
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Cart