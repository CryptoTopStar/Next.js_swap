const NftGridItem = () => {
    return (
        <div className="nftGridItem" style={{ height: "370px", background: "#3e4157", width: "310px", borderRadius: "10px", marginBottom: "20px" }}>
            <div style={{ padding: "20px 20px 0px 20px" }}>
                <img src="/charts/nftimage.svg" style={{ width: "270px", height: "200px", borderRadius: "10px" }} />
                <p className=" text-d9d9d9" style={{ fontSize: "32px", fontWeight: "700", marginLeft: "10px", marginTop: "16px", marginBottom: "23px" }}>#1975</p>
            </div>
            <div className="flex flex-row items-center" style={{ background: "#494c66", padding: "13px 15px 23px 15px", borderRadius: "0px 0px 10px 10px" }}>
                <div>
                    <p className=" text-f2f2f2" style={{ fontSize: "16px", marginBottom: "12px" }}>Price</p>
                    <p className="text-white" style={{ fontSize: "16px", fontWeight: "700", width: "132px" }}>11.000003 ETH</p>
                </div>
                <div className="" style={{ marginLeft: "12px" }}>
                    <button className="buy"><p style={{ padding: "4px 16px", color: "white", fontWeight: "400", }}
                    >Buy</p></button>
                </div>
                <div className="" style={{ marginLeft: "20px" }}>
                    <button className="">+ADD</button>
                </div>
            </div>
        </div >
    )


}
export default NftGridItem