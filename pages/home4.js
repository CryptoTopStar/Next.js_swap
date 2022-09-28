import Header from "../components/navbar";
import Background from "../components/swap/background";
import Market from "../components/swap/market";
import ExchangeModal from "../components/swap/exchangeModal";
import Nftlist from "../components/swap/nftList";
import Whitebackground from "../components/swap/whitebackground";
import { useState, useEffect } from "react";
import MobileNftlist from "../components/swap/moblileNftlist";


export default function swapPage() {
    const [desktop, setDesktop] = useState(false)
    useEffect(() => {
        console.log("-----userEffect-----");
        function handleResize() {
            // console.log(screen.width)
            if (screen.width > 429) {
                setDesktop(true);
                // console.log(desktop)
            }
            if (screen.width < 429) {
                // console.log("ok")
                setDesktop(false);
                // console.log(desktop)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize();
    }, []);
    const drawScreen = () => {
        if(desktop){
            return (
                <>
                <Market marginleft='70px' />
                <ExchangeModal />
                <Nftlist />
                </>
            )
        }
        if(!desktop)
        {
            return (
                <>
                <Market marginleft='70px' />
                <MobileNftlist />
                </>
            )

        }
    }
    return drawScreen()
}