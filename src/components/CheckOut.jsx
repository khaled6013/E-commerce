import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { cartRemove } from './slice/ProductSlice'; 

const CheckOut = () => {
  let cartData = useSelector((state) => state.product.cardItem); 
  let dispatch = useDispatch(); 
  let navigate = useNavigate(); 

  let grandTotal = cartData.reduce((acc, item) => {
    let discountPrice = item.price - (item.price * item.discountPercentage) / 100; 
    return acc + discountPrice * item.qun; 
  }, 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    
    if (cartData.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your cart is empty! Please add some products first.',
        confirmButtonColor: '#262626'
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Order Placed!',
      text: 'Thank you for your order. We are processing it now.',
      confirmButtonColor: '#262626',
      timer: 3000 
    }).then(() => {
      cartData.forEach(item => dispatch(cartRemove(item)));
      navigate('/checkOut');
    });
  };

  return (
    <div className="lg:py-[100px] py-[50px]">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        <div className="w-full mb-10 lg:mb-[80px]">
          <h2 className="font-dm font-bold lg:text-[49px] text-[30px] text-[#262626]">Checkout</h2> 
          <p className="font-dm text-[#767676] text-[14px]">Home / Checkout</p> 
        </div>

        <form onSubmit={handleOrderSubmit} className="flex flex-col lg:flex-row lg:gap-x-10">
          <div className="lg:w-7/12">
            <h2 className="font-dm font-bold lg:text-[39px] text-[24px] text-[#262626] mb-8">Billing Details</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex flex-col md:col-span-1">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">First Name *</label>
                <input required type="text" placeholder="First Name" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>
              <div className="flex flex-col md:col-span-1">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Last Name *</label>
                <input required type="text" placeholder="Last Name" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Email Address *</label>
                <input required type="email" placeholder="Email" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-dm font-bold text-[#262626] text-[16px] mb-2">Street Address *</label>
                <input required type="text" placeholder="House number and street name" className="border-b border-[#F0F0F0] py-3 focus:outline-none focus:border-black font-dm" />
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 mt-12 lg:mt-0">
            <h2 className="font-dm font-bold lg:text-[39px] text-[24px] text-[#262626] mb-8">Your Order</h2> 
            <div className="border border-[#F0F0F0] p-6 lg:p-10">
              <div className="flex justify-between border-b border-[#F0F0F0] pb-4">
                <p className="font-dm font-bold text-[16px]">Product</p>
                <p className="font-dm font-bold text-[16px]">Total</p>
              </div>
              
              <div className="max-h-[200px] overflow-y-auto">
                {cartData.map((item) => (
                  <div key={item.id} className="flex justify-between border-b border-[#F0F0F0] py-4">
                    <p className="font-dm text-[#767676] text-[16px]">{item.title} x {item.qun}</p> 
                    <p className="font-dm text-[#262626] text-[16px]">
                      ${((item.price - (item.price * item.discountPercentage) / 100) * item.qun).toFixed(2)} 
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-b border-[#F0F0F0] py-4 mt-4">
                <p className="font-dm font-bold text-[#262626] text-[16px]">Total</p>
                <p className="font-dm font-bold text-[#262626] text-[16px]">${grandTotal.toFixed(2)}</p> 
              </div>

              <div className="mt-8">
                <button type="submit" className="w-full bg-[#262626] text-white py-4 font-dm font-bold hover:bg-black transition-all">
                  Proceed to Bank
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckOut