import Background from "./background"
import LiquidityItem from "./liquidityItem"

const AddLiquidity = () => {
    return (
        <section style={{ position: "absolute", width: "1440px", top: "370px", paddingLeft: "400px", paddingRight: "400px" }}>
            <div style={{ background: "white", padding: "60px", borderRadius: "20px" }}>
                <div >
                    <p className="font-bold text-b-body" style={{ fontSize: "20px", lineHeight: "24px", marginBottom: "16px" }}>Your Liquidity</p>
                    <p className=" text-b-text" style={{ fontSize: "16px" }}>Remove liquidity to receive tokens back</p>
                </div>
                <div className="" style={{ margin: "43px 50px 0px 50px", border: "solid #b8bacc 1px", height: "369px", overflowY: "auto" }}>
                    <LiquidityItem />
                    <LiquidityItem />
                    <LiquidityItem />
                    <LiquidityItem />
                    <LiquidityItem />
                </div>
                <button type='button' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", margin: "28px 50px 0px 50px", padding: "19px 130px 19px 130px", fontSize: "20px", borderRadius: "10px" }}>ADD LIQUIDITY</button>
            </div>
        </section>
    )
}
export default AddLiquidity