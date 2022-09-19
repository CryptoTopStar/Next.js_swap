const Modal1 = () => {
    return (
        <section className="z-10 m-auto mt-6 mb-6 bg-white rounded desktop:w-2/4 laptop:w-6/12 tablet:w-7/12 phone:w-10/12 shadow-indigo-500/50 desktop:p-10 laptop:p-8 tablet:p-4 phone:p-4">
            <div className="mb-2">
                <p className="font-bold desktop:text-3xl laptop:text-2xl tablet:text-lg phone:text-md" style={{ color: "#2b2d3c" }}>EXCHANGE</p>
                <p className="desktop:text-2xl laptop:text-xl tablet:text-md phone:text-sm" style={{ color: "#494d66" }}>SWAP NFT FOR TOKENS</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 rounded-md desktop:p-4 laptop:p-2 tablet:p-2 phone:p-2" style={{ border: "solid #494d66 0.5px" }}>
                <input className="w-2/3 text-black bg-transparent focus:outline-none desktop:text-3xl laptop:text-xl tablet:text-base phone:text-md" type="text" placeholder="0.1" />
                <button className="flex flex-row items-center text-black rounded-md desktop:text-xl desktop:p-3 laptop:p-2 laptop:text-base tablet:text-base tablet:p-1 phone:p-1 " style={{ border: "solid #494d66 0.5px" }} onClick={() => setSelectTokenModal(!selectTokenModal)}>
                    <img className="mr-2 desktop:h-6 laptop:h-5 tablet:h-4 phone:h-3" src="/swap/swapEther.svg" />
                    Eth
                    <img className="mx-1 desktop:h-2 laptop:h-2 tablet:h-2 phone:h-1" src="/swap/vectorBlack.svg" /></button>
            </div>
            <p className="mb-2"><center><img className="desktop:h-2 laptop:h-2 tablet:h-2 phone:h-2" src="/swap/vectorBlack.svg" /></center></p>
            <div className="flex flex-col rounded-md lg:mb-6 sm:mb-2 lg:p-3 sm:p-1" style={{ border: "solid #494d66 0.5px" }}>
                <div className="flex flex-row items-center justify-between mb-2 desktop:p-3 laptop:p-2 laptop:text-base tablet:text-base tablet:p-1 phone:p-1">
                    <input className="w-2/3 text-black bg-transparent focus:outline-none desktop:text-3xl laptop:text-xl tablet:text-base phone:text-md" type="text" placeholder="10" />
                    <button className="flex flex-row items-center text-black rounded-md desktop:text-xl desktop:p-3 laptop:p-2 laptop:text-base tablet:text-base tablet:p-1 phone:p-1 " style={{ border: "solid #494d66 0.5px" }} onClick={() => setSelectTokenModal(!selectTokenModal)}>
                        <img className="mr-2 desktop:h-6 laptop:h-5 tablet:h-4 phone:h-3" src="/swap/swapEther.svg" />
                        Eth
                        <img className="mx-1 desktop:h-2 laptop:h-2 tablet:h-2 phone:h-1" src="/swap/vectorBlack.svg" /></button>
                </div>
                <div className="grid grid-cols-8 p-3 bg-gray-100 desktop:gap-4 laptop:gap-3 tablet:gap-2 phone:gap-1">
                    <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">1</div>
                    <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">2</div>
                    <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">3</div>
                    <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">4</div>
                    <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">5</div>
                    <div className="col-span-1 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">6</div>
                    <div className="col-span-2 text-center rounded-sm lg:py-2 individual_box lg:text-base md:text-base sm:text-xs md:py-1">More..</div>
                </div>
            </div>
            <button type='button' className='w-full font-medium text-white rounded-md desktop:p-6 desktop:text-3xl laptop:p-4 laptop:text-xl tablet:text-base tablet:p-3 phone:p-2 tablet:text-md' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>CONNECT WALLET</button>
        </section>
    )
}

export default Modal1