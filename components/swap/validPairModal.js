import { useState, useEffect } from "react"

const ValidPairModal = () => {
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
                <div className="flex flex-col justify-center m-auto bg-white rounded-md shadow-lg shadow-indigo-500/50 " style={{ position: "absolute", top: "382px", marginLeft: "400px", width: "640px", borderRadius: "20px" }}>
                    <div style={{ padding: "32px 24px" }}>
                        <p className=" text-b-body" style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700", marginBottom: "15px" }}>Your Liquidity</p>
                        <p className="text-b-text" style={{ fontSize: "16px", lineHeight: "11x" }}>Receive LP tokens and earn 0.17% trading fees</p>
                    </div>
                    <p className="text-2e3041" style={{ marginTop: "8px", marginLeft: "25px", fontSize: "20px", fontWeight: "500" }}>CHOOSE A VALID PAIR</p>
                    <div className="flex flex-row" style={{ marginTop: "24px", marginLeft: "110px", marginRight: "110px" }}>
                        <div style={{ padding: "13px 16px", border: "solid #494d66 0.5px", borderRadius: "10px" }}>
                            <div className="flex flex-row items-center">
                                <img src='/swap/cryptocurrency_bnb.svg' style={{ width: "24px", marginRight: "12px" }} />
                                <p className="text-b-text" style={{ fontSize: "20px", lineHeight: "25px", marginRight: "86.75px" }}>0.1</p>
                                <img src="/swap/caret.svg" />
                            </div>
                        </div>
                        <div style={{ padding: "13px 16px", border: "solid #494d66 0.5px", borderRadius: "10px", marginLeft: "20px" }}>
                            <div className="flex flex-row items-center">
                                <img src='/swap/cryptocurrency_bnb.svg' style={{ width: "24px", marginRight: "12px" }} />
                                <p className="text-b-text" style={{ fontSize: "20px", lineHeight: "25px", marginRight: "54.75px" }}>CAKE</p>
                                <img src="/swap/caret.svg" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row" style={{ marginTop: "17px", marginLeft: "110px", marginRight: "110px" }}>
                        <p className="w-1/2 text-left text-b-text">LP reward APR</p>
                        <p className="w-1/2 font-bold text-right text-b-text ">0.86%</p>
                    </div>
                    <button type='button' className='' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", marginTop: "44px", marginLeft: "110px", marginRight: "110px", padding: "22px 122px", borderRadius: "10px", fontSize: "20px", marginBottom: "63px" }}>+ ADD LIQUIDITY</button>
                    <div className=" text-737373" style={{ padding: "20px 24px", background: "#f3f3f5", color: "#737373" }}>
                        By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
                    </div>
                </div>
                </section>
            )
        }
        if (!desktop) {
            return (
                <section className="flex flex-col justify-center m-auto bg-white rounded-md shadow-lg shadow-indigo-500/50 " style={{ position: "absolute", top: "297px", marginLeft: "15px", width: "400px", borderRadius: "10px" }}>
                    <div style={{ padding: "32px 24px" }}>
                        <p className=" text-b-body" style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700", marginBottom: "15px" }}>Your Liquidity</p>
                        <p className="text-b-text" style={{ fontSize: "16px", lineHeight: "11x" }}>Receive LP tokens and earn 0.17% trading fees</p>
                    </div>
                    <p className="text-2e3041" style={{ marginTop: "8px", marginLeft: "25px", fontSize: "20px", fontWeight: "500" }}>CHOOSE A VALID PAIR</p>
                    <div className="flex flex-col" style={{ marginTop: "24px", marginLeft: "16px", marginRight: "16px" }}>
                        <div style={{ padding: "13px 16px", border: "solid #494d66 0.5px", borderRadius: "10px" }}>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row">
                                    <img src='/swap/cryptocurrency_bnb.svg' style={{ width: "24px", marginRight: "12px" }} />
                                    <p className="text-b-text" style={{ fontSize: "20px", lineHeight: "25px", marginRight: "86.75px" }}>0.1</p>
                                </div>
                                <img src="/swap/caret.svg" />
                            </div>
                        </div>
                        <div style={{ padding: "13px 16px", border: "solid #494d66 0.5px", borderRadius: "10px", marginTop: "24px" }}>

                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row">
                                    <img src='/swap/cryptocurrency_bnb.svg' style={{ width: "24px", marginRight: "12px" }} />
                                    <p className="text-b-text" style={{ fontSize: "20px", lineHeight: "25px", marginRight: "54.75px" }}>CAKE</p>
                                </div>
                                <img src="/swap/caret.svg" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row" style={{ marginTop: "17px", marginLeft: "16px", marginRight: "16px" }}>
                        <p className="w-1/2 text-left text-b-text">LP reward APR</p>
                        <p className="w-1/2 font-bold text-right text-b-text ">0.86%</p>
                    </div>
                    <button type='button' className='' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", marginTop: "44px", marginLeft: "16px", marginRight: "16px", padding: "22px 94px", borderRadius: "10px", fontSize: "20px", marginBottom: "24px" }}>+ ADD LIQUIDITY</button>
                    <div className=" text-737373" style={{ padding: "20px 24px", background: "#f3f3f5", color: "#737373" }}>
                        By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
                    </div>
                </section>
            )

        }
    }
    return drawScreen()
}
export default ValidPairModal