import ChartItem from "./chart"
import Table from "./table"
import { useEffect, useState } from "react"
const ChartContent = () => {
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
        if (!desktop) {
            return (
               
                <section style={{width:"430px" , margin:"auto"}} className=" bg-b-body">
                <div className="flex flex-col bg-b-body ">
                    <div style={{ width: "400px", height: "250px", padding: "15px" }}>
                        <ChartItem />
                    </div>
                    <div className="">
                        <Table />
                    </div>
                </div>
                </section>
             
            )

        }
        if (desktop) {
            return (
                <div className="w-full bg-b-body">
                <section className="flex bg-b-body desktop:flex-row " style={{ width:"1440px", margin:"auto"}}>
                    <div style={{ width: "947px", height: "663px", paddingTop: "11px" }}>
                        <ChartItem />
                    </div>
                    <div className="" style={{ height: "630px", width: '500px' }}>
                        <Table />
                    </div>
                </section>
                </div>
            )

        }
    }

    return drawScreen()
}
export default ChartContent