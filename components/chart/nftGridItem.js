const NftGridItem = () => {
    return (
        <div className="m-2 bg-484c66 nftGridItem" style={{ height: "320px" }}>
            <img src="/charts/nftimage.svg" className="px-4 py-4 rounded-md" />
            <p className="px-4 m-2 text-d9d9d9">#1975</p>
            <div className="flex flex-row items-center justify-between px-4">
                <div>
                    <p className="mb-2 font-bold text-f2f2f2">Price</p>
                    <p className="text-white">11.000003ETH</p>
                </div>
                <div className="nftGridButton">
                    <button className="p-2">Buy</button>
                </div>
                <div className="nftGridButton">
                    <button className="p-2">+ADD</button>
                </div>
            </div>
        </div >
    )


}
export default NftGridItem