import { useEffect, useState } from "react"
const Configuration = () => {
    const [desktop, setDesktop] = useState(false)
    useEffect(() => {
        console.log("-----userEffect-----");
        function handleResize() {
            // console.log(screen.width)
            if (screen.width > 429) {
                setDesktop(true);
                // console.log(desktop)
            }
            if (screen.width < 429) {
                // console.log("ok")
                setDesktop(false);
                // console.log(desktop)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize();
        drawScreen()
    }, []);
    const drawScreen = () => {
        if (desktop) {
            return (
                <section style={{width:"1440px" , margin:"auto"}}>
                <div style={{ position: "absolute", top: "276px", marginLeft: "181px", width: "1080px", background: "white", borderRadius: "10px" }}>
                    <div className="flex flex-row" style={{ borderBottom: "solid #e4e4e5 0.5px" }}>
                        <img src='/swap/arrowLeft.svg' style={{ width: "18.55px", marginLeft: "32.5px", marginTop: "77.3px", marginBottom: "30px" }} />
                        <div style={{ marginLeft: "65px", marginTop: "62px", marginBottom: "20px" }}>
                            <p className="font-bold text-b-body" style={{ fontSize: "20px", lineHeight: "15px", marginBottom: "12px" }}>Your Liquidity</p>
                            <p className=" text-b-text" style={{ fontSize: "16px", lineHeight: "13px" }}>Receive LP tokens and earn 0.17% trading fees</p>
                        </div>
                    </div>
                    <p className="font-bold text-2e3041" style={{ marginTop: "32px", marginLeft: "110px" }}>CHOOSE A VALID PAIR</p>
                    <div className="flex flex-row">
                        <div className="flex flex-col" style={{ marginTop: "43px", marginLeft: "110px" }}>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <p className="font-medium text-b-body" style={{ fontSize: "18px", lineHeight: "13px" }}>BNB</p>
                                    <p className="text-b-text" style={{ marginLeft: "344px" }}>Balance:<span style={{ marginLeft: "12px", color: "#494d66", fontWeight: "500" }}>0.0067</span></p>
                                </div>
                                <div className="flex flex-row" style={{ marginTop: "12px", width: "530px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                                </div>
                            </div>
                            <div style={{ marginTop: "33px" }}>
                                <div className="flex flex-row items-center" >
                                    <p className="text-b-body " style={{ fontSize: "18px", lineHeight: "13px" }}>APV</p>
                                    <p className="text-b-text " style={{ marginLeft: "344px" }}>Balance:<span style={{ marginLeft: "12px", color: "#494d66", fontWeight: "500" }}>0.0067</span></p>
                                </div>
                                <div className="border-2" style={{ marginTop: "13px", border: "solid #494d66 2px", borderRadius: "10px", padding: "10px" }}>
                                    <div className="flex flex-row justify-between" style={{ marginTop: "16px" }}>
                                        <p style={{ fontSize: "24px", fontWeight: "500", color: "#494d66" }}>10.00</p>
                                    </div>
                                    <div className="grid grid-cols-10 gap-2 overflow-y-auto bg-f8f8fa h-28" style={{ marginTop: "40px", padding: "16px 44px 16px 21px" }}>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>

                                    </div>
                                </div>
                            </div>
                            <button type='button' className='w-auto font-medium text-white' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", borderRadius: "10px", marginTop: "72px", padding: "32px 117px", fontSize: "20p", lineHeight: "15px", marginBottom: "72px" }}>+ ADD LIQUIDITY</button>
                        </div>
                        <div className="flex flex-col " style={{ marginLeft: "20px", marginTop: "11px" }}>
                            <div className="" style={{ boxShadow: "0px 10px 12px rgba(47, 49, 66, 0.1)", padding: "24px 16px", width: "310px" }}>
                                <p className=" text-b-body" style={{ fontSize: "20px", fontWeight: "500" }}>STEP-2</p>
                                <p className=" text-b-text" style={{ marginTop: "16px", fontSize: "16px", lineHeight: "11px" }}>Pool Configuration</p>
                                <div style={{ marginTop: "32px", padding: "24px 16px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="text" placeholder="Spot prices" className="w-full outline-none text-b-body" style={{ fontSize: "16px", lineHeight: '12px' }} />
                                </div>
                                <div className="flex flex-row" style={{ marginTop: "16px", padding: "24px 16px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="text" placeholder="Prices Change" className="w-3/4 outline-none text-b-body" style={{ fontSize: "16px", lineHeight: '12px' }} />
                                    <div className="flex flex-row">
                                        <img src='/swap/bi_plus.svg' style={{ width: "24px", marginRight: "16px" }} />
                                        <img src='/swap/divide.svg' style={{ width: "24px", marginRight: "16px", border: "solid #494d66 2px" }} />
                                    </div>
                                </div>
                                <div className="flex flex-row" style={{ marginTop: "16px", padding: "24px 16px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="text" placeholder="Fee" className="w-full outline-none text-b-body" style={{ fontSize: "16px", lineHeight: '12px' }} />
                                </div>

                            </div>
                            <div className=" detailBox" style={{ marginTop: "20px", width: "310px" }}>
                                <div style={{ padding: "24px 20px 37px 15px" }}>
                                    <p className=" text-b-body" style={{ marginBottom: "16px", fontWeight: "500", fontSize: "20px" }}> Details</p>
                                    <p className=" text-b-text" style={{ fontSize: "16px", color: "#494d66", fontWeight: "400" }}> If a user buys 5 NFTs for a Spot Price of 0.05 the new Spot price will be 0.45 </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div >
                </section>
            )
        }
        if (!desktop) {
            return (
                <section style={{ position:"absolute" ,top: "290px", marginLeft: "15px", width: "400px", background: "white", borderRadius: "10px" }}>
                    <div className="flex flex-row border-b-2">
                        <img src='/swap/arrowLeft.svg' style={{ width: "18.55px", marginLeft: "19px", marginTop: "46.3px", marginBottom: "30px" }} />
                        <div style={{ marginLeft: "19px", marginTop: "32px", marginBottom: "20px" }}>
                            <p className="font-bold text-b-body" style={{ fontSize: "20px", lineHeight: "15px", marginBottom: "12px" }}>Configuration</p>
                            <p className=" text-b-text" style={{ fontSize: "16px", lineHeight: "13px" }}>Pool Configuration</p>
                        </div>
                    </div>
                    <p className="font-bold text-2e3041" style={{ marginTop: "24px", marginLeft: "16px" }}>CHOOSE A VALID PAIR</p>
                    <div className="flex flex-col">
                        <div className="flex flex-col" style={{ marginTop: "52px", marginLeft: "16px", marginRight: "16px" }}>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <p className="font-medium text-b-body" style={{ fontSize: "18px", lineHeight: "13px" }}>BNB</p>
                                    <p className="text-b-text" style={{ marginLeft: "178px" }}>Balance:<span style={{ marginLeft: "12px", color: "#494d66", fontWeight: "500" }}>0.0067</span></p>
                                </div>
                                <div className="flex flex-row" style={{ marginTop: "12px", width: "364px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                                </div>
                            </div>
                            <div style={{ marginTop: "33px" }}>
                                <div className="flex flex-row items-center" >
                                    <p className="text-b-body " style={{ fontSize: "18px", lineHeight: "13px" }}>APV</p>
                                    <p className="text-b-text " style={{ marginLeft: "178px" }}>Balance:<span style={{ marginLeft: "12px", color: "#494d66", fontWeight: "500" }}>0.0067</span></p>
                                </div>
                                <div className="border-2" style={{ marginTop: "13px", border: "solid #494d66 2px", borderRadius: "10px", padding: "10px" }}>
                                    <div className="flex flex-row justify-between" style={{ marginTop: "16px" }}>
                                        <p style={{ fontSize: "24px", fontWeight: "500", color: "#494d66" }}>10.00</p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 overflow-y-auto bg-f8f8fa h-28" style={{ marginTop: "40px", padding: "16px 24px 16px 24px" }}>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>
                                        <button className=" nftButton"><p style={{ padding: "10px", fontSize: "14px", lineheight: "17.07px", color: "#6d7399" }}>1</p></button>

                                    </div>
                                </div>
                            </div>
                            <button type='button' className='w-auto font-medium text-white' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", borderRadius: "10px", marginTop: "32px", padding: "23px 94px", fontSize: "20px", lineHeight: "15px", marginBottom: "40px" }}>+ ADD LIQUIDITY</button>
                        </div>
                        <div className="flex flex-col " style={{ marginLeft: "16px", margin: "16px" }}>
                            <div className="" style={{ padding: "0px", width: "370px" }}>
                                <p className=" text-b-body" style={{ fontSize: "20px", fontWeight: "500" }}>STEP-2</p>
                                <p className=" text-b-text" style={{ marginTop: "16px", fontSize: "16px", lineHeight: "11px" }}>Pool Configuration</p>
                                <div style={{ marginTop: "32px", padding: "24px 16px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="text" placeholder="Spot prices" className="w-full outline-none text-b-body" style={{ fontSize: "16px", lineHeight: '12px' }} />
                                </div>
                                <div className="flex flex-row" style={{ marginTop: "16px", padding: "24px 16px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="text" placeholder="Prices Change" className="w-3/4 outline-none text-b-body" style={{ fontSize: "16px", lineHeight: '12px' }} />
                                    <div className="flex flex-row">
                                        <img src='/swap/bi_plus.svg' style={{ width: "24px", marginRight: "16px" }} />
                                        <img src='/swap/divide.svg' style={{ width: "24px", marginRight: "16px", border: "solid #494d66 2px" }} />
                                    </div>
                                </div>
                                <div className="flex flex-row" style={{ marginTop: "16px", padding: "24px 16px", border: "solid #494d66 2px", borderRadius: "10px" }}>
                                    <input type="text" placeholder="Fee" className="w-full outline-none text-b-body" style={{ fontSize: "16px", lineHeight: '12px' }} />
                                </div>

                            </div>
                            <div className=" detailBox" style={{ marginTop: "20px", width: "370px" }}>
                                <div style={{ padding: "24px 20px 37px 15px" }}>
                                    <p className=" text-b-body" style={{ marginBottom: "16px", fontWeight: "500", fontSize: "20px" }}> Details</p>
                                    <p className=" text-b-text" style={{ fontSize: "16px", color: "#494d66", fontWeight: "400" }}> If a user buys 5 NFTs for a Spot Price of 0.05 the new Spot price will be 0.45 </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section >
            )

        }
    }
    return drawScreen()
}
export default Configuration