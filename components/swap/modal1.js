const Modal1 = () => {
    return (
    <section className="fixed z-10 w-1/3 bg-white rounded-md shadow-lg lg:p-10 sm:p-2 top-1/4 left-1/3 shadow-indigo-500/50">
        <div className="mb-2">
            <p className="font-bold lg:mb-2 sm:mb-1 lg:text-xl md:text-sm sm:text-sm" style={{ color: "#2b2d3c" }}>EXCHANGE</p>
            <p className="lg:text-base sm:mb-1 sm:text-xs" style={{ color: "#494d66" }}>SWAP NFT FOR TOKENS</p>
        </div>
        <div className="flex flex-row items-center justify-between mb-2 rounded-md lg:p-2 sm:p-1" style={{ border: "solid #494d66 0.5px"}}>
            <input className="w-2/3 p-2 text-black bg-transparent focus:outline-none lg:text-lg sm:text-xs" type="text" placeholder="0.1"/>
            <button className="flex flex-row items-center text-black bg-gray-100 rounded-md lg:text-base lg:p-3 sm:p-1 sm:text-xs" >
                <img className="lg:h-4 sm:h-3 lg:mr-1 sm:mr-1" src="/swap/swapEther.svg"/>
                Eth
                <img className="lg:h-2 sm:h-1 lg:mx-2 sm:mx-1" src="/swap/vectorBlack.svg"/></button>
        </div>
        <p className="mb-2"><center><img className="lg:h-2 md:h-1" src="/swap/vectorBlack.svg"/></center></p> 
        <div className="flex flex-col rounded-md lg:mb-6 sm:mb-2 lg:p-3 sm:p-1" style={{ border: "solid #494d66 0.5px"}}>
            <div className="flex flex-row items-center justify-between mb-2">
                <input className="w-2/3 text-black bg-transparent focus:outline-none lg:text-lg sm:text-xs " type="text" placeholder="10"/>
                <button className="flex flex-row items-center text-black bg-gray-100 rounded-md lg:text-base lg:p-3 sm:p-1 sm:text-xs" >
                    <img className="lg:h-4 sm:h-3 lg:mr-1 sm:mr-1" src="/swap/swapEther.svg"/>
                    Eth
                    <img className="lg:h-2 sm:h-1 lg:mx-2 sm:mx-1" src="/swap/vectorBlack.svg"/>
                </button>
            </div>
            <div className="grid grid-cols-8 p-3 bg-gray-100 lg:gap-3 md:gap-2 sm:gap-1">
                <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">1</div>
                <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">2</div>
                <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">3</div>
                <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">4</div>
                <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">5</div>
                <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">6</div>
                <div className="col-span-2 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">More..</div>
            </div>
        </div>
        <button type='button' className='w-full font-medium text-white rounded-md lg:text-base lg:p-5 sm:p-2 sm:text-xs' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)"}}>CONNECT WALLET</button>
    </section>
    )
  }
  
  export default Modal1