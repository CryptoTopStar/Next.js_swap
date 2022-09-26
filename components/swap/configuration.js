import Background from "./background"
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
                <div style={{ position: "absolute", top: "276px", marginLeft: "290px", width: "860px", background: "white", borderRadius: "10px" }}>
                    <div className="flex flex-row border-b-2">
                        <img src='/swap/arrowLeft.svg' style={{ width: "18.55px", marginLeft: "32.5px", marginTop: "46.3px", marginBottom: "30px" }} />
                        <div style={{ marginLeft: "59px", marginTop: "32px", marginBottom: "20px" }}>
                            <p className="font-bold text-b-body" style={{ fontSize: "20px", lineHeight: "15px", marginBottom: "12px" }}>Configuration</p>
                            <p className=" text-b-text" style={{ fontSize: "16px", lineHeight: "13px" }}>Pool Configuration</p>
                        </div>
                    </div>
                    <div style={{ padding: "32px 110px" }}>
                        <div className="addressBox">
                            <p className=" text-b-text" style={{ padding: " 29px 12px 29px 47px " }}>0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                            <img src="/swap/copy.svg" style={{ height: "24px" }} />
                            <img src='/swap/eva.svg' style={{ marginLeft: "12px", height: "24px" }} />
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "12px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />This is your Pair address</p>
                    </div>
                    <div style={{ marginTop: "42px", paddingLeft: "110px", paddingRight: "110px" }}>
                        <div className="flex flex-row justify-between" style={{ marginBottom: "13px" }}>
                            <p className="text-b-body" style={{ fontSzie: "18px", fontWeight: "600" }}>APV</p>
                            <p className="text-b-text" style={{ fontSize: "16px", color: "#494d66" }}>Balance:<span style={{ fontSize: "18px", fontWeight: "500" }}>&nbsp;0.0067</span></p>
                        </div>
                        <div style={{ padding: "32px 32px 12px 32px", borderRadius: "10px", border: "solid #494d66 1px" }}>
                            <div>
                                <div className="flex flex-row justify-between" style={{ marginBottom: "40px" }}>
                                    <p style={{ fontSize: "20px", color: "#9b9b9b" }}>0.00</p>
                                    <div className="flex flex-row text-black">
                                        <button className=" gradient_text" style={{ fontSize: "16px", marginRight: "12px" }}>Withdraw</button>|
                                        <button className="text-152dff" style={{ fontSize: "16px", marginLeft: "12px" }}>Deposit</button>
                                    </div>
                                </div>
                                <div className="grid h-32 gap-4 overflow-y-auto rounded-md desktop:grid-cols-10 bg-f8f8fa" style={{ padding: "17px 24px 17px 24px" }}>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>


                                </div>
                            </div>

                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Select NFT Ids you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "110px", paddingRight: "110px" }}>
                        <div className="flex flex-row" style={{ borderRadius: "10px", border: "solid #494d55 0.5px" }}>
                            <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                            <div className="flex flex-row p-4 text-black">
                                <button className=" text-152dff" style={{ fontSize: "16px", marginRight: "12px" }}>Withdraw</button>|
                                <button className="text-152dff" style={{ fontSize: "16px", marginLeft: "12px" }}>Deposit</button>
                            </div>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Ether amount you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "110px", paddingRight: "110px" }}>
                        <div className="flex flex-row" style={{ borderRadius: "10px", border: "solid #494d55 0.5px", background: "#f1f1f3" }}>
                            <input type="number" className="w-full p-4 bg-transparent rounded-md outline-none text-b-body" placeholder="10.00" />
                            <div className="flex flex-row p-4 text-black">
                                <button className=" text-9b9b9b" style={{ fontSize: "16px", marginRight: "12px" }}>Withdraw</button>|
                                <button className="text-9b9b9b" style={{ fontSize: "16px", marginLeft: "12px" }}>Deposit</button>
                            </div>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />ERC-20 amount you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "110px", paddingRight: "110px" }}>
                        <div className="flex flex-row" style={{ border: "solid #494d66 0.5px", borderRadius: "10px", padding: "21px 16px", }}>
                            <input type="number" className="w-full outline-none focus-within:rounded-md text-b-body" placeholder="10.00" />
                            <button className=" text-152dff">Update</button>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Update the price increase (delta) for this pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "110px", paddingRight: "110px" }}>
                        <div className="flex flex-row" style={{ border: "solid #494d66 0.5px", borderRadius: "10px", padding: "21px 16px", }}>
                            <input type="number" className="w-full outline-none focus-within:rounded-md text-b-body" placeholder="10.00" />
                            <button className=" text-152dff">Update</button>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Update fee for this pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", marginBottom: "80px", paddingLeft: "110px", paddingRight: "110px" }}>
                        <div className="flex flex-row" style={{ border: "solid #494d66 0.5px", borderRadius: "10px", padding: "21px 16px", }}>
                            <input type="number" className="w-full outline-none focus-within:rounded-md text-b-body" placeholder="0x000000000000000000000000..." />
                            <button className=" text-152dff">Update</button>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Update the address that receives assets from this pair</p>
                    </div>

                </div>
                </section>
            )
        }
        if (!desktop) {
            return (
                <section style={{ position: "absolute", top: "296px", marginLeft: "15px", width: "400px", background: "white", borderRadius: "10px" }}>
                    <div className="flex flex-row border-b-2">
                        <img src='/swap/arrowLeft.svg' style={{ width: "18.55px", marginLeft: "19px", marginTop: "46.3px", marginBottom: "30px" }} />
                        <div style={{ marginLeft: "19px", marginTop: "32px", marginBottom: "20px" }}>
                            <p className="font-bold text-b-body" style={{ fontSize: "20px", lineHeight: "15px", marginBottom: "12px" }}>Configuration</p>
                            <p className=" text-b-text" style={{ fontSize: "16px", lineHeight: "13px" }}>Pool Configuration</p>
                        </div>
                    </div>
                    <div style={{ padding: "24px 16px" }}>
                        <div className="addressBox">
                            <p className=" text-b-text" style={{ padding: " 18px 16px 18px 16px ", fontSize: "16px" }}>0dfgdcb6233787738adsd68329</p>
                            <img src="/swap/copy.svg" style={{ height: "24px" }} />
                            <img src='/swap/eva.svg' style={{ marginLeft: "12px", height: "24px" }} />
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "12px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />This is your Pair address</p>
                    </div>
                    <div style={{ marginTop: "42px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <div className="flex flex-row justify-between" style={{ marginBottom: "13px" }}>
                            <p className="text-b-body" style={{ fontSzie: "18px", fontWeight: "600" }}>APV</p>
                            <p className="text-b-text" style={{ fontSize: "16px", color: "#494d66" }}>Balance:<span style={{ fontSize: "18px", fontWeight: "500" }}>&nbsp;0.0067</span></p>
                        </div>
                        <div style={{ padding: "16px", borderRadius: "10px", border: "solid #494d66 1px" }}>
                            <div>
                                <div className="flex flex-row justify-between" style={{ marginBottom: "30px" }}>
                                    <p style={{ fontSize: "20px", color: "#9b9b9b" }}>0.00</p>
                                    <div className="flex flex-row text-black">
                                        <button className=" gradient_text" style={{ fontSize: "16px", marginRight: "12px" }}>Withdraw</button>|
                                        <button className="text-152dff" style={{ fontSize: "16px", marginLeft: "12px" }}>Deposit</button>
                                    </div>
                                </div>
                                <div className="grid h-32 grid-cols-6 gap-4 overflow-y-auto rounded-md bg-f8f8fa" style={{ padding: "17px 24px 17px 24px" }}>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>3</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>5</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>7</p></button>
                                    <button className=" nftButton"><p style={{ padding: "10px" }}>1</p></button>


                                </div>
                            </div>

                        </div>
                        <p className="flex flex-row" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Select NFT Ids you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <div className="flex flex-row" style={{ borderRadius: "10px", border: "solid #494d55 0.5px" }}>
                            <input type="number" className="w-full p-4 rounded-md outline-none text-b-body" placeholder="10.00" />
                            <div className="flex flex-row p-4 text-black">
                                <button className=" text-152dff" style={{ fontSize: "16px", marginRight: "12px" }}>Withdraw</button>|
                                <button className="text-152dff" style={{ fontSize: "16px", marginLeft: "12px" }}>Deposit</button>
                            </div>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Ether amount you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <div className="flex flex-row" style={{ borderRadius: "10px", border: "solid #494d55 0.5px", background: "#f1f1f3" }}>
                            <input type="number" className="w-full p-4 bg-transparent rounded-md outline-none text-b-body" placeholder="10.00" />
                            <div className="flex flex-row p-4 text-black">
                                <button className=" text-9b9b9b" style={{ fontSize: "16px", marginRight: "12px" }}>Withdraw</button>|
                                <button className="text-9b9b9b" style={{ fontSize: "16px", marginLeft: "12px" }}>Deposit</button>
                            </div>
                        </div>
                        <p className="flex flex-row" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />ERC-20 amount you'd like to deposit or withdraw, from the pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <div className="flex flex-row" style={{ border: "solid #494d66 0.5px", borderRadius: "10px", padding: "21px 16px", }}>
                            <input type="number" className="w-full outline-none focus-within:rounded-md text-b-body" placeholder="10.00" />
                            <button className=" text-152dff">Update</button>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Update the price increase (delta) for this pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <div className="flex flex-row" style={{ border: "solid #494d66 0.5px", borderRadius: "10px", padding: "21px 16px", }}>
                            <input type="number" className="w-full outline-none focus-within:rounded-md text-b-body" placeholder="10.00" />
                            <button className=" text-152dff">Update</button>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Update fee for this pair</p>
                    </div>
                    <div className="flex flex-col" style={{ marginTop: "40px", marginBottom: "40px", paddingLeft: "16px", paddingRight: "16px" }}>
                        <div className="flex flex-row" style={{ border: "solid #494d66 0.5px", borderRadius: "10px", padding: "21px 16px", }}>
                            <input type="number" className="w-full outline-none focus-within:rounded-md text-b-body" placeholder="0x000000000000000000000000..." />
                            <button className=" text-152dff">Update</button>
                        </div>
                        <p className="flex flex-row items-center" style={{ marginTop: "13px", fontSize: "16px", lineHeight: "13px", color: "#666980" }}><img src='/swap/alert.svg' style={{ height: "14px", marginRight: "5px" }} />Update the address that receives assets from this pair</p>
                    </div>

                </section>
            )
        }
    }
    return drawScreen()
}
export default Configuration