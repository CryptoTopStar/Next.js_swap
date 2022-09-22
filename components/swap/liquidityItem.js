const LiquidityItem = () => {
    return (
        <div className="flex flex-col" style={{ padding: "16px", borderBottom: "solid #b8bacc 1px" }}>
            <div className="flex flex-row" style={{ marginBottom: "16px" }}>
                <img src='/swap/cryptocurrency_eth .svg' style={{ width: "16px" }} />
                <img src='/swap/cryptocurrency_bnb.svg' style={{ width: "16px", marginLeft: "4px" }} />
                <p className="font-bold text-b-body" style={{ fontSize: "20px", marginLeft: "8px", lineHeight: "14px" }}>ETH/BNB</p>
            </div>
            <p className="text-b-body" style={{ marginBottom: "8px", fontSize: "16px", lineHeight: "11px" }}>0.0000034832</p>
            <p className="text-b-body" style={{ fontSize: "16px", lineHeight: "11px" }}>(0.00 USD)</p>
        </div>
    )
}
export default LiquidityItem