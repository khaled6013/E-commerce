import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoF from '../assets/logo.png'


const Footer = () => {
  return (
    <>
      <div className="py-[45px] bg-[#F5F5F3]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex">
                <div className="w-2/12">
                    <div className="">
                        <h2 className="text-[#262626] text-[16px] font-dm font-bold">MENU</h2>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[18px]">Home</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Shop</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">About</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Contact</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Journal</p>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="">
                        <h2 className="text-[#262626] text-[16px] font-dm font-bold">SHOP</h2>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[18px]">Category 1</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Category 2</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Category 3</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Category 4</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Category 5</p>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="">
                        <h2 className="text-[#262626] text-[16px] font-dm font-bold">HELP</h2>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[18px]">Privacy Policy</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Terms & Conditions</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Special E-shop</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Shipping</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal pt-[10px]">Secure Payments</p>
                    </div>
                </div>
                <div className="w-3/12">
                     <div className="">
                        <p className="text-[#262626] text-[16px] font-dm font-bold">(052) 611-5711</p>
                        <p className="text-[#262626] text-[16px] font-dm font-bold">company@domain.com</p>
                     </div>
                </div>
                <div className="w-3/12">
                  <div className="">
                    <img src={logoF} alt="" />
                  </div>
                </div>
          </div>
          <div className="flex justify-between lg:mt-[40px]">
            <div className="flex items-center gap-x-3">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
            <div className="">
                <p className='text-[#6D6D6D] text-[14px] font-dm font-normal'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer