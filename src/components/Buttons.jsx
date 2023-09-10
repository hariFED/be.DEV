

const Buttons = () => {

    return (
        <>
            <div className="h-[20vh] flex sm:flex-row flex-col gap-5 justify-between items-center sm:mx-[20rem]">

                <button className=" text-[15px] sm:text-base h-[5rem]   w-[15rem]  bg-black text-[#FFD429] p-4 border-2 border-black rounded-full hover:bg-white hover:ease-in duration-200 hover:text-black">WANT TO KNOW MORE <br />ABOUT US ?</button>
                <button className=" text-[15px] sm:text-base h-[5rem]   w-[15rem]  bg-white text-black p-4 border-2  border-black rounded-full hover:bg-[#FFD429] hover:border-[#FFD429] hover:text-xl sm:hover:ease-out duration-200" >REGISTER NOW !</button>
                <button className=" text-[15px] sm:text-base h-[5rem]   w-[15rem]  bg-black text-[#FFD429] p-4 border-2 border-black rounded-full hover:bg-white hover:ease-in duration-200 hover:text-black">BLOGS/ACTIVITES</button>

            </div>
        </>
    )
}

export default Buttons;