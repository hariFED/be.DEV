import Banner from '../assets/banner1.webp'





const RegisterForm = () => {




    return (
        <>
            <div className="registration-form h-[100vh]  flex  justify-center items-center mb:m-[5rem]" id='registrationFrom'>
                <div className="md:w-1/2 flex justify-center items-center bg-[#FFD429] h-full">
                    <form className="w-full max-w-lg">
                        <div>
                            <h1 className="text-xl md:text-2xl uppercase font-black mb-8"> Fill the form for registration</h1>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Your Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="" />

                            </div>

                        </div>
                        <div className="flex  flex-wrap mb-6 ">
                            <div className="w-full  md:w-1/2 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Contact Number
                                </label>
                                <input type="number" className=" appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" maxLength="10" />
                            </div>
                            <div className="w-full sm:pl-3 md:w-1/2 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email Address
                                </label>
                                <input type="email" className=" contrast-more:placeholder-slate-500  appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                            </div>

                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    City
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>Select</option>
                                        <option>Theni</option>
                                        <option>Other than theni</option>

                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    What is your current Job?
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>Select</option>
                                        <option>School</option>
                                        <option>Collage</option>
                                        <option>Working</option>
                                        <option>Not Working</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-6 md:mb-0 flex items-center justify-center">
                                <button className="bg-black mt-6 w-full py-3 text-white border-[0.5px] border-black rounded hover:bg-white hover:text-black uppercase">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>


                <div className="md:w-1/2 md:flex md:flex-row  hidden md:items-center md:justify-center md:bg-black md:h-full overflow-hidden">
                    <img src={Banner} alt='banner' className=' object-contain w-[100%] ' />
                </div>

            </div>


        </>
    )
}

export default RegisterForm;