import { useState, useEffect } from 'react'
import RankingTable from "./rankingTable"
const RankingContent = () => {
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
                <div className="mx-auto mr-auto bg-f1f1f3 margin-t-0 margin-b-0">
                    <p className="font-bold text-b-text" style={{ paddingTop: "100px", paddingLeft: "70px", fontSize: "32px", fontWeight: "700" }}> Collection</p>
                    <div className="flex flex-row justify-between" style={{ paddingTop: "64px", paddingLeft: "70px", paddingRight: "70px", borderBottom: "solid #e4e4e5 1px", paddingBottom: "24px" }}>
                        <div className="flex flex-row" >
                            <button className="flex flex-row items-center border-2 rounded-lg border-989bb4 text-323546" style={{ padding: "10px 16px 10px 16px", fontSize: "16px", lineHeight: "19.5px", marginRight: "24px", background: "#fafafa" }}>All Categories <img src='/ranking/select_caret.svg' style={{ marginLeft: "14.3px" }} /></button>
                            <button className="flex flex-row items-center border-2 border-989bb4 text-323546" style={{ padding: "10px 16px 10px 16px", fontSize: "16px", lineHeight: "19.5px", borderRadius: "10px", background: "#fafafa" }}>All Chains <img src='/ranking/select_caret.svg' style={{ marginLeft: "14.3px" }} /></button>
                        </div>
                        <div className="flex flex-row">
                            <button className=" gradient" style={{ marginRight: "12px",}}><p style={{ padding: "10px", color: "#323546", fontWeight: "500" }}>24h</p></button>
                            <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "16px", marginRight: "12px", background: "#fafafa", borderWidth:"0.5px"  }}><p style={{ padding: "10px", color: "#323546", fontWeight: "500" }}>7d</p></button>
                            <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "16px", marginRight: "12px", background: "#fafafa", borderWidth:"0.5px"  }}><p style={{ padding: "10px", color: "#323546", fontWeight: "500"}}>30d</p></button>
                            <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "16px", marginRight: "12px", background: "#fafafa", borderWidth:"0.5px"  }}><p style={{ padding: "10px", color: "#323546", fontWeight: "500"}}>all</p></button>
                        </div>
                    </div>
                    <RankingTable />
                    <div className="flex flex-row justify-center" style={{ paddingBottom: "80px" }}>
                        <button className="bg-white gradient" style={{  marginRight: "12px" }}><p style={{fontSize: "18px", padding: "4px 11px", color:"#323546"}}>1</p> </button>
                        <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "18px", padding: "4px 11px", border: "solid #9296ae 0.5px", marginRight: "12px" }}> 2</button>
                        <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "18px", padding: "4px 11px", border: "solid #9296ae 0.5px", marginRight: "12px" }}> 3</button>
                        <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "18px", padding: "4px 11px", border: "solid #9296ae 0.5px", marginRight: "12px" }}> 4</button>
                        <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "18px", padding: "4px 11px", border: "solid #9296ae 0.5px", marginRight: "12px" }}> 5</button>
                        <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "18px", padding: "4px 11px", border: "solid #9296ae 0.5px", marginRight: "12px" }}> 50</button>
                        <button className="bg-white rounded-md text-323546 border-989bb4" style={{ fontSize: "18px", padding: "4px 11px", border: "solid #9296ae 0.5px", marginRight: "12px" }}> <img src='/ranking/arrow.svg' style={{ width: "16px" }} /></button>
                    </div>
                </div >
                </section>
            )
        }
        if (!desktop) {
            return (
                <section className=" bg-f1f1f3" style={{ width: "430px" }}>
                    <p className="font-bold text-b-text" style={{ paddingTop: "32px", paddingLeft: "16px", fontSize: "24px", fontWeight: "700" }}> Collection</p>
                    <div className="flex flex-col justify-between" style={{ paddingTop: "24px", paddingLeft: "16px", paddingRight: "70px", borderBottom: "solid #e4e4e5 1px", paddingBottom: "24px" }}>
                        <div className="flex flex-row" style={{ marginBottom: "24px" }}>
                            <button className="flex flex-row items-center border-2 rounded-lg border-989bb4 text-323546" style={{ padding: "10px 16px 10px 16px", fontSize: "16px", lineHeight: "19.5px", marginRight: "24px", background: "#fafafa" }}>All Categories <img src='/ranking/select_caret.svg' style={{ marginLeft: "14.3px" }} /></button>
                            <button className="flex flex-row items-center border-2 border-989bb4 text-323546" style={{ padding: "10px 16px 10px 16px", fontSize: "16px", lineHeight: "19.5px", borderRadius: "10px", background: "#fafafa" }}>All Chains <img src='/ranking/select_caret.svg' style={{ marginLeft: "14.3px" }} /></button>
                        </div>
                        <div className="flex flex-row">
                        <button className=" gradient" style={{ marginRight: "12px",}}><p style={{ padding: "10px", color: "#323546", fontWeight: "500" }}>24h</p></button>
                            <button className="border-2 rounded-md text-323546 border-989bb4" style={{ fontSize: "16px", marginRight: "12px", background: "#fafafa" }}><p style={{ padding: "10px", color: "#323546", fontWeight: "500" }}>7d</p></button>
                            <button className="border-2 rounded-md text-323546 border-989bb4" style={{ fontSize: "16px", marginRight: "12px", background: "#fafafa" }}><p style={{ padding: "10px", color: "#323546", fontWeight: "500" }}>30d</p></button>
                            <button className="border-2 rounded-md text-323546 border-989bb4" style={{ fontSize: "16px", marginRight: "12px", background: "#fafafa" }}><p style={{ padding: "10px", color: "#323546", fontWeight: "500" }}>all</p></button>
                        </div>
                    </div>
                    <RankingTable />
                </section >
            )

        }
    }
    return drawScreen()

}
export default RankingContent