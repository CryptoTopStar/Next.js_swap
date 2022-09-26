import { useEffect, useState } from "react";
const ChartContentPool = () => {
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
                <div className="w-full bg-b-body">
                <section style={{width:"1440px" , margin:"auto"}} className=" bg-b-body">
                <div className="flex flex-row bg-b-body" style={{ padding: "40px 70px" }}>
                    <div style={{ width: "310px" }}>
                        <p className="text-f1f1f3" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "18px" }}>Pool Type</p>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Token</p>
                            <img src='/charts/checkbox.svg' />
                        </div>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">NFT</p>
                            <img src='/charts/checkbox.svg' />
                        </div>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Trade</p>
                            <img src='/charts/checkbox.svg' />
                        </div>

                        <p className="text-f1f1f3" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "18px", marginTop: "40px" }}>Bonding Curve</p>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Linear</p>
                            <img src='/charts/checkbox.svg' />
                        </div>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Exponential</p>
                            <img src='/charts/checkbox.svg' />
                        </div>

                    </div>
                    <div className="" style={{ marginLeft: "20px", marginTop: "42px", width: "970px" }}>
                        <div className=" border-b-text" style={{ padding: "24px", borderRadius: "8px", border: "solid #42455c 2px", marginBottom: "24px" }}>
                            <div className="flex flex-row items-center border-b-text" style={{ padding: "29px 24px", border: "solid #42455c 2px", borderRadius: "10px" }}>
                                <p className=" text-f1f1f3" style={{ fontSize: "18px", fontWeight: "500" }}>0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                                <img src="/swap/copy.svg" className="" style={{ height: "24px", marginLeft: "12px" }} />
                                <img src='/swap/eva.svg' className="" style={{ height: "24px", marginLeft: "12px" }} />
                            </div>
                            <p className=" text-9296ae" style={{ marginTop: "12px", marginLeft: "12px" }}>Owner:&nbsp;0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                            <div className="flex flex-row w-full" style={{ marginTop: "12px" }}>
                                <div className=" border-b-text" style={{ width: "225px", padding: "12px 24px", background: "#42455c", borderRadius: "10px", marginRight: "24px" }}>
                                    <p className="text-a0a5bf" style={{ fontSize: "16px", lineHeight: "12px" }}>Balance</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>DDG: 000.033</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>ETH: 0.0005</p>
                                </div>
                                <div className="flex flex-row items-center justify-between w-full border-b-text" style={{ padding: "20px 24px", background: "#42455c", borderRadius: "10px" }}>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Current Price</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Bonding Curve</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>Linear</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>2.490 ETH</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Volume</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>1.189.28 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-b-text" style={{ padding: "24px", borderRadius: "8px", border: "solid #42455c 2px", marginBottom: "24px" }}>
                            <div className="flex flex-row items-center border-b-text" style={{ padding: "29px 24px", border: "solid #42455c 2px", borderRadius: "10px" }}>
                                <p className=" text-f1f1f3" style={{ fontSize: "18px", fontWeight: "500" }}>0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                                <img src="/swap/copy.svg" className="" style={{ height: "24px", marginLeft: "12px" }} />
                                <img src='/swap/eva.svg' className="" style={{ height: "24px", marginLeft: "12px" }} />
                            </div>
                            <p className=" text-9296ae" style={{ marginTop: "12px", marginLeft: "12px" }}>Owner:&nbsp;0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                            <div className="flex flex-row w-full" style={{ marginTop: "12px" }}>
                                <div className=" border-b-text" style={{ width: "225px", padding: "12px 24px", background: "#42455c", borderRadius: "10px", marginRight: "24px" }}>
                                    <p className="text-a0a5bf" style={{ fontSize: "16px", lineHeight: "12px" }}>Balance</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>DDG: 000.033</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>ETH: 0.0005</p>
                                </div>
                                <div className="flex flex-row items-center justify-between w-full border-b-text" style={{ padding: "20px 24px", background: "#42455c", borderRadius: "10px" }}>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Current Price</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Bonding Curve</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>Linear</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>2.490 ETH</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Volume</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>1.189.28 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-b-text" style={{ padding: "24px", borderRadius: "8px", border: "solid #42455c 2px", marginBottom: "24px" }}>
                            <div className="flex flex-row items-center border-b-text" style={{ padding: "29px 24px", border: "solid #42455c 2px", borderRadius: "10px" }}>
                                <p className=" text-f1f1f3" style={{ fontSize: "18px", fontWeight: "500" }}>0x2b2e8cda09bba9660dca5cb6233787738ad68329</p>
                                <img src="/swap/copy.svg" className="" style={{ height: "24px", marginLeft: "12px" }} />
                                <img src='/swap/eva.svg' className="" style={{ height: "24px", marginLeft: "12px" }} />
                            </div>
                            <p className=" text-9296ae" style={{ marginTop: "12px", marginLeft: "12px" }}>Owner:&nbsp;0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                            <div className="flex flex-row w-full" style={{ marginTop: "12px" }}>
                                <div className=" border-b-text" style={{ width: "225px", padding: "12px 24px", background: "#42455c", borderRadius: "10px", marginRight: "24px" }}>
                                    <p className="text-a0a5bf" style={{ fontSize: "16px", lineHeight: "12px" }}>Balance</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>DDG: 000.033</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>ETH: 0.0005</p>
                                </div>
                                <div className="flex flex-row items-center justify-between w-full border-b-text" style={{ padding: "20px 24px", background: "#42455c", borderRadius: "10px" }}>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Current Price</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Bonding Curve</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>Linear</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>2.490 ETH</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "16px", lineHeight: "12px" }}>Volume</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>1.189.28 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                </section>
                </div>
            )

        }
        if (!desktop) {
            return (
                <section className="flex flex-col bg-b-body" style={{ padding: "40px 16px" }}>
                    <div style={{ width: "398px" }}>
                        <p className="text-f1f1f3" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "18px" }}>Pool Type</p>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Token</p>
                            <img src='/charts/checkbox.svg' />
                        </div>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">NFT</p>
                            <img src='/charts/checkbox.svg' />
                        </div>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Trade</p>
                            <img src='/charts/checkbox.svg' />
                        </div>

                        <p className="text-f1f1f3" style={{ fontSize: "24px", fontWeight: "500", lineHeight: "18px", marginTop: "40px" }}>Bonding Curve</p>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Linear</p>
                            <img src='/charts/checkbox.svg' />
                        </div>
                        <div className="flex flex-row justify-between w-full bg-42455c" style={{ marginTop: "24px", padding: "22px 24px 22px 24px", borderRadius: "10px" }}>
                            <p className="text-f1f1f3 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Exponential</p>
                            <img src='/charts/checkbox.svg' />
                        </div>

                    </div>
                    <div className="" style={{ marginLeft: "0px", marginTop: "42px", width: "400px" }}>
                        <div className=" border-b-text" style={{ padding: "16px", borderRadius: "8px", border: "solid #42455c 2px", marginBottom: "24px" }}>
                            <div className="flex flex-row items-center border-b-text" style={{ padding: "29px 24px", border: "solid #42455c 2px", borderRadius: "10px" }}>
                                <p className=" text-f1f1f3" style={{ fontSize: "18px", fontWeight: "500" }}>0x2b2e8cdatyrtyrtyad68329</p>
                                <img src="/swap/copy.svg" className="" style={{ height: "24px", marginLeft: "12px" }} />
                                <img src='/swap/eva.svg' className="" style={{ height: "24px", marginLeft: "12px" }} />
                            </div>
                            <p className=" text-9296ae" style={{ marginTop: "0px", marginLeft: "0px", fontSize: "14px" }}>Owner:&nbsp;0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                            <div className="flex flex-row" style={{ marginTop: "12px" }} >
                                <div className=" border-b-text" style={{ width: "147px", padding: "12px 16px 12px 16px", background: "#42455c", borderRadius: "10px", marginRight: "5px", height: "83px" }}>
                                    <p className="text-a0a5bf" style={{ fontSize: "16px", lineHeight: "12px" }}>Balance</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>DDG: 000.033</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>ETH: 0.0005</p>
                                </div>
                                <div className="flex flex-col border-b-text" style={{ padding: "24px", background: "#42455c", borderRadius: "10px", width: "205px" }}>
                                    <div style={{ marginBottom: "24px" }}>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>Current Price</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div style={{ marginBottom: "24px" }}>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>Bonding Curve</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>Linear</p>
                                    </div>
                                    <div style={{ marginBottom: "24px" }}>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>2.490 ETH</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>Volume</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>1.189.28 ETH</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="" style={{ marginLeft: "0px", marginTop: "10px", width: "400px" }}>
                        <div className=" border-b-text" style={{ padding: "16px", borderRadius: "8px", border: "solid #42455c 2px", marginBottom: "24px" }}>
                            <div className="flex flex-row items-center border-b-text" style={{ padding: "29px 24px", border: "solid #42455c 2px", borderRadius: "10px" }}>
                                <p className=" text-f1f1f3" style={{ fontSize: "18px", fontWeight: "500" }}>0x2b2e8cdatyrtyrtyad68329</p>
                                <img src="/swap/copy.svg" className="" style={{ height: "24px", marginLeft: "12px" }} />
                                <img src='/swap/eva.svg' className="" style={{ height: "24px", marginLeft: "12px" }} />
                            </div>
                            <p className=" text-9296ae" style={{ marginTop: "0px", marginLeft: "0px", fontSize: "14px" }}>Owner:&nbsp;0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9</p>
                            <div className="flex flex-row" style={{ marginTop: "12px" }} >
                                <div className=" border-b-text" style={{ width: "147px", padding: "12px 16px 12px 16px", background: "#42455c", borderRadius: "10px", marginRight: "5px", height: "83px" }}>
                                    <p className="text-a0a5bf" style={{ fontSize: "16px", lineHeight: "12px" }}>Balance</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>DDG: 000.033</p>
                                    <p className="text-f1f1f3" style={{ fontSize: "16px", lineHeight: "12px", marginTop: "12px" }}>ETH: 0.0005</p>
                                </div>
                                <div className="flex flex-col border-b-text" style={{ padding: "24px", background: "#42455c", borderRadius: "10px", width: "205px" }}>
                                    <div style={{ marginBottom: "24px" }}>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>Current Price</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div style={{ marginBottom: "24px" }}>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>Bonding Curve</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>Linear</p>
                                    </div>
                                    <div style={{ marginBottom: "24px" }}>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>2.490 ETH</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>20.90 ETH</p>
                                    </div>
                                    <div>
                                        <p className=" text-a0a5bf" style={{ fontSize: "16px", fontWeight: "400", marginBottom: "12px", lineHeight: "12px" }}>Volume</p>
                                        <p className="text-f1f1f3" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "12px" }}>1.189.28 ETH</p>
                                    </div>
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
export default ChartContentPool