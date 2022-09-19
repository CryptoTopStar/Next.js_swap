const ChartButtons = () => {
    return (
        <section className="flex flex-row py-4 border-t-2 border-b-2 desjtop:px-80 laptop:px-60 tablet:px-40 phone:px-0 bg-b-body border-b-text">
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-252633 chartPageButton">
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-9296ae">Volume</p>
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-f1f1f3">234</p>
            </div>
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-37394d">
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-9296ae">Items</p>
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-f1f1f3">234</p>
            </div>
            <div className="flex flex-col items-center w-24 py-4 mx-4 mr-4 bg-37394d">
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-9296ae">Pools</p>
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-f1f1f3">234</p>
            </div>
            <div className="flex flex-col items-center py-4 mx-4 mr-4 bg-transparent w-36">
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-9296ae">Uniq Users</p>
                <p className="desktop:text-lg laptop:text-base tablet:text-md phone:text-sm text-f1f1f3">234</p>
            </div>

        </section>
    )
}
export default ChartButtons