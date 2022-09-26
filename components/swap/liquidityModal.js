import { useEffect, useState } from "react"
const LiquidityModal = () => {
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
    const [desktop, setDesktop] = useState(false)
    const drawScreen = () => {
        if (desktop) {
            return (
                <section style={{width:"1440px" , margin:"auto"}}>
                    <div className="flex flex-col justify-center m-auto bg-white shadow-lg shadow-indigo-500/50 " style={{ position: "absolute", top: "382px", marginLeft: "400px", width: "640px", padding: "60px", borderRadius: "20px" }}>
                        <div style={{ marginBottom: "40px" }}>
                            <p className="" style={{ color: "#000000", fontSize: "20px", lineHeight: "24.5px", fontWeight: "700" }}>Your Liquidity</p>
                            <p className="" style={{ color: "#494d66", marginTop: "16px", fontSize: "16px", lineHeight: "19.5px", color: "#494d66" }}>Remove liquidity to receive tokens back</p>
                        </div>
                        <button type='button' className='w-full' style={{ backgroundImage: "linear-gradient(to right, rgba(250, 2, 255, 0.05), rgba(38, 186, 227, 0.05))", color: "#9879f1", padding: "22px 39px", fontSize: "16px", lineHeight: "19.5px", borderRadius: "10px", marginBottom: "32px" }}><center>Connect to a wallet to view your liquidity.</center></button>
                        <button type='button' className='w-full' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", padding: "19px 113px", borderRadius: "10px" }}>CONNECT WALLET</button>
                    </div>
                </section>
            )
        }
        if (!desktop) {
            return (
                <section className="flex flex-col justify-center m-auto bg-white shadow-lg shadow-indigo-500/50 " style={{ position: "absolute", top: "290px", marginLeft: "15px", width: "400px", padding: "32px 24px", borderRadius: "20px" }}>
                    <div style={{ marginBottom: "40px" }}>
                        <p className="" style={{ color: "#000000", fontSize: "20px", lineHeight: "24.5px", fontWeight: "700" }}>Your Liquidity</p>
                        <p className="" style={{ color: "#494d66", marginTop: "16px", fontSize: "16px", lineHeight: "19.5px", color: "#494d66" }}>Remove liquidity to receive tokens back</p>
                    </div>
                    <button type='button' className='w-full' style={{ backgroundImage: "linear-gradient(to right, rgba(250, 2, 255, 0.05), rgba(38, 186, 227, 0.05))", color: "#9879f1", padding: "22px 15px", fontSize: "16px", lineHeight: "19.5px", borderRadius: "10px", marginBottom: "32px" }}><center>Connect to a wallet to view your liquidity.</center></button>
                    <button type='button' className='w-full' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", padding: "19px 85px", borderRadius: "10px" }}>CONNECT WALLET</button>
                </section>
            )

        }
    }
    return drawScreen()
}

export default LiquidityModal