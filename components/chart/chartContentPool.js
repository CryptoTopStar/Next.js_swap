const ChartContentPool = () => {
    return (
        <section className="flex flex-wrap px-8 py-10 desktop:flex-row laptop:flex-row tablet:flex-row phone:flex-col bg-b-body">
            <div className="mr-10 desktop:w-3/12 tablet:w-3/12 laptop:w-3/12 phone:w-full">
                <p className="mb-6 text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Pool Type</p>
                <div className="flex flex-row justify-between w-full p-4 mb-6 rounded-lg bg-42455c">
                    <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Token</p>
                    <img src='/charts/checkbox.svg' />
                </div>
                <div className="flex flex-row justify-between w-full p-4 mb-6 rounded-lg bg-42455c">
                    <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">NFT</p>
                    <img src='/charts/checked_not.svg' />
                </div>
                <div className="flex flex-row justify-between w-full p-4 mb-6 rounded-lg bg-42455c">
                    <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Trade</p>
                    <img src='/charts/checked_not.svg' />
                </div>
                <p className="mb-6 text-2xl text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md" >Bonding Curve</p>
                <div className="flex flex-row justify-between w-full p-4 mb-6 rounded-lg bg-42455c">
                    <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Leniar</p>
                    <img src='/charts/checkbox.svg' />
                </div>
                <div className="flex flex-row justify-between w-full p-4 mb-6 rounded-lg bg-42455c">
                    <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Exponential</p>
                    <img src='/charts/checked_not.svg' />
                </div>
            </div>
            <div className="py-12 desktop:w-8/12 tablet:w-8/12 laptop:w-8/12 phone:w-full">
                <div className="flex flex-col p-6 mb-2 border-2 rounded-lg border-b-text">
                    <div className="flex flex-row items-center justify-center w-full border-2 rounded-lg border-b-text">
                        <p className="py-8 mr-1 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny text-f1f1f3">0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                        <img src="/swap/copy.svg" className="mr-1 desktop:h-8 laptop:h-6 tablet:h-4 phone:h-2" />
                        <img src='/swap/eva.svg' className="desktop:h-10 laptop:h-8 tablet:h-6 phone:h-2" />
                    </div>
                    <p className="px-4 mt-2 text-9296ae desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Owner:0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                    <div className="flex flex-row w-full mt-4 ">
                        <div className="flex flex-col w-2/12 h-auto p-1 mr-2 border-2 rounded-md border-b-text">
                            <p className="text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Balance</p>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">DDG: 000.033</p>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">ETH: 0.0005</p>
                        </div>
                        <div className="flex flex-row items-center justify-between w-10/12 h-auto p-2 border-2 rounded-md border-b-text ">
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Current Price</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">20.90 ETH</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Bording Curve</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Linear</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Delta</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">2.490 ETH</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Volume</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">1.189.28 ETH</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-6 mb-2 border-2 rounded-lg border-b-text">
                    <div className="flex flex-row items-center justify-center w-full border-2 rounded-lg border-b-text">
                        <p className="py-8 mr-1 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny text-f1f1f3">0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                        <img src="/swap/copy.svg" className="mr-1 desktop:h-8 laptop:h-6 tablet:h-4 phone:h-2" />
                        <img src='/swap/eva.svg' className="desktop:h-8 laptop:h-6 tablet:h-4 phone:h-2" />
                    </div>
                    <p className="px-4 mt-2 text-9296ae desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Owner:0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                    <div className="flex flex-row w-full mt-4">
                        <div className="flex flex-col w-2/12 p-1 mr-2 border-2 rounded-md border-b-text">
                            <p className="text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Balance</p>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">DDG: 000.033</p>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">ETH: 0.0005</p>
                        </div>
                        <div className="flex flex-row items-center justify-between w-10/12 p-2 border-2 rounded-md border-b-text">
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Current Price</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">20.90 ETH</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Bording Curve</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Linear</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Delta</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">2.490 ETH</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Volume</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">1.189.28 ETH</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-6 mb-2 border-2 rounded-lg border-b-text">
                    <div className="flex flex-row items-center justify-center w-full border-2 rounded-lg border-b-text">
                        <p className="py-8 mr-1 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny text-f1f1f3">0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                        <img src="/swap/copy.svg" className="mr-1 desktop:h-8 laptop:h-6 tablet:h-4 phone:h-2" />
                        <img src='/swap/eva.svg' className="desktop:h-10 laptop:h-8 tablet:h-6 phone:h-2" />
                    </div>
                    <p className="px-4 mt-2 text-9296ae desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Owner:0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                    <div className="flex flex-row w-full mt-4">
                        <div className="flex flex-col w-2/12 p-1 mr-2 border-2 rounded-md border-b-text">
                            <p className="text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Balance</p>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">DDG: 000.033</p>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">ETH: 0.0005</p>
                        </div>
                        <div className="flex flex-row items-center justify-between w-10/12 p-2 border-2 rounded-md border-b-text">
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Current Price</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">20.90 ETH</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Bording Curve</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Linear</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Delta</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">2.490 ETH</p>
                            </div>
                            <div>
                                <p className="mb-2 text-a0a5bf desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">Volume</p>
                                <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-md phone:text-tiny">1.189.28 ETH</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section >
    )

}
export default ChartContentPool