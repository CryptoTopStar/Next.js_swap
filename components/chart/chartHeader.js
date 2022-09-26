import { useEffect, useState } from "react"
const ChartHeader = () => {
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
                <div className="w-full border-t-2 border-b-2 bg-b-body border-b-text">
                <section style={{width:"1440px" , margin:"auto"}}>
                    <div className="flex flex-row bg-b-body" style={{ padding: "40px 70px 40px 70px" }} >
                        <img src='/charts/nftimage.svg' style={{ width: "239px", height: "202px" }} />
                        <div style={{ marginLeft: "32px" }}>
                            <p className="text-white " style={{ fontSize: "50px", fontWeight: "700", marginTop: "18px", lineHeight: "33px", marginBottom: "24px" }}>DigiDaigaku Genesis</p>
                            <p className="mb-6 text-989bb4" style={{ fontSize: "16px", lineHeight: "11px" }}>Created by: 0x12ea1...f0af</p>
                            <p className="text-white" style={{ fontSize: "16px", width: "870px", height: "40px", fontWeight: "400" }}>Shellz Orb is a lore and art-based brand. Our journey begins in NFTs with the goal of making Web3 within an arm's reach of every person on earth....</p>
                        </div>
                    </div>
                </section>
                </div>
            )

        }
        if (!desktop) {
            return (
                <section className="flex flex-row border-b-2 bg-b-body border-b-text" style={{ padding: "24px 16px" }} >
                    <img src='/charts/nftimage.svg' style={{ width: "118px", height: "100px" }} />
                    <div style={{ marginLeft: "12px" }}>
                        <p className="text-white " style={{ fontSize: "24px", fontWeight: "700", marginTop: "0px", lineHeight: "33px", marginBottom: "12px" }}>DigiDaigaku Genesis</p>
                        <p className="mb-6 text-989bb4" style={{
                            fontSize: "14px", lineHeight: "11px", marginBottom: "12px"
                        }}>Created by: 0x12ea1...f0af</p>
                        <p className="text-white" style={{ fontSize: "14px", width: "266px", height: "40px", fontWeight: "400", width: "266px" }}>Shellz Orb is a lore and art-based brand. Our journey begins in...</p>
                    </div>
                </section >
            )

        }
    }
    return drawScreen()
}
export default ChartHeader