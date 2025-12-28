import React from 'react'

const CheckOut = () => {
  return (
    <div className="lg:py-[100px] py-[50px]">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        {/* Page Title & Breadcrumb */}
        <div className="w-full mb-10 lg:mb-[80px]">
          <h2 className="font-dm font-bold lg:text-[49px] text-[30px] text-[#262626]">Checkout</h2>
          <p className="font-dm text-[#767676] text-[14px]">Home / Checkout</p>
          <p className="lg:pt-[60px] pt-[20px] font-dm text-[#262626] text-[16px]">
            Have a coupon? <span className="cursor-pointer hover:font-bold">Click here to enter your code</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          {/* Billing Details Section */}
          <div className="lg:w-7/12">
            <h2 className="font-dm font-bold lg:text-[39px] text-[24px] text-[#262626] mb-8">Billing Details</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* First Name */}
              <div className="flex flex-col md:col-span-1">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">First Name *</label>
                <input type="text" placeholder="First Name" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>

              {/* Last Name */}
              <div className="flex flex-col md:col-span-1">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Last Name *</label>
                <input type="text" placeholder="Last Name" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>

              {/* Country */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Country *</label>
                <select className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm bg-transparent">
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>

              {/* Street Address */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Street Address *</label>
                <input type="text" placeholder="House number and street name" className="border-b border-[#F0F0F0] py-3 mb-2 focus:outline-none focus:border-black font-dm" />
                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>

              {/* Town/City */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Town/City *</label>
                <input type="text" placeholder="Town/City" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>

              {/* Post Code */}
              <div className="flex flex-col md:col-span-2">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Post Code *</label>
                <input type="text" placeholder="Post Code" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>

              {/* Phone & Email */}
              <div className="flex flex-col md:col-span-1">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Phone *</label>
                <input type="text" placeholder="Phone" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>
              <div className="flex flex-col md:col-span-1">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Email Address *</label>
                <input type="email" placeholder="Email" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>
            </form>
          </div>

          {/* Your Order Section */}
          <div className="lg:w-5/12 mt-12 lg:mt-0">
            <h2 className="font-dm font-bold lg:text-[39px] text-[24px] text-[#262626] mb-8">Your Order</h2>
            <div className="border border-[#F0F0F0] p-6 lg:p-10">
              <div className="flex justify-between border-b border-[#F0F0F0] pb-4">
                <p className="font-dm font-bold text-[16px]">Product</p>
                <p className="font-dm font-bold text-[16px]">Total</p>
              </div>
              
              {/* Dummy Order Items */}
              <div className="flex justify-between border-b border-[#F0F0F0] py-4">
                <p className="font-dm text-[#767676] text-[16px]">Product Name x 1</p>
                <p className="font-dm text-[#262626] text-[16px]">$389.00</p>
              </div>

              <div className="flex justify-between border-b border-[#F0F0F0] py-4">
                <p className="font-dm font-bold text-[#262626] text-[16px]">Subtotal</p>
                <p className="font-dm text-[#262626] text-[16px]">$389.00</p>
              </div>
              
              <div className="flex justify-between border-b border-[#F0F0F0] py-4">
                <p className="font-dm font-bold text-[#262626] text-[16px]">Total</p>
                <p className="font-dm font-bold text-[#262626] text-[16px]">$389.00</p>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <input type="radio" name="payment" id="bank" className="accent-black" defaultChecked />
                  <label htmlFor="bank" className="font-dm font-bold text-[#262626] text-[14px]">Direct Bank Transfer</label>
                </div>
                <p className="text-[12px] text-[#767676] font-dm mb-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                </p>
                
                <div className="flex items-center gap-2 mb-6">
                  <input type="radio" name="payment" id="cod" className="accent-black" />
                  <label htmlFor="cod" className="font-dm font-bold text-[#262626] text-[14px]">Cash on Delivery</label>
                </div>

                <button className="w-full bg-[#262626] text-white py-4 font-dm font-bold hover:bg-black transition-all">
                  Proceed to Bank
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut