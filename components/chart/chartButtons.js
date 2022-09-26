import { useEffect, useState } from "react"
const ChartButtons = () => {
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
                <div className="w-full border-b-2 bg-b-body border-b-text">
                <section style={{width:"1440px" , margin:"auto"}}>
                <div className="flex flex-row bg-b-body border-b-text" style={{ padding: "10px 10px 10px 342px" }}>
                    <div className="flex flex-col items-center bg-252633 chartPageButton">
                        <p className=" text-9296ae">Volume</p>
                        <p className=" text-f1f1f3" style={{ marginTop: "24px", fontWeight: "600" }}>234</p>
                    </div>
                    <div className="flex flex-col items-center bg-252633 chartPageButton">
                        <p className=" text-9296ae">ITEMS</p>
                        <p className=" text-f1f1f3" style={{ marginTop: "24px", fontWeight: "600" }}>234</p>
                    </div>
                    <div className="flex flex-col items-center bg-252633 chartPageButton">
                        <p className=" text-9296ae">POOLS</p>
                        <p className=" text-f1f1f3" style={{ marginTop: "24px", fontWeight: "600" }}>234</p>
                    </div>

                    <div className="flex flex-col" style={{ marginLeft: "12px", marginTop: "23px" }}>
                        <p style={{ fontSize: "24px", color: "#9396ae", fontWeight: "300px", lineHeight: "18px" }}>Uniq Users</p>
                        <p style={{ fontSize: "26px", fontWeight: "600", marginTop: "24px", textAlign: "center", color: "#f1f1f3" }}>234</p>
                    </div>

                </div>
                </section>
                </div>
            )
        }
        if (!desktop) {
            return (
                <section className="flex flex-row border-b-2 bg-b-body border-b-text" style={{ padding: "10px 10px 10px 10px" }}>
                    <div className="flex flex-col items-center bg-252633 chartPageButton" style={{ width: "80px", height: "80px", padding: "12px 9px" }}>
                        <p className=" text-9296ae">Volume</p>
                        <p className=" text-f1f1f3" style={{ marginTop: "16px", fontWeight: "600" }}>234</p>
                    </div>
                    <div className="flex flex-col items-center bg-252633 chartPageButton" style={{ width: "80px", height: "80px", padding: "12px 9px" }}>
                        <p className=" text-9296ae">Items</p>
                        <p className=" text-f1f1f3" style={{ marginTop: "16px", fontWeight: "600" }}>234</p>
                    </div>
                    <div className="flex flex-col items-center bg-252633 chartPageButton" style={{ width: "80px", height: "80px", padding: "12px 9px" }}>
                        <p className=" text-9296ae">Pools</p>
                        <p className=" text-f1f1f3" style={{ marginTop: "16px", fontWeight: "600" }}>234</p>
                    </div>

                    <div className="flex flex-col" style={{ marginLeft: "12px", marginTop: "12px" }}>
                        <p style={{ fontSize: "16px", color: "#9396ae", fontWeight: "300px", lineHeight: "18px" }}>Uniq Users</p>
                        <p style={{ fontSize: "16px", fontWeight: "600", marginTop: "16px", textAlign: "center", color: "#f1f1f3" }}>234</p>
                    </div>

                </section>
            )
        }
    }
    return drawScreen()
}
export default ChartButtons