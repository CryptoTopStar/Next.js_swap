import Market from "../components/swap/market";
import Configuration from "../components/swap/configuration";
import Header from "../components/navbar";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
    return (
        <>
            <Market />
            <Whitebackground />
            <Configuration />
        </>
    )
}   