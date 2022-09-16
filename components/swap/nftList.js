
import NftItem from "./nftItem"
const Nftlist = () => {
    return (
        <section className="absolute bottom-0 right-0 z-50 w-3/12 bg-white">
            <div className="flex flex-row items-center justify-between p-4">
                <div><p className="text-lg text-black">Buy 5 NFT's</p></div>
                <div className="flex flex-row">
                    <p className="mr-4 text-base text-black">clear</p>
                    <img src="/swap/gridButton.svg" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between p-4 bg-f0f0f0">
                <div className="flex flex-row items-center">
                    <img src='/swap/rightArrow.svg' className="mr-2" />
                    <p>Buy Total:</p>
                </div>
                <div className="flex flex-row items-center">
                    <img src='/swap/etherum_black.svg' className="mr-2" />
                    <p>10.000</p>
                </div>
            </div>
            <div className="mx-4 mt-4">
                <NftItem src='/swap/nftImage/turtle.svg' />
                <NftItem src='/swap/nftImage/leopard.svg' />
                <NftItem src='/swap/nftImage/frog.svg' />
                <NftItem src='/swap/nftImage/nemo.svg' />
                <NftItem src='/swap/nftImage/mouse.svg' />
                <NftItem src='/swap/nftImage/small.svg' />
                <NftItem src='/swap/nftImage/simon.svg' />
                <NftItem src='/swap/nftImage/lion.svg' />
            </div>
            <div className="w-full mt-4">
                <center><img src='/swap/arrow_bottom_black.svg' /></center>
            </div>
        </section>
    )
}
export default Nftlist