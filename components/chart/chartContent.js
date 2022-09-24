import ChartItem from "./chart"
import Table from "./table"
import { useEffect, useState } from "react"
const ChartContent = () => {
    const [desktop, setDesktop] = useState(false)
    useEffect(() => {
        console.log(screen.width)
        if (screen.width > 429) {
            setDesktop(true);
            console.log(desktop)
        }
        if (screen.width < 429) {
            setDesktop(false);
            console.log(desktop)
        }
    }, []);
    const drawScreen = () => {
        if (!desktop) {
            return (
                <section className="flex flex-col bg-b-body ">
                    <div style={{ width: "400px", height: "250px", padding: "15px" }}>
                        <ChartItem />
                    </div>
                    <div className="">
                        <Table />
                    </div>
                </section>
            )

        }
        if (desktop) {
            return (
                <section className="flex bg-b-body desktop:flex-row ">
                    <div style={{ width: "947px", height: "663px", paddingTop: "11px" }}>
                        <ChartItem />
                    </div>
                    <div className="" style={{ height: "630px", width: '500px' }}>
                        <Table />
                    </div>
                </section>
            )

        }
    }

    return drawScreen()
}
export default ChartContent