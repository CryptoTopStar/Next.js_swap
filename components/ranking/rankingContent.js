import RankingTable from "./rankingTable"
const RankingContent = () => {
    return (
        <section className="w-10/12 m-auto bg-f1f1f3">
            <div className="desktop:p-16 laptop:p-12 tablet:p-8 phone:p-4">
                <p className="text-3xl font-bold text-b-body"> Collection</p>
                <div className="flex flex-row justify-between mt-8 desktop:flex-row laptop:flex-row tablet:flex-row phone:flex-col">
                    <div className="flex flex-row mb-2">
                        <button className="flex flex-row items-center px-2 py-2 mr-4 border-2 rounded-lg border-989bb4 text-323546 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">All Categories <img src='/ranking/select_caret.svg' className="mx-2" /></button>
                        <button className="flex flex-row items-center px-2 py-2 border-2 rounded-lg border-989bb4 text-323546 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">All Chains <img src='/ranking/select_caret.svg' className="mx-2" /></button>
                    </div>
                    <div className="flex flex-row">
                        <button className="p-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">24h</button>
                        <button className="p-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">3d</button>
                        <button className="p-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">7d</button>
                        <button className="p-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm ">all</button>
                    </div>
                </div>
                <RankingTable />
                <div className="flex flex-row justify-center mt-4">
                    <button className="px-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">1</button>
                    <button className="px-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">2</button>
                    <button className="px-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">3</button>
                    <button className="px-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">4</button>
                    <button className="px-2 mr-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">5</button>
                    <button className="px-2 border-2 rounded-md text-323546 border-989bb4 desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">6</button>
                </div>
            </div>

        </section>
    )

}
export default RankingContent