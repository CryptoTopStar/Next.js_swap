const SwapListItem = () => {
    return (
        <div className="flex flex-row items-center w-full swaplistitem" style={{ marginBottom: "15px", padding: "8px 0px" }}>
            <div className="">
                <img src="/swap/etherum.svg" style={{ height: "24px", marginRight: "8px", marginLeft: "17px" }} /></div>
            <div>
                <div className="flex flex-row justify-between w-full">
                    <p style={{ fontSize: "14px", marginRight: "42px", color: "#494d66" }}>Ether</p>
                    <p style={{ fontSize: "14px", color: "#808080" }}>0.00212</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p style={{ fontSize: "14px", marginRight: "42px", color: "#9296ae" }}>ETH</p>
                    <p style={{ fontSize: "14px", color: "#ff8080" }}>delete</p>
                </div>
            </div>
        </div>
    )

}
export default SwapListItem