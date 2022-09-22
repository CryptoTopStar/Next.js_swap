import Background from "./background"

const Configuration = () => {
    return (
        <section style={{ position: "absolute", top: "276px", marginLeft: "290px", width: "860px", background: "white", borderRadius: "10px" }}>
            <div className="flex flex-row border-b-2">
                <img src='/swap/arrowLeft.svg' style={{ width: "18.55px", marginLeft: "32.5px", marginTop: "46.3px", marginBottom: "30px" }} />
                <div style={{ marginLeft: "59px", marginTop: "32px", marginBottom: "20px" }}>
                    <p className="font-bold text-b-body" style={{ fontSize: "20px", lineHeight: "15px", marginBottom: "12px" }}>Configuration</p>
                    <p className=" text-b-text" style={{ fontSize: "16px", lineHeight: "13px" }}>Pool Configuration</p>
                </div>
            </div>
            <div style={{ padding: "" }}>
                <div className="addressBox">
                    <p className="px-4 py-8 pr-2 mr-2 desktop:text-xl laptop:text-lg tablet:text-sm phone:text-tiny text-b-text phone:px-2 phone:py-4">0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                    <img src="/swap/copy.svg" className="mr-2" />
                    <img src='/swap/eva.svg' className="mr-2" />
                </div>
                <p className="flex flex-row items-center mt-2 text-base phone:text-sm "><img src='/swap/alert.svg' className="mr-2" />This is your Pair address</p>
            </div>
            <div className="p-8 phone:p-4">
                <div className="flex flex-row justify-between mb-2">
                    <p className="text-b-body desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">APV</p>
                    <p className="text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Balance:<span>&nbsp;0.0067</span></p>
                </div>
                <div className="p-4 border-2 rounded-md">
                    <div>
                        <div className="flex flex-row justify-between mb-8">
                            <p className="desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">0.00</p>
                            <div className="flex flex-row text-black">
                                <button className="pr-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Withdraw</button>&nbsp;|
                                <button className="px-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Deposit</button>
                            </div>
                        </div>
                        <div className="grid p-5 overflow-y-auto rounded-md desktop:grid-cols-10 desktop:gap-4 flex-nowrap bg-f8f8fa h-28 phone:grid-cols-4 phone:gap-2 laptop:grid-cols-8 laptop:gap-2 tablet:grid-cols-6 tablet:gap-2">
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
                <p className="flex flex-row items-center mt-2 text-base phone:text-sm"><img src='/swap/alert.svg' className="mr-2" />Select NFT Ids you'd like to deposit or withdraw, from the pair</p>
            </div>
            <div className="flex flex-col p-8 phone:p-4">
                <div className="flex flex-row border-2 rounded-md">
                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                    <div className="flex flex-row p-4 text-black">
                        <button className="pr-2 gradient_text desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Withdraw</button>&nbsp;|
                        <button className="px-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Deposit</button>
                    </div>
                </div>
                <p className="flex flex-row items-center mt-2 text-base phone:shadow-md "><img src='/swap/alert.svg' className="mr-2" />Ether amount you'd like to deposit or withdraw, from the pair</p>
            </div>
            <div className="flex flex-col p-8 phone:p-4">
                <div className="flex flex-row border-2 rounded-md">
                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                    <div className="flex flex-row p-4 text-black">
                        <button className="pr-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Withdraw</button>&nbsp;|
                        <button className="px-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Deposit</button>
                    </div>
                </div>
                <p className="flex flex-row items-center mt-2 text-base phone:text-sm "><img src='/swap/alert.svg' className="mr-2" />ERC-20 amount you'd like to deposit or withdraw, from the pair</p>
            </div>
            <div className="flex flex-col p-8 phone:p-4">
                <div className="flex flex-row border-2 rounded-md">
                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                    <div className="flex flex-row p-4 text-black">
                        <button className="px-2 text-152dff">Update</button>
                    </div>
                </div>
                <p className="flex flex-row items-center mt-2 text-base phone:text-sm"><img src='/swap/alert.svg' className="mr-2" />Update the price increase (delta) for this pair</p>
            </div>
            <div className="flex flex-col p-8 phone:p-4">
                <div className="flex flex-row border-2 rounded-md">
                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                    <div className="flex flex-row p-4 text-black">
                        <button className="px-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Update</button>
                    </div>
                </div>
                <p className="flex flex-row items-center mt-2 text-base phone:text-sm"><img src='/swap/alert.svg' className="mr-2" />Update fee for this pair</p>
            </div>
            <div className="flex flex-col p-8 phone:p-4">
                <div className="flex flex-row border-2 rounded-md">
                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                    <div className="flex flex-row p-4 text-black">
                        <button className="px-2 text-152dff desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Update</button>
                    </div>
                </div>
                <p className="flex flex-row items-center mt-2 text-base phone:text-sm "><img src='/swap/alert.svg' className="mr-2" />Update the address that receives assets from this pair  </p>
            </div>

        </section>
    )
}
export default Configuration