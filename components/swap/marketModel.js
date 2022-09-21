const data = [
    { name: 'Etherum', src: '/swap/etherum.svg' },
    { name: 'Polygon', src: '/swap/polygon.svg' },
    { name: 'Binance BSC', src: '/swap/binance.svg' },
]
const MarketModel = (props) => {
    return (
        <div className="absolute z-30 flex flex-col bg-white border-2 rounded-md" style={{ top: "35px", right: "0px", width: "194px", paddingTop: "16px" }}>
            {data.map((item, index) => {
                return (
                    <div onClick={() => props.itemClick(index)} className="flex flex-row items-center px-2 py-2 pr-6 mb-2 markettype" key={index}>
                        <img src={item.src} style={{ height: "24px", marginRight: "8px" }} />
                        <p className=" text-b-body" style={{ fontSize: "16px" }}>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default MarketModel