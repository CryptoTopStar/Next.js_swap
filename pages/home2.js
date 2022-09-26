import Header from "../components/navbar";
import Background from "../components/swap/background";
import Market from "../components/swap/market";
import Modal1 from "../components/swap/modal1";
import Nftlist from "../components/swap/nftList";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
  return (
    <>
      <Market marginleft='294px' />
      <Modal1 />
    </>
  )
}