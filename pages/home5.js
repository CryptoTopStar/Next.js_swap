import Market from "../components/swap/market";
import LiquidityModal from "../components/swap/liquidityModal";
import Header from "../components/navbar";
import Whitebackground from "../components/swap/whitebackground";


export default function swapPage() {
  return (
    <>
      <Market marginleft='294px' />
      <Whitebackground />
      <LiquidityModal />
    </>
  )
}
