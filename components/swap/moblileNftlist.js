
import NftItem from "./nftItem"
const MobileNftlist = () => {
    return (
        <section style={{ width: "430px", margin: "auto", position: "relative", zIndex: "10", paddingBottom:"40px" }}>
            <div style={{ marginTop:"40px", marginLeft: "15px", background: "white", width: "400px", height: "850px", borderRadius: "10px" }}>
                <div className="flex flex-row items-center" style={{ margin: "24px 16px" , padding:"30px 16px"}}>
                    <p style={{ fontSize: "28px", lineHeight: "39px", color: "#494d66" }}>Buy 5 NFT's</p>
                    <p style={{ marginLeft:"70px", color: "#2b2b2b", fontWeight: "500" }}>clear</p>
                    <img src="/swap/gridButton.svg" style={{ marginLeft: "36px", width: "24px" }} />
                </div>
                <div className="flex flex-row items-center bg-f0f0f0" style={{ padding: "8px" }}>
                    <img src='/swap/rightArrow.svg' style={{ marginLeft: "8px", height: "14px", marginRight: "10px" }} />
                    <p style={{ fontSize: "20px", color: "#2b2b2b", lineHeight: "24px" }}>Buy Total:</p>
                    <img src='/swap/etherum_black.svg' style={{ marginLeft: "168px", width: "24px" }} />
                    <p style={{ marginLeft: "10px", width: "20px", color: "#2b2b2b", fontWeight: "700" }}>10.000</p>
                </div>
                <div style={{ margin: "32px 16px 0px 16px", height: "620px", overflowY: "auto" }}>
                    <NftItem src='/swap/nftImage/turtle.svg' width='127px' />
                    <NftItem src='/swap/nftImage/leopard.svg' width='127px'/>
                    <NftItem src='/swap/nftImage/frog.svg' width='127px'/>
                    <NftItem src='/swap/nftImage/nemo.svg' width='127px'/>
                    <NftItem src='/swap/nftImage/mouse.svg' width='127px'/>
                    <NftItem src='/swap/nftImage/small.svg' width='127px'/>

                </div>
                <div className="">
                    <center><img src='/swap/arrow_bottom_black.svg' style={{ width: "15px" }} /></center>
                </div>
            </div>
        </section>
    )
}
export default MobileNftlist