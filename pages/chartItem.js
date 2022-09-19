import ChartButtons from "../components/chart/chartButtons"
import ChartHeader from "../components/chart/chartHeader"
import ChartContentItem from "../components/chart/chartContentItem"
import BuyNftList from "../components/chart/buyNftList"
export default function chartVolumePage() {
    return (
        <>
            <ChartHeader />
            <ChartButtons />
            <ChartContentItem />
            <BuyNftList />
        </>
    )
}