
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <div className="py-8">
                <div className="lg:w-10/12 mx-auto w-11/12">
                    <div className="lg:flex items-center">
                        <div className="lg:w-2/6">
                            <img src={logo} alt="" />
                        </div>
                        <div className="lg:w-4/6">
                            <ul className='lg:flex lg:gap-x-10'>
                                <li>
                                    <a href="#" className='text-[#767676] text-[14px] font-dm font-normal hover:font-bold'>Home</a>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <a href="#" className='text-[#767676] text-[14px] font-dm font-normal hover:font-bold'>Shop</a>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <a href="#" className='text-[#767676] text-[14px] font-dm font-normal hover:font-bold'>About</a>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <a href="#" className='text-[#767676] text-[14px] font-dm font-normal hover:font-bold'>Contacts</a>
                                </li>
                                <li className='lg:pt-0 pt-1'>
                                    <a href="#" className='text-[#767676] text-[14px] font-dm font-normal hover:font-bold'>Journal</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar