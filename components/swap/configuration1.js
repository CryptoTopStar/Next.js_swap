const Configuration = () => {
    return (
        <section className="flex flex-col justify-center m-auto mt-6 mb-6 bg-white rounded-md shadow-lg desktop:w-8/12 laptop:w-9/12 tablet:w-10/12 phone:w-11/12 shadow-indigo-500/50">
            <div className="flex flex-row items-stretch border-b-2">
                <img src='/swap/arrowLeft.svg' className="mx-4 mr-6" />
                <div className="p-2 mb-2">
                    <p className="font-bold text-b-body desktop:text-2xl laptop:text-lg tablet:text-base phone:text-md">Your Liquidity</p>
                    <p className=" text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">Receive LP tokens and earn 0.17% trading fees</p>
                </div>
            </div>
            <p className="px-16 py-8 font-bold text-2e3041 desktop:text-2xl laptop:text-lg tablet:text-base phone:text-sm">CHOOSE A VALID PAIR</p>
            <div className="flex px-10 mb-8 phone:flex-col desktop:flex-row laptop:flex-row tablet:flex-row">
                <div className="flex flex-col desktop:w-7/12 laptop:w-7/12 tablet:w-7/12 phone:w-full">
                    <div className="flex flex-col p-4">
                        <div className="flex flex-row justify-between mb-2">
                            <p className="text-b-body desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">BNB</p>
                            <p className="text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">Balance:<span>&nbsp;0.0067</span></p>
                        </div>
                        <div className="flex flex-row border-2 rounded-md">
                            <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-row justify-between mb-2">
                            <p className="text-b-body desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">APV</p>
                            <p className="text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">Balance:<span>&nbsp;0.0067</span></p>
                        </div>
                        <div className="p-4 border-2 rounded-md">
                            <div>
                                <div className="flex flex-row justify-between mb-8">
                                    <p>0.00</p>
                                </div>
                                <div className="grid gap-3 p-5 overflow-y-auto rounded-md desktop:grid-cols-8 laptop:grid-cols-6 tablet:grid-cols-4 phone:grid-cols-3 flex-nowrap bg-f8f8fa h-28">
                                    <button className="text-2xl nftButton">1</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                    <button className="text-2xl nftButton">7</button>
                                    <button className="text-2xl nftButton">1</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                    <button className="text-2xl nftButton">1</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                    <button className="text-2xl nftButton">7</button>
                                    <button className="text-2xl nftButton">1</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                    <button className="text-2xl nftButton">1</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                    <button className="text-2xl nftButton">3</button>
                                    <button className="text-2xl nftButton">5</button>
                                </div>
                            </div>
                        </div>
                        <p className="flex flex-row items-center mt-2 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm"><img src='/swap/alert.svg' className="mr-2" />Select NFT Ids you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <button type='button' className='w-auto p-3 mx-8 mt-2 font-medium text-white rounded-md desktop:text-lg laptop:text-base tablet:text-md phone:text-sm' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>+ ADD LIQUIDITY</button>
                </div>
                <div className="flex flex-col mx-2 desktop:w-4/12 laptop:w-4/12 tablet:w-4/12 phone:w-full">
                    <div className="p-8" style={{ boxShadow: "0px 10px 12px rgba(47, 49, 66, 0.1)" }}>
                        <p className=" text-b-body desktop:text-2xl laptop:text-lg tablet:text-base phone:text-sm">STEP-2</p>
                        <p className="mt-1 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-b-text">Pool Configuration</p>
                        <div className="p-4 mt-2 border-2 rounded-md">
                            <input type="text" placeholder="spot prices" className="w-full outline-none text-b-body" />
                        </div>
                        <div className="flex flex-row justify-between p-4 mt-2 border-2 rounded-md">
                            <input type="text" placeholder="Prices Change" className="w-2/3 mr-2 outline-none text-b-body" />
                            <div className="flex flex-row">
                                <img src='/swap/bi_plus.svg' className="mr-2" />
                                <img src='/swap/divide.svg' />
                            </div>
                        </div>
                        <div className="p-4 mt-2 border-2 rounded-md">
                            <input type="text" placeholder="Fee" className="w-full outline-none text-b-body" />
                        </div>

                    </div>
                    <div className="mt-6 detailBox">
                        <p className="p-4 mr-2 desktop:text-2xl laptop:text-lg tablet:text-base phone:text-sm text-b-body"> Details</p>
                        <p className="p-4 mr-2 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-b-text"> If a user buys 5 NFTs for a Spot Price of 0.05 the new Spot price will be 0.45 </p>
                    </div>

                </div>
            </div>
        </section >
    )
}
export default Configuration