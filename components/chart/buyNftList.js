import BuyNftListItem from "./buyNFTListItem"

const BuyNftList = () => {
    return (
        <>
            <div className="absolute bottom-0 right-0 z-20 desktop:w-1/4 laptop:w-2/4 tablet:w-2/4 phone:hidden desktop:block tablet:block laptop:block bg-37394c" style={{ height: "800px" }}>
                <div className="flex flex-row items-center justify-between p-8">
                    <p className="text-2xl text-white"> Buy 5 NFT's</p>
                    <p className="text-base text-9b9b9b">clear</p>
                </div>
                <div style={{ height: "600px", overflowY: "auto" }}>
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                    <BuyNftListItem />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 z-30 flex-row items-center justify-between p-4 bg-white desktop:flex laptop:flex tablet:flex desktop:w-1/4 laptop:w-2/4 tablet:w-2/4 phone:hidden ">
                <div className="flex flex-row items-baseline">
                    <img src='/charts/arrowright.svg' className="mr-2" />
                    <p className="text-b-text">Buy Total:</p>
                    <p className="mr-2 text-2xl font-bold text-b-body">10.000</p>
                    <p className="text-b-text">ETH</p>
                </div>
                <div className="border-2 rounded-lg nftGridButton bg-37394c">
                    <button className="px-4 py-2">Buy</button>
                </div>
            </div>

        </>
    )
}
export default BuyNftList