const ChartButtons = () => {
    return (
        <section className="flex flex-row py-4 border-t-2 border-b-2 px-80 bg-b-body border-b-text">
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-252633 chartPageButton">
                <p className="text-lg text-9296ae">Volume</p>
                <p className="text-lg text-f1f1f3">234</p>
            </div>
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-37394d">
                <p className="text-lg text-9296ae">Items</p>
                <p className="text-lg text-f1f1f3">234</p>
            </div>
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-37394d">
                <p className="text-lg text-9296ae">Pools</p>
                <p className="text-lg text-f1f1f3">234</p>
            </div>
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-transparent">
                <p className="text-lg text-9296ae">Uniq Users</p>
                <p className="text-lg text-f1f1f3">234</p>
            </div>

        </section>
    )
}
export default ChartButtons