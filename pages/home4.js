import Header from "../components/navbar";
import Background from "../components/swap/background";
import Market1 from "../components/swap/market1";
import ExchangeModal from "../components/swap/exchangeModal";
import Nftlist from "../components/swap/nftList";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
    return (
        <>
            <Market1 />
            <Whitebackground />
            <ExchangeModal />
            <Nftlist />
        </>
    )
}