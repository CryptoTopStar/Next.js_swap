import Header from "../components/navbar";
import Background from "../components/swap/background";
import Market from "../components/swap/market";
import Modal from "../components/swap/modal";
import Nftlist from "../components/swap/nftList";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
    return (
        <>
            <Market />
            <Whitebackground />
            <Background />
            <Modal />
            <Nftlist />
        </>
    )
}