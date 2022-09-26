import MarketModel from './marketModel'
import { useEffect, useState } from "react"
import Background from './background';
import { useMediaQuery } from 'react-responsive'

const data = [
    { name: 'Etherum', src: '/swap/etherum.svg' },
    { name: 'Polygon', src: '/swap/polygon.svg' },
    { name: 'Binance BSC', src: '/swap/binance.svg' },
]
const Market = ({ marginleft }) => {
    let isDesktopOrLaptop = useMediaQuery({
        minWidth: 1440
      })
    let isLaptopOrMobile = useMediaQuery({
        minWidth: 430
    })
    
    useEffect(() => {
        function handleResize() {
            if (screen.width > 429) {
                setDesktop(true);
            }
            if (screen.width < 429) {
                setDesktop(false);
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize();
        drawScreen()    
    }, []);
    const [desktop, setDesktop] = useState(false)
    const [dropdownMarketType, setDropdownMarketType] = useState(false);
    const [index, setIndex] = useState(0);
    const itemClick = (index) => {
        setIndex(index);
        setDropdownMarketType(!dropdownMarketType);
    }
    const marketModeldraw = () => {
        if (dropdownMarketType) {
            return <MarketModel itemClick={itemClick} />;
        }
    }
    const drawBackground = () => {
        if (dropdownMarketType) {
            return <Background />;
        }
    }
    const drawScreen = () => {
        if (desktop) {
            return (
                <section className='relative w-full m-auto bg-b-body'>
                <div className="" style={{ background: "#2c2d3c", width: "1440px", height: "270px", marginRight: "auto",marginLeft:"auto", marginTop: "0px", paddingTop: "60px" }}>
                    <div className="relative flex flex-row items-center" style={{ marginLeft: marginleft, height: "28px", width: "fit-content" }} >
                        <img src={data[index].src} style={{ display: "inline-flex", height: "28px", marginRight: "8px" }} />
                        <p className="text-white" style={{ display: "inline-flex", fontSize: "32px" }} > {data[index].name} Market</p>
                        <img src="/swap/vector.svg" onClick={() => setDropdownMarketType(!dropdownMarketType)} style={{ display: "inline-flex", height: "9.6px", marginLeft: "15.6px" }} />
                        {marketModeldraw()}
                    </div>
                    <div className="flex flex-row" style={{ marginLeft: marginleft, marginTop: "32px" }}>
                        <img src="/swap/graph.svg" style={{ height: "40px", marginRight: "8px" }} />
                        <div className="flex flex-col">
                            <p style={{ color: "#6d7399", marginBottom: "4px", fontSize: "16px" }}>Net Worth</p>
                            <p style={{ color: "#a3ade5", fontWeight: "bold" }}>0.0000000000000</p>
                        </div>
                    </div>
                    {drawBackground()}
                </div>
                </section>
            )
        }
        if (!desktop) {
            return (
                    <section className="" style={{ background: "#2c2d3c", width: "430px", height: "170px", margin: "0", marginTop: "0px", paddingTop: "30px" }}>
                        <div className="relative flex flex-row items-center" style={{ marginLeft: "16px", height: "28px", width: "fit-content" }} >
                            <img src={data[index].src} style={{ display: "inline-flex", height: "28px", marginRight: "8px" }} />
                            <p className="text-white" style={{ display: "inline-flex", fontSize: "24px" }} > {data[index].name} Market</p>
                            <img src="/swap/vector.svg" onClick={() => setDropdownMarketType(!dropdownMarketType)} style={{ display: "inline-flex", height: "9.6px", marginLeft: "15.6px" }} />
                            {marketModeldraw()}
                        </div>
                        <div className="flex flex-row" style={{ marginLeft: "16px", marginTop: "24px" }}>
                            <img src="/swap/graph.svg" style={{ height: "40px", marginRight: "12px" }} />
                            <div className="flex flex-col">
                                <p style={{ color: "#6d7399", marginBottom: "4px", fontSize: "16px" }}>Net Worth</p>
                                <p style={{ color: "#a3ade5", fontWeight: "bold" }}>0.0000000000000</p>
                            </div>
                        </div>
                        {drawBackground()}
                    </section>
            )

        }
    }
    return drawScreen();
}

export default Market