import { useEffect, useState } from "react"

const LandingPage = () => {
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
   const drawScreen = () =>{
    if (desktop) {
        return (
            <section className="bg-1d1d28" style={{ width:"100vw"}}>
            <div className="relative bg-1d1d28" style={{ width: "1440px", marginLeft: "auto", marginRight: "auto", marginTop: "0px" }}>
                <p className="smells_good" style={{ paddingTop: "229px", width: "810px", marginLeft: "auto", textAlign: "center", marginRight: "auto", fontSize: "64px", fontWeight: "700" }}>Something Smells Good</p>
                <img src='/landingpage/text_background.svg' className="m-auto" style={{ marginTop: "-70px" }} />
                <img src='/landingpage/curve.svg' className="m-auto" style={{ marginTop: "30px" }} />
                <div className="flex flex-row m-auto">
                    <img src='/landingpage/landingimage.svg' className="" style={{ marginLeft: "70px", width: "460px", marginTop: "110px" }} />
                    <p className="m-auto smells_good" style={{ fontSize: "56px", marginTop: "325.54px", marginBottom: "300px" }}>We are making desert</p>
                </div>
                <img src='/landingpage/border.svg' className="m-auto" />
                <p className="text-center smells_good" style={{ marginTop: "100px", fontSize: "64px", fontWeight: "600" }}>Available On</p>
                <p className="text-center text-9b9b9b" style={{ marginTop: "24px", fontSize: "24px", fontWeight: "400" }}>Buy, List and Swap NFTs on the following chains</p>
                <div className="flex flex-row justify-between m-auto " style={{ marginTop: "115px", marginRight: "300px", marginLeft: "300px", marginBottom: "100px" }}>
                    <div className="">
                        <center><img src='/landingpage/cryptocurrency_eth.svg' style={{ width: "120px" }} /></center>
                        <p className='text-center text-white' style={{ marginTop: "24px", fontWeight: "500", fontSize: "24px" }}>AVAILABLE</p>
                    </div>
                    <div className="">
                        <center><img src='/landingpage/polygon.svg' style={{ width: "120px" }} /></center>
                        <p className='text-center text-9b9b9b ' style={{ marginTop: "24px", fontWeight: "500", fontSize: "24px" }}>COMING SOON</p>
                    </div>
                    <div className="">
                        <center><img src='/landingpage/binance.svg' style={{ width: "120px" }} /></center>
                        <p className='text-center text-9b9b9b ' style={{ marginTop: "24px", fontWeight: "500", fontSize: "24px" }}>COMING SOON</p>
                    </div>
                </div>
                <img src='/landingpage/border.svg' className="m-auto" />
                <p className="text-center smells_good" style={{ marginTop: "100px", fontSize: "64px", fontWeight: "600" }}>Join the Community</p>
                <p className="text-center text-9b9b9b" style={{ fontSize: "24px", marginTop: "24px" }}>In a gentle way, you can shake the world</p>
                <div className="flex flex-row justify-center" style={{ marginTop: "110px", marginLeft: "180px", marginRight: "180px", paddingBottom: "100px" }}>
                    <div className="flex flex-row items-center">
                        <img src='/landingpage/discord.svg' style={{ height: "80px" }} />
                        <p className=' smells_good' style={{ marginLeft: "25px", fontSize: "32px", fontWeight: "700" }}>DISCORD</p>
                    </div>
                    <div className="flex flex-row items-center" style={{ marginLeft: "139px" }}>
                        <img src='/landingpage/telegram.svg' style={{ height: "80px" }} />
                        <p className=' smells_good' style={{ marginLeft: "25px", fontSize: "32px", fontWeight: "700" }}>TELEGRAM</p>
                    </div>
                    <div className="flex flex-row items-center" style={{ marginLeft: "139px" }}>
                        <img src='/landingpage/twitt.svg' style={{ height: "80px" }} />
                        <p className='smells_good ' style={{ marginLeft: "25px", fontSize: "32px", fontWeight: "700" }}>TWITTER</p>
                    </div>
                </div>
            </div>
            </section>
        )
    }
    if (!desktop)
        return (
            <section className="bg-1d1d28" style={{ width:"100vw"}}>
            <div className="relative bg-1d1d28" style={{ width: "430px", marginLeft: "auto", marginRight: "auto", marginTop: "0px" }}>
                <p className="smells_good" style={{ paddingTop: "100px", width: "347px", marginLeft: "auto", textAlign: "center", marginRight: "auto", fontSize: "28px", fontWeight: "700" }}>Something Smells Good</p>
                <img src='/landingpage/text_background.svg' className="m-auto" style={{ marginTop: "-30px" }} />
                <img src='/landingpage/curve.svg' className="m-auto" style={{ marginTop: "30px" }} />
                <div className="flex flex-col m-auto">
                    <p className="m-auto smells_good" style={{ fontSize: "28px", marginTop: "60px", marginBottom: "40px" }}>We are making desert</p>
                    <img src='/landingpage/landingimage.svg' className="" style={{ marginLeft: "5px", width: "420px", marginTop: "38px", marginBottom: "60px" }} />
                </div>
                <img src='/landingpage/border.svg' className="m-auto" />
                <p className="text-center smells_good" style={{ marginTop: "60px", fontSize: "28px", fontWeight: "600" }}>Available On</p>
                <p className="text-center text-9b9b9b" style={{ marginTop: "16px", fontSize: "16px", fontWeight: "400" }}>Buy, List and Swap NFTs on the following chains</p>
                <div className="flex flex-col m-auto " style={{ marginTop: "60px", marginBottom: "60px" }}>
                    <div className="">
                        <center><img src='/landingpage/cryptocurrency_eth.svg' style={{ width: "60px" }} /></center>
                        <p className='text-center text-white' style={{ marginTop: "16px", fontWeight: "500", fontSize: "16px" }}>AVAILABLE</p>
                    </div>
                    <div className="flex flex-row justify-center" style={{ marginTop: "40px" }}>
                        <div className="" style={{ marginRight: "40px" }}>
                            <center><img src='/landingpage/polygon.svg' style={{ width: "60px" }} /></center>
                            <p className='text-center text-9b9b9b ' style={{ marginTop: "16px", fontWeight: "500", fontSize: "16px" }}>COMING SOON</p>
                        </div>
                        <div className="">
                            <center><img src='/landingpage/binance.svg' style={{ width: "60px" }} /></center>
                            <p className='text-center text-9b9b9b ' style={{ marginTop: "16px", fontWeight: "500", fontSize: "16px" }}>COMING SOON</p>
                        </div>

                    </div>

                </div>
                <img src='/landingpage/border.svg' className="m-auto" />
                <p className="text-center smells_good" style={{ marginTop: "60px", fontSize: "28px", fontWeight: "600" }}>Join the Community</p>
                <p className="text-center text-9b9b9b" style={{ fontSize: "16px", marginTop: "16px" }}>In a gentle way, you can shake the world</p>
                <div className="flex flex-col" style={{ marginTop: "50px", marginLeft: "110px", paddingBottom: "40px" }}>
                    <div className="flex flex-row items-center ">
                        <img src='/landingpage/discord.svg' style={{ height: "60px" }} />
                        <p className=' smells_good' style={{ marginLeft: "16px", fontSize: "24px", fontWeight: "700" }}>DISCORD</p>
                    </div>
                    <div className="flex flex-row items-center" style={{ marginTop: "32px" }}>
                        <img src='/landingpage/telegram.svg' style={{ height: "60px" }} />
                        <p className=' smells_good' style={{ marginLeft: "16px", fontSize: "24px", fontWeight: "700" }}>TELEGRAM</p>
                    </div>
                    <div className="flex flex-row items-center" style={{ marginTop: "32px" }}>
                        <img src='/landingpage/twitt.svg' style={{ height: "60px" }} />
                        <p className='smells_good ' style={{ marginLeft: "16px", fontSize: "24px", fontWeight: "700" }}>TWITTER</p>
                    </div>
                </div>
            </div>
            </section>
        )
   }
   return drawScreen()


}
export default LandingPage