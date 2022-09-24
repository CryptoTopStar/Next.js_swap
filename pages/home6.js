import Market from "../components/swap/market";
import AddLiquidity from "../components/swap/addLiquidity";
import Header from "../components/navbar";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
    return (
        <>
            <Market marginleft='294px' />
            <Whitebackground />
            <AddLiquidity />
        </>
    )
}   