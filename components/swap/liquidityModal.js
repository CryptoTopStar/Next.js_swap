const LiquidityModal = () => {
    return (
        <section className="flex flex-col justify-center m-auto mt-6 mb-6 bg-white rounded-md shadow-lg shadow-indigo-500/50 desktop:p-10 laptop:p-8 tablet:p-6 phone:p-4 phone:mb-12" style={{ width: "fit-content" }}>
            <div className="mb-4">
                <p className="mb-2 font-bold desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-base" style={{ color: "#2b2d3c" }}>Your Liquidity</p>
                <p className="mb-2 desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm" style={{ color: "#494d66" }}>Reamove liquidity to receive tokens back</p>
            </div>
            <button type='button' className='w-full mb-4 font-medium rounded-md desktop:p-4 laptop:p-3 tablet:p-2 phone:p-2 desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm' style={{ backgroundImage: "linear-gradient(to right, rgba(250, 2, 255, 0.05), rgba(38, 186, 227, 0.05))", color: "#9879f1" }}><center>Connect to a wallet to view your liquidity.</center></button>
            <button type='button' className='w-full p-2 font-medium text-white rounded-md desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm desktop:p-4 laptop:p-3 tablet:p-2 phone:p-2' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>CONNECT WALLET</button>
        </section>
    )
}

export default LiquidityModal