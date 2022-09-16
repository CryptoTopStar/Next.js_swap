const LiquidityModal = () => {
    return (
        <section className="flex flex-col justify-center m-auto mt-2 bg-white rounded-md shadow-lg lg:p-10 sm:p-2 shadow-indigo-500/50" style={{ width: "fit-content" }}>
            <div className="mb-4">
                <p className="font-bold lg:mb-2 sm:mb-1 lg:text-xl md:text-sm sm:text-sm" style={{ color: "#2b2d3c" }}>Your Liquidity</p>
                <p className="lg:text-base sm:mb-1 sm:text-xs" style={{ color: "#494d66" }}>Reamove liquidity to receive tokens back</p>
            </div>
            <button type='button' className='w-full mb-4 font-medium rounded-md lg:text-base lg:p-5 sm:p-2 sm:text-xs' style={{ backgroundImage: "linear-gradient(to right, rgba(250, 2, 255, 0.05), rgba(38, 186, 227, 0.05))", color: "#9879f1" }}><center>Connect to a wallet to view your liquidity.</center></button>
            <button type='button' className='w-full font-medium text-white rounded-md lg:text-base lg:p-5 sm:p-2 sm:text-xs' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>CONNECT WALLET</button>
        </section>
    )
}

export default LiquidityModal