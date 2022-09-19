import ChartItem from "./chart"
import Table from "./table"
const ChartContent = () => {
    return (
        <section className="flex flex-row bg-b-body ">
            <div className="w-7/12 m-4">
                <ChartItem />
            </div>
            <div className="w-5/12 p-4 mt-4 overflow-y-auto" style={{ height: "420px" }}>
                <Table />
            </div>
        </section>
    )
}
export default ChartContent