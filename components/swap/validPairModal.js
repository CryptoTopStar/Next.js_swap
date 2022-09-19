const ValidPairModal = () => {
    return (
        <section className="flex flex-col justify-center m-auto mt-6 mb-4 bg-white rounded-md shadow-lg shadow-indigo-500/50 desktop:w-6/12 laptop:w-6/12 tablet:w-7/12 phone:w-11/12">
            <div className="p-4 mb-4 border-b-2 desktop:px-8 laptop:px-6 tablet:px-4 phone:px-2">
                <p className="mb-2 font-bold text-b-body desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-base">Your Liquidity</p>
                <p className="text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">Receive LP tokens and earn 0.17% trading fees</p>
            </div>
            <p className="w-3/5 p-4 text-2e3041 desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-base desktop:px-8 laptop:px-6 tablet:px-4 phone:px-2">CHOOSE A VALID PAIR</p>
            <div className="flex p-4 desktop:justify-between laptop:justify-between tablet:justify-between desktop:flex-row laptop:flex-row tablet:flex-row phone:flex-col desktop:m-auto laptop:m-auto tablet:m-auto phone:m-2 phone:w-full desktop:w-3/5 laptop:w-3/5 tablet:w-3/5">
                <div className="phone:mb-2">
                    <div className="flex flex-row items-center justify-between p-2 mr-4 border-2 rounded-md phone:w-full">
                        <div className="flex flex-row mr-8 ">
                            <img src='/swap/cryptocurrency_bnb.svg' className="mr-2" />
                            <p className="text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">0.1</p>
                        </div>
                        <img src="/swap/caret.svg" />
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-center justify-between p-2 border-2 rounded-md">
                        <div className="flex flex-row mr-8">
                            <img src='/swap/cryptocurrency_bnb.svg' className="mr-2" />
                            <p className="text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">CAKE</p>
                        </div>
                        <img src="/swap/caret.svg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-6 m-auto mb-6 desktop:w-3/5 laptop:w-3/5 tablet:w-3/5 phone:w-full">
                <p className="w-1/2 mt-2 text-left desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-b-text">LP reward APR</p>
                <p className="w-1/2 mt-2 text-right desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-b-text">0.86%</p>
            </div>
            <button type='button' className='w-3/5 p-4 m-auto mt-2 font-medium text-white rounded-md desktop:text-xl laptop:text-lg tablet:text-base phone:text-md' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>+ ADD LIQUIDITY</button>
            <div className="p-4 mt-8 text-sm bg-gray-200 text-737373">
                By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
            </div>
        </section>
    )
}
export default ValidPairModal