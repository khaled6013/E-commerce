

const CheckOut = () => {
  return (
    <>
      <div className="lg:py-[100px] py-[50px]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="w-full">
            <h2 className="font-dm font-bold lg:text-[49px] text-[30px] text-[#262626]">Checkout</h2>
            <p className=" font-dm text-[#262626]">Home  Checkout</p>
            <p className="lg:pt-[60px] pt-[20px] font-dm text-[#262626]">Have a coupon? Click here to enter your code</p>
          </div>
          <div className="lg:w-8/12 lg:mt-[80px] mt-[30px]">
            <div className="">
              <h2 className="font-dm font-bold lg:text-[49px] text-[30px] text-[#262626]">Billing Details</h2>
            </div>
            <div className="">
              <div className=" p-6 bg-white shadow-md rounded-lg"> <form className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* First Name */} <div className="flex flex-col"> <label className="font-medium mb-1"> First Name <span className="text-red-500">*</span> </label> <input type="text" placeholder="First Name" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Last Name */} <div className="flex flex-col"> <label className="font-medium mb-1"> Last Name <span className="text-red-500">*</span> </label> <input type="text" placeholder="Last Name" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Country */} <div className="flex flex-col md:col-span-2"> <label className="font-medium mb-1"> Country <span className="text-red-500">*</span> </label> <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"> <option>Please select</option> <option>Bangladesh</option> <option>India</option> <option>USA</option> </select> </div> {/* Street Address */} <div className="flex flex-col md:col-span-2"> <label className="font-medium mb-1"> Street Address <span className="text-red-500">*</span> </label> <input type="text" placeholder="House number and street name" className="border rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> <input type="text" placeholder="Apartment, suite, unit etc. (optional)" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Town/City */} <div className="flex flex-col"> <label className="font-medium mb-1"> Town/City <span className="text-red-500">*</span> </label> <input type="text" placeholder="Town/City" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* County */} <div className="flex flex-col"> <label className="font-medium mb-1">County (optional)</label> <input type="text" placeholder="County" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Post Code */} <div className="flex flex-col"> <label className="font-medium mb-1"> Post Code <span className="text-red-500">*</span> </label> <input type="text" placeholder="Post Code" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Phone */} <div className="flex flex-col"> <label className="font-medium mb-1"> Phone <span className="text-red-500">*</span> </label> <input type="text" placeholder="Phone" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Email */} <div className="flex flex-col md:col-span-2"> <label className="font-medium mb-1"> Email Address <span className="text-red-500">*</span> </label> <input type="email" placeholder="Email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> {/* Submit Button */} <div className="md:col-span-2 mt-4"> <a className="w-full bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition" > Submit </a> </div> </form> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut