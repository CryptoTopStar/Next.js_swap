import ChartItem from "./chart"
import Table from "./table"
const ChartContent = () => {
    return (
        <section className="flex bg-b-body desktop:flex-row laptop:flex-row tablet:flex-row phone:flex-col">
            <div className="m-4 desktop:w-7/12 laptop:w-7/12 tablet:w-7/12 phone:w-full">
                <ChartItem />
            </div>
            <div className="p-4 mt-4 overflow-y-auto desktop:w-5/12 laptop:w-5/12 tablet:w-5/12 phone:w-full" style={{ height: "420px" }}>
                <Table />
            </div>
        </section>
    )
}
export default ChartContent