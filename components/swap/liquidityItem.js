const LiquidityItem = () => {
    return (
        <div className="flex flex-col p-2 border-b-2">
            <div className="flex flex-row">
                <img src='/swap/cryptocurrency_eth .svg' className="mr-1 " />
                <img src='/swap/cryptocurrency_bnb.svg' className="mr-1" />
                <p className="font-bold text-b-body">ETH/BNB</p>
            </div>
            <p className="text-b-body">0.0000034832</p>
            <p className="text-b-body">(0.00 USD)</p>
        </div>
    )
}
export default LiquidityItem