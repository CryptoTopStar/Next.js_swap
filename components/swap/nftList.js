
import NftItem from "./nftItem"
const Nftlist = () => {
    return (
        <section style={{ width: "1440px", margin: "auto", position: "relative", zIndex: "40" }}>
            <div style={{ position: "absolute", bottom: "0px", right: "0px", background: "white", width: "490px", height: "850px", borderRadius: "10px" }}>
                <div className="flex flex-row items-center" style={{ margin: "24px 16px" }}>
                    <p style={{ fontSize: "32px", lineHeight: "39px", color: "#494d66" }}>Buy 5 NFT's</p>
                    <p style={{ marginLeft: "163px", color: "#2b2b2b", fontWeight: "500" }}>clear</p>
                    <img src="/swap/gridButton.svg" style={{ marginLeft: "36px", width: "24px" }} />
                </div>
                <div className="flex flex-row items-center bg-f0f0f0" style={{ padding: "8px" }}>
                    <img src='/swap/rightArrow.svg' style={{ marginLeft: "8px", height: "14px", marginRight: "10px" }} />
                    <p style={{ fontSize: "20px", color: "#2b2b2b", lineHeight: "24px" }}>Buy Total:</p>
                    <img src='/swap/etherum_black.svg' style={{ marginLeft: "218px", width: "24px" }} />
                    <p style={{ marginLeft: "10px", width: "20px", color: "#2b2b2b", fontWeight: "700" }}>10.000</p>
                </div>
                <div style={{ margin: "32px 16px", height: "620px", overflowY: "auto" }}>
                    <NftItem src='/swap/nftImage/turtle.svg' width='212px' />
                    <NftItem src='/swap/nftImage/leopard.svg' width='212px' />
                    <NftItem src='/swap/nftImage/frog.svg'width='212px'/>
                    <NftItem src='/swap/nftImage/nemo.svg' width='212px'/>
                    <NftItem src='/swap/nftImage/mouse.svg' width='212px'/>
                    <NftItem src='/swap/nftImage/small.svg' />

                </div>
                <div className="">
                    <center><img src='/swap/arrow_bottom_black.svg' style={{ width: "15px" }} /></center>
                </div>
            </div>
        </section>
    )
}
export default Nftlist