const NftItem = ({ src , width}) => {
    return (
        <div className="flex flex-row items-center rounded nftitem" style={{ marginBottom: "16px" }}>
            <div className="flex flex-row items-center">
                <img src={src} className="" style={{ width: "80px", height: "76px", borderRadius: "5px" }} />
                <div className="flex flex-col" style={{ marginLeft: "14px", width: width }}>
                    <p style={{ fontSize: "18px", lineHeight: "22px", color: "#323446", marginBottom: "8px" }}>CloneX-XTas...</p>
                    <p style={{ fontSize: "20px", lineHeight: "25px", fontWeight: "700", color: "#494d66" }}>#1</p>
                </div>
            </div>
            <div className="flex flex-row items-center" style={{ marginLeft: "27px" }}>
                <img src="/swap/etherum_black.svg" className="mr-2" />
                <p style={{ fontSize: "20px", color: "#494d66", fontWeight: "700", }}>3.3</p>
                <img src='/swap/nftimage/nftvector.svg' style={{ marginLeft: "17px", width: "24px" }} />
            </div>
        </div>
    )
}
export default NftItem