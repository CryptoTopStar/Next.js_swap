const data = [
    { name: 'Etherum', src: '/swap/etherum.svg' },
    { name: 'Polygon', src: '/swap/polygon.svg' },
    { name: 'Binance BSC', src: '/swap/binance.svg' },
]
const MarketModel = (props) => {
    return (
        <div className="absolute right-0 z-30 flex flex-col py-4 bg-white border-2 rounded-md top-8 mx">
            {data.map((item, index) => {
                return (
                    <div onClick={() => props.itemClick(index)} className="flex flex-row items-center px-2 py-2 pr-6 mb-2 w-60 markettype" key={index}>
                        <img className="h-8 mr-2" src={item.src} />
                        <p className="text-xl text-b-body">{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default MarketModel