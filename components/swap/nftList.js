
import NftItem from "./nftItem"
const Nftlist = () => {
    return (
        <section className="absolute bottom-0 right-0 z-50 bg-white desktop:w-3/12 laptop:w-4/12 tablet:w-5/12 phone:w-11/12">
            <div className="flex flex-row items-center justify-between p-4">
                <div><p className="text-black desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Buy 5 NFT's</p></div>
                <div className="flex flex-row">
                    <p className="mr-4 desktop:text-base laptop:text-md tablet:text-sm text-tiny">clear</p>
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
            <div className="mx-4 mt-4 overflow-y-auto desktop:h-96 laptop:h-96 tablet:h-80 phone:h-40">
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