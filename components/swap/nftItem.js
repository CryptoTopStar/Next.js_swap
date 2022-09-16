const NftItem = ({ src }) => {
    return (
        <div className="flex flex-row items-center justify-between mb-2 nftitem">
            <div className="flex flex-row items-center">
                <img src={src} className="mr-3 h-14" />
                <div className="flex flex-col">
                    <p className="mb-3">CloneX-XTas...</p>
                    <p className="text-black">#1</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <img src="/swap/etherum_black.svg" className="mr-2" />
                <p className="mr-2">3.3</p>
                <img src='/swap/nftimage/nftvector.svg' className="mr-2" />
            </div>
        </div>
    )
}
export default NftItem