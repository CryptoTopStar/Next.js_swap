import Background from "../components/swap/background";
import Market from "../components/swap/market";
import Modal1 from "../components/swap/modal1";
import Nftlist from "../components/swap/nftList";


export default function swapPage() {
  return (
    <>
      <Market />
      <Modal1 />
      <Nftlist />
      <Background />
    </>
  )
}