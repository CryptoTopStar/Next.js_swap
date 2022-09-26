import MarketModel from './marketModel'
import { useEffect, useState } from "react"
import Background from './background';
const data = [
    { name: 'Etherum', src: '/swap/etherum.svg' },
    { name: 'Polygon', src: '/swap/polygon.svg' },
    { name: 'Binance BSC', src: '/swap/binance.svg' },
]
const Market1 = () => {
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
    return (
        <section className="" style={{ background: "#2c2d3c", width: "1440px", height: "270px", margin: "auto", marginTop: "-74px", paddingTop: "60px" }}>
            <div className="relative flex flex-row items-center" style={{ marginLeft: "70px", height: "28px", width: "fit-content" }} >
                <img src={data[index].src} style={{ display: "inline-flex", height: "28px", marginRight: "8px" }} />
                <p className="text-white" style={{ display: "inline-flex", fontSize: "32px" }} > {data[index].name} Market</p>
                <img src="/swap/vector.svg" onClick={() => setDropdownMarketType(!dropdownMarketType)} style={{ display: "inline-flex", height: "9.6px", marginLeft: "15.6px" }} />
                {marketModeldraw()}
            </div>
            <div className="flex flex-row" style={{ marginLeft: "70px", marginTop: "32px" }}>
                <img src="/swap/graph.svg" style={{ height: "40px", marginRight: "8px" }} />
                <div className="flex flex-col">
                    <p style={{ color: "#6d7399", marginBottom: "4px", fontSize: "16px" }}>Net Worth</p>
                    <p style={{ color: "#a3ade5", fontWeight: "bold" }}>0.0000000000000</p>
                </div>
            </div>
            {drawBackground()}
        </section>
    )
}

export default Market1