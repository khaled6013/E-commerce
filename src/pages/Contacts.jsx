

const Contacts = () => {
    return (
        <>
            <section className="lg:py-[100px]">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="">
                        <h2 className='text-[#262626] lg:text-[49px] text-7 font-bold font-dm'>Contacts</h2>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-10 font-dm mt-10">Fill up a Form</h2>
                        <form className="space-y-8">
                            {/* Name */}
                            <div>
                                <label className="block text-[16px] font-dm font-medium text-gray-800 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name here"
                                    className="w-full border-b border-gray-200 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[16px] font-medium text-gray-800 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email here"
                                    className="w-full border-b border-gray-200 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[16px] font-medium text-gray-800 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Your message here"
                                    className="w-full border-b border-gray-200 focus:border-black outline-none py-2 text-gray-700 placeholder-gray-400 resize-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="bg-black text-white py-[10px] px-[50px] hover:bg-[#252323] transition-all duration-300"
                                >
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Contacts