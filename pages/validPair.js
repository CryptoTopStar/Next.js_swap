import Market from "../components/swap/market";
import ValidPairModal from "../components/swap/validPairModal";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
    return (
        <>
            <Market marginleft='294px' />
            <Whitebackground />
            <ValidPairModal />
        </>
    )
}   