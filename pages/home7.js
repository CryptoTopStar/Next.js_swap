import Market from "../components/swap/market";
import Configuration from "../components/swap/configuration";
import Header from "../components/navbar";
import Whitebackground2 from "../components/swap/whitebackground2";


export default function swapPage() {
    return (
        <>
            <Market marginleft='294px' />
            <Whitebackground2 />
            <Configuration />
        </>
    )
}   