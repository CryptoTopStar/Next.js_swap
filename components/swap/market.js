import MarketModel from './marketModel'
import { useEffect, useState } from "react"
import Background from './background';
const data = [
    { name: 'Etherum', src: '/swap/etherum.svg' },
    { name: 'Polygon', src: '/swap/polygon.svg' },
    { name: 'Binance BSC', src: '/swap/binance.svg' },
]
const Market = () => {
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
        <section className="px-6 py-4" style={{ background: "#2c2d3c" }}>
            <div className="w-full mt-14">
                <div className="relative flex flex-row items-center w-auto mb-4 phone:mx-3 tablet:mx-40 laptop:mx-72 desktop:mx-96 " style={{ width: "fit-content" }}>
                    <img src={data[index].src} className="h-8 mr-3" />
                    <p className="mr-3 text-3xl text-white">{data[index].name} Market</p>
                    <img src="/swap/vector.svg" className="h-3 " onClick={() => setDropdownMarketType(!dropdownMarketType)} />
                    {marketModeldraw()}
                </div>
                <div className="flex flex-row items-center mb-4 phone:mx-3 tablet:mx-40 laptop:mx-72 desktop:mx-96">
                    <img src="/swap/graph.svg" className="h-10 mr-3" />
                    <div className="flex flex-col">
                        <p style={{ color: "#6d7399" }}>Net Worth</p>
                        <p style={{ color: "a3ade5", fontWeight: "bold" }}>0.0000000000000</p>
                    </div>
                </div>
            </div>
            {drawBackground()}
        </section>
    )
}

export default Market