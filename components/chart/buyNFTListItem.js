const BuyNftListItem = () => {
    return (
        <div className="flex flex-row items-center justify-between p-4 border-b-2 border-5c6080">
            <div className="flex flex-row items-center">
                <img src='/swap/nftImage/frog.svg' className="rounded_md" />
                <div className="flex flex-col mx-4">
                    <p className="mb-3 text-white">#2311</p>
                    <div className="flex flex-row items-center">
                        <img src='/charts/cryptocurrency_eth.svg' className="mr-4" />
                        <p className="text-white">3.3</p>
                    </div>
                </div>
            </div>
            <p className="text-3xl text-d6224d">&times;</p>
        </div >

    )

}
export default BuyNftListItem