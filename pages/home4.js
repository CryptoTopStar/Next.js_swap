import Header from "../components/navbar";
import Background from "../components/swap/background";
import Market from "../components/swap/market";
import ExchangeModal from "../components/swap/exchangeModal";
import Nftlist from "../components/swap/nftList";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
    return (
        <>
            <Market marginleft='70px' />
            <ExchangeModal />
            <Nftlist />
        </>
    )
}