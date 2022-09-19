const ChartHeader = () => {
    return (
        <section className="flex flex-row items-center p-8 bg-b-body phone:flex-col desktop:flex-row laptop:flex-row tablet:flex-row">
            <div className="mb-4 mr-8">
                <img src='/charts/nftimage.svg' className="desktop:h-48 laptop:h-40 tablet:h-36 phone:h-32" />
            </div>
            <div className="">
                <p className="mb-6 text-white desktop:text-3xl laptop:text-2xl tablet:text-2xl phone:text-lg">DigiDaigaku Genesis</p>
                <p className="mb-6 text-989bb4 desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Created by: 0x12ea1...f0af</p>
                <p className="text-white desktop:text-xl laptop:text-lg tablet:text-base phone:text-md">Shellz Orb is a lore and art-based brand. Our journey begins in NFTs with the goal of making Web3 within an arm's reach of every person on earth....</p>
            </div>
        </section >
    )
}
export default ChartHeader