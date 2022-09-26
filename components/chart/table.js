import { useEffect, useState } from "react"
const Table = () => {
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
                <>
                    <div className="flex flex-row justify-center" style={{ height: "45px", background: "#37394d" }}>
                        <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Type</div>
                        <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Quantity</div>
                        <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Av.Price</div>
                        <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Tx</div>
                    </div>
                    <div style={{ height: "585px", overflowY: "auto" }}>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "120px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>

                    </div>
                </>
            )

        }
        if (!desktop) {
            return (
                <>
                    <div className="flex flex-row justify-center" style={{ height: "45px", background: "#37394d", width: "400px", marginTop: "20px", marginLeft: "15px" }}>
                        <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Type</div>
                        <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Quantity</div>
                        <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Av.Price</div>
                        <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "500", textAlign: "center", paddingTop: "13px" }}>Tx</div>
                    </div>
                    <div style={{ height: "380px", overflowY: "auto", marginLeft: "15px", width: "400px", marginBottom: "20px" }}>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(41, 255, 6, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Buy</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>
                        <div className="flex flex-row justify-center" style={{ height: "45px", background: "rgba(249, 1, 1, 0.1)" }}>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>Sell</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>6</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}>0.00001</div>
                            <div style={{ width: "100px", height: "46px", fontSize: "16px", fontWeight: "400", textAlign: "center", paddingTop: "13px" }}><center><img src='/charts/charm_link-external.svg' /></center></div>
                        </div>


                    </div>
                </>
            )

        }
    }
    return drawScreen()

}
export default Table