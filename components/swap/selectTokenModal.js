import SwapListItem from "./swapListItem";
import { useEffect, useState } from "react";
const SelectTokenModal = (props) => {
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
    }, []);
    const drawScreen = () => {
        if (desktop) {
            return (
                <div className='absolute bg-white rounded-lg' style={{ left: "210px", top: "40px", zIndex: "30" }} >
                    <div className="relative" style={{ padding: "24px" }}>
                        <p className=" text-b-text" style={{ marginTop: "16px", fontSize: "24px" }}>SELECT TOKEN</p>
                        <div className="relative flex flex-row" style={{ marginTop: "22px" }}>
                            <input type='text' className="w-full rounded-lg bg-b-back text-b-text" style={{ paddingLeft: "48px", paddingTop: "20px", paddingBottom: "20px" }} placeholder="Token search..." />
                            <img src='/swap/search.svg' className="absolute" style={{ left: "19px", top: "22px", height: "18px", fontSize: "16px " }} />
                        </div>
                        <div className="flex flex-row" style={{ marginTop: "24px" }}>
                            <div className="flex flex-row items-center gradientBorderButton" style={{ marginRight: "8px", marginBottom: "12px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>ETH</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", marginBottom: "12px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>DAI</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", marginBottom: "12px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDC</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", marginBottom: "12px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDT</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>ETH</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>DAI</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDC</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDT</p>
                            </div>
                        </div>
                        <span onClick={() => props.selectTokenmodalHidden()} style={{ position: "absolute", top: "16px", right: "16px", fontSize: "24px" }} className="close">&times;</span>
                    </div>
                    <div className="flex flex-row ">
                        <div className="w-1/2 border-r-2 border-b-border">
                            <p className="w-full text-center text-b-body bg-b-back" style={{ fontSize: "16px", lineHeight: "32px" }}>SWAP LIST</p>
                            <div style={{ marginTop: "16px" }}>
                                <SwapListItem />
                                <SwapListItem />
                                <SwapListItem />
                                <SwapListItem />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <p className="w-full text-center text-b-body bg-b-back" style={{ fontSize: "16px", lineHeight: "32px" }}>SAVED</p>
                            <div style={{ marginTop: "16px" }}>
                                <SwapListItem />
                                <SwapListItem />
                            </div>
                        </div>

                    </div>
                </div >
            )
        }
        if (!desktop) {
            return (
                <div className='absolute bg-white rounded-lg' style={{ left: "8px", top: "0px", zIndex: "30" }} >
                    <div className="relative" style={{ padding: "24px" }}>
                        <p className=" text-b-text" style={{ marginTop: "16px", fontSize: "24px" }}>SELECT TOKEN</p>
                        <div className="relative flex flex-row" style={{ marginTop: "22px" }}>
                            <input type='text' className="w-full rounded-lg bg-b-back text-b-text" style={{ paddingLeft: "48px", paddingTop: "20px", paddingBottom: "20px" }} placeholder="Token search..." />
                            <img src='/swap/search.svg' className="absolute" style={{ left: "19px", top: "22px", height: "18px", fontSize: "16px " }} />
                        </div>
                        <div className="flex flex-row" style={{ marginTop: "24px" }}>
                            <div className="flex flex-row items-center gradientBorderButton" style={{ marginRight: "8px", marginBottom: "12px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>ETH</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", marginBottom: "12px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>DAI</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", marginBottom: "12px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDC</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", marginBottom: "12px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDT</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>ETH</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>DAI</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDC</p>
                            </div>
                            <div className="flex flex-row items-center rounded-lg" style={{ marginRight: "8px", border: "solid #cbc9cc 1px" }}>
                                <img src='/swap/etherum.svg' style={{ marginLeft: "8px", marginTop: "8px", height: "16px", marginBottom: "8px", marginRight: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#494d66", fontWeight: "600", marginRight: "8px" }}>USDT</p>
                            </div>
                        </div>
                        <span onClick={() => props.selectTokenmodalHidden()} style={{ position: "absolute", top: "16px", right: "16px", fontSize: "24px" }} className="close">&times;</span>
                    </div>
                    <div className="flex flex-col ">
                        <div className=" border-b-border">
                            <p className="w-full text-center text-b-body bg-b-back" style={{ fontSize: "16px", lineHeight: "32px" }}>SWAP LIST</p>
                            <div style={{ marginTop: "16px" }}>
                                <SwapListItem />
                                <SwapListItem />
                                <SwapListItem />
                                <SwapListItem />
                            </div>
                        </div>
                        <div >
                            <p className="w-full text-center text-b-body bg-b-back" style={{ fontSize: "16px", lineHeight: "32px" }}>SAVED</p>
                            <div style={{ marginTop: "16px" }}>
                                <SwapListItem />
                                <SwapListItem />
                            </div>
                        </div>

                    </div>
                </div >
            )

        }
    }
    return drawScreen()

}
export default SelectTokenModal;