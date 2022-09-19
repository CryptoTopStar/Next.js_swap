const SwapListItem = () => {
    return (
        <div className="flex flex-row items-center w-full p-2 swaplistitem">
            <div className="w-1/5 mr-2">
                <img src="/swap/etherum.svg" className="w-3/4" /></div>
            <div className="w-4/5">
                <div className="flex flex-row justify-between desktop:mb-2 laptop:mb-1">
                    <p className="text-b-body desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">Ether</p>
                    <p className="text-b-gray desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">0.00212</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-b-gray desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">ETH</p>
                    <p className="text-b-delete desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">delete</p>
                </div>
            </div>
        </div>
    )

}
export default SwapListItem