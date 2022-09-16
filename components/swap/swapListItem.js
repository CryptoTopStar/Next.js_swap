const SwapListItem = () => {
    return (
        <div className="flex flex-row items-center w-full p-4 swaplistitem">
            <div className="w-1/5 mr-2">
                <img src="/swap/etherum.svg" className="w-3/4" /></div>
            <div className="w-4/5">
                <div className="flex flex-row justify-between mb-2">
                    <p className="text-b-body">Ether</p>
                    <p className="text-b-gray">0.00212</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-b-gray">ETH</p>
                    <p className="text-b-delete">delete</p>
                </div>
            </div>
        </div>
    )

}
export default SwapListItem