import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoF from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] lg:py-[45px] py-[20px]">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        {/* Main Grid */}
        <div className="flex flex-wrap lg:gap-0 gap-6">
          {/* MENU */}
          <div className="lg:w-2/12 w-1/2">
            <h2 className="text-[#262626] text-[16px] font-dm font-bold">MENU</h2>
            <div className="mt-2 lg:mt-[18px] flex flex-col gap-2">
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Home</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Shop</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">About</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Contact</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Journal</p>
            </div>
          </div>

          {/* SHOP */}
          <div className="lg:w-2/12 w-1/2">
            <h2 className="text-[#262626] text-[16px] font-dm font-bold">SHOP</h2>
            <div className="mt-2 lg:mt-[18px] flex flex-col gap-2">
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Category 1</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Category 2</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Category 3</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Category 4</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Category 5</p>
            </div>
          </div>

          {/* HELP */}
          <div className="lg:w-2/12 w-1/2">
            <h2 className="text-[#262626] text-[16px] font-dm font-bold">HELP</h2>
            <div className="mt-2 lg:mt-[18px] flex flex-col gap-2">
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Privacy Policy</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Terms & Conditions</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Special E-shop</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Shipping</p>
              <p className="text-[#6D6D6D] text-[14px] font-dm font-normal">Secure Payments</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-3/12 w-1/2 lg:pt-0 pt-4">
            <p className="text-[#262626] lg:text-[16px] text-[14px] font-dm lg:font-bold"> (052) 611-5711 </p>
            <p className="text-[#262626] lg:text-[16px] text-[14px] font-dm lg:font-bold"> company@domain.com </p>
          </div>

          {/* Logo */}
          <div className="lg:w-3/12 lg:mt-0 mt-4 lg:pl-0 pl-10">
            <img src={logoF} alt="logo" className="w-[120px] sm:w-[150px] lg:w-auto" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center lg:mt-[40px] mt-5 gap-3 sm:gap-0">
          {/* Social Icons */}
          <div className="flex items-center gap-x-3 text-[#262626]">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
          </div>

          {/* Copy Text */}
          <p className='text-[#6D6D6D] lg:text-[14px] text-[12px] font-dm font-normal text-center sm:text-right'>
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
