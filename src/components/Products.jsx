import { FiPlus } from "react-icons/fi"


const Products = () => {
  return (
    <>
      <div className="lg:py-[100px]">
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="w-full">
            <div className="">
                <p className="text-[#262626] text-[49px] font-bold font-dm">Products</p>
                <p className="text-[#767676] text-[12px] font-dm font-normal">Home Products</p>
            </div>
          </div>
          <div className="flex mt-[90px]">
            <div className="w-3/12">
              <div className="">
                <p className="text-[#262626] text-[20px] font-dm font-bold">Shop by Category</p>
                <div className="mt-8">
                 <div className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-3 cursor-pointer">
                    <p className="text-[#767676] text-[16px] font-dm font-normal">Category 1</p>
                    <FiPlus />
                 </div>
                 <div className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer">
                    <p className="text-[#767676] text-[16px] font-dm font-normal">Category 2</p>
                    <FiPlus />
                 </div>
                 <div className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer">
                    <p className="text-[#767676] text-[16px] font-dm font-normal">Category 3</p>
                    <FiPlus />
                 </div>
                 <div className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer">
                    <p className="text-[#767676] text-[16px] font-dm font-normal">Category 4</p>
                    <FiPlus />
                 </div>
                 <div className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer">
                    <p className="text-[#767676] text-[16px] font-dm font-normal">Category 5</p>
                    <FiPlus />
                 </div>
                </div>
              </div>
            </div>
            <div className="w-9/12">2</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products