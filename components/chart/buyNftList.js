import BuyNftListItem from "./buyNFTListItem"

const BuyNftList = () => {
    return (
        <>
            <div className="absolute bottom-0 right-0 z-20 h-full bg-37394c" style={{ width: "380px" }}>
                <div className="flex flex-row items-center justify-between" style={{ padding: "16px" }}>
                    <p className="text-white " style={{ fontSize: "32px", fontWeight: "500" }}> Buy 5 NFT's</p>
                    <p className=" text-9b9b9b" style={{ fontSize: "16px" }}>clear</p>
                </div>
                <div>
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 z-30 flex flex-row items-baseline bg-white" style={{ width: "380px", padding: "6px 16px" }}>
                <img src='/charts/arrowright.svg' style={{ width: "8px", marginRight: "8px" }} />
                <p className="text-b-text" style={{ fontSize: "16px", marginRight: "8px" }}>Buy Total:</p>
                <p className=" text-b-body" style={{ fontSize: "24px", fontWeight: "700", marginRight: "3px", color: "#494d66" }}>10.000</p>
                <p className="text-b-text" style={{ fontSize: "12px", fontWeight: "500", color: "#494d66", marginRight: "57px" }}>ETH</p>
                <button className="buy"><p style={{ padding: "8px 16px", fontSize: "20px", fontWeight: "600", color: "white" }}> Buy</p></button>
            </div>

        </>
    )
}
export default BuyNftList