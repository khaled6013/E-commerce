import ariImg from '../assets/ari1.png'
import ariImgTwo from '../assets/ari2.png'

const About = () => {
    return (
        <>
            <section className='lg:py-[100px] py-10'>
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="">
                        <h2 className='text-[#262626] lg:text-[49px] text-7 font-bold font-dm'>About</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:mt-[100px] mt-[40px] gap-6 lg:gap-0">
                        {/* Left image section */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mr-12 relative">
                            <img src={ariImg} alt="ariImg" className="w-[90%] sm:w-[80%] lg:w-auto" />
                            <a className="py-[12px] px-[30px] sm:py-[15px] sm:px-[40px] lg:py-[18px] lg:px-[60px] bg-black text-white absolute bottom-[10px] right-[20px] sm:right-[30px] cursor-pointer hover:bg-[#252323] text-sm sm:text-base">
                                Our Brands
                            </a>
                        </div>

                        {/* Right image section */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
                            <img src={ariImgTwo} alt="ariImgTwo" className="w-[90%] sm:w-[80%] lg:w-auto" />
                            <a className="py-[12px] px-[30px] sm:py-[15px] sm:px-[40px] lg:py-[18px] lg:px-[60px] bg-black text-white absolute bottom-[10px] left-[20px] sm:left-[60px] cursor-pointer hover:bg-[#252323] text-sm sm:text-base">
                                Our Brands
                            </a>
                        </div>
                    </div>
                    <div className="lg:mt-[70px] mt-10">
                        <p className='text-[#262626] text-[39px] font-dm'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                    </div>
                    <div className="lg:flex items-center gap-x-10 lg:mt-[70px] mt-10">
                        <div className="lg:w-1/3">
                            <h3 className='font-bold font-dm text-[25px] text-[#262626]'>Our Vision</h3>
                            <p className='font-normal font-dm text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="lg:w-1/3">
                            <h3 className='font-bold font-dm text-[25px] text-[#262626]'>Our Story</h3>
                            <p className='font-normal font-dm text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="lg:w-1/3">
                            <h3 className='font-bold font-dm text-[25px] text-[#262626]'>Our Brands</h3>
                            <p className='font-normal font-dm text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About