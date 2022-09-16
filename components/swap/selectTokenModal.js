import SwapListItem from "./swapListItem";
const SelectTokenModal = (props) => {
    return (
        <div style={{ position: "absolute", top: "8vw", left: "35vw", right: "35vw", background: "white", zIndex: "50", borderRadius: "0.5vw" }}>
            <div className="flex flex-row justify-between pr-2">
                <p className="mx-6 my-6 text-2xl text-b-text">Select Token</p>
                <span onClick={() => props.selectTokenmodalHidden()} className="text-5xl close">&times;</span>
            </div>
            <div className="flex flex-row p-2">
                <input type='text' className="w-full py-4 text-xl rounded-sm px-14 bg-b-back text-b-text" placeholder="Token search..." />
                <img src='/swap/search.svg' className="absolute h-6 mx-6 mt-4" />
            </div>
            <div className="flex flex-row p-2">
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">ETH</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">DAI</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">USDC</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">USDT</p>
                </div>
            </div>
            <div className="flex flex-row p-2">
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">ETH</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">DAI</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">USDC</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="h-6 mx-2 my-2 mr-2" />
                    <p className="mr-2 text-b-text">USDT</p>
                </div>
            </div>
            <div className="flex flex-row ">
                <div className="w-1/2 border-r-2 border-b-border">
                    <p className="w-full py-2 text-2xl text-center text-b-body bg-b-back">SWAP LIST</p>
                    <SwapListItem />
                    <SwapListItem />
                    <SwapListItem />
                    <SwapListItem />
                </div>
                <div className="w-1/2">
                    <p className="w-full py-2 text-2xl text-center text-b-body bg-b-back">SAVED</p>
                    <SwapListItem />
                    <SwapListItem />
                </div>

            </div>
        </div >
    )

}
export default SelectTokenModal;