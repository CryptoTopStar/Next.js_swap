import Market from "../components/swap/market";
import AddLiquidity from "../components/swap/addLiquidity";
import Header from "../components/navbar";


export default function swapPage() {
    return (
        <>
            <Market />
            <AddLiquidity />
        </>
    )
}   