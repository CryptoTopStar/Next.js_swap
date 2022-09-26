import { useEffect, useState } from "react"
const TransanctionSettingModal = (props) => {
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
    const drawscreen = () => {
        if (desktop) {
            return (
                <div className="rounded-md" style={{ position: "absolute", zIndex: "50", top: "74px", background: "white", left: "192px", padding: "16px" }}>
                    <div className="relative">
                        <p className="text-black " style={{ padding: "24px 8px", fontSize: "24px", borderBottom: "solid #e6e6e6 1px" }}>Transanction Settings</p>
                        <p className="" style={{ color: "#5b6080", fontSize: "16px", marginTop: "77px" }}><center>Item purchase Per/Pool</center></p>
                        <div className="flex flex-row rounded-lg" style={{ marginTop: "16px", marginLeft: "125px", width: "194px", marginRight: "125px", height: "50px", marginBottom: "134px" }}>
                            <input type="text" className="w-3/5 text-right text-black rounded-lg outline-none" style={{ background: "#F1F1FD", fontSize: "18px", paddingRight: " 20px", }} placeholder="5" />
                            <button className="w-2/5 rounded-lg" style={{ backgroundImage: "linear-gradient(90deg, rgba(250, 2, 255, 0.1) -3.16%, rgba(6, 214, 223, 0.1) 100%)", marginLeft: "-10px" }}><p className=" gradient_text" style={{ padding: "17.5px", fontSize: "16px" }}>ITEMS</p></button>
                        </div>
                        <span onClick={() => props.hidden()} class="close" style={{ position: "absolute", top: "8px", right: "8px", fontSize: "32px" }}>&times;</span>
                    </div>

                </div>
            )
        }
        if (!desktop) {
            return (<div className="rounded-md" style={{ position: "absolute", zIndex: "50", top: "0px", background: "white", left: "0px", padding: "16px", width: "400px" }}>
                <div className="relative">
                    <p className="text-black " style={{ padding: "24px 8px", fontSize: "24px", borderBottom: "solid #e6e6e6 1px" }}>Transanction Settings</p>
                    <p className="" style={{ color: "#5b6080", fontSize: "16px", marginTop: "77px" }}><center>Item purchase Per/Pool</center></p>
                    <div className="flex flex-row rounded-lg" style={{ marginTop: "16px", marginLeft: "16px", width: "365.22px", marginRight: "125px", height: "50px", marginBottom: "134px" }}>
                        <input type="text" className="w-3/5 text-right text-black rounded-lg outline-none" style={{ background: "#F1F1FD", fontSize: "18px", paddingRight: " 20px", }} placeholder="5" />
                        <button className="w-2/5 rounded-lg" style={{ backgroundImage: "linear-gradient(90deg, rgba(250, 2, 255, 0.1) -3.16%, rgba(6, 214, 223, 0.1) 100%)", marginLeft: "-10px" }}><p className=" gradient_text" style={{ padding: "17.5px", fontSize: "16px" }}>ITEMS</p></button>
                    </div>
                    <span onClick={() => props.hidden()} class="close" style={{ position: "absolute", top: "8px", right: "8px", fontSize: "32px" }}>&times;</span>
                </div>

            </div>)
        }
    }


    return drawscreen()

}
export default TransanctionSettingModal