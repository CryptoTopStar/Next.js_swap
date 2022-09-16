import TransanctionSettingModal from "./transanctionSettingModal"
import { useEffect, useState } from "react"
const Modal = () => {
    const [settingButton, setSettingButton] = useState(false)
    const settingModal = () => {
        if (settingButton)
            return <TransanctionSettingModal hidden={hidden} />;
    }
    const hidden = () => {
        setSettingButton(!settingButton);
    }
    return (
        <>
            <section className="fixed z-10 w-1/3 bg-white rounded-md shadow-lg lg:p-10 sm:p-2 top-1/4 left-1/3 shadow-indigo-500/50">
                <img src='/navbar/settings.svg' className="float-right lg:h-6 md:h-4 sm:h-3" onClick={() => setSettingButton(!settingButton)}></img>
                <div className="mb-2">
                    <p className="font-bold lg:mb-2 sm:mb-1 lg:text-3xl sm:text-sm" style={{ color: "#2b2d3c" }}>EXCHANGE</p>
                    <p className="lg:text-2xl sm:mb-1 sm:text-xs" style={{ color: "#494d66" }}>SWAP NFT FOR TOKENS</p>
                </div>
                <div className="flex flex-row items-center justify-between mb-2 rounded-md lg:p-3 sm:p-1" style={{ border: "solid #494d66 0.5px" }}>
                    <input className="w-2/3 text-black bg-transparent focus:outline-none lg:text-lg sm:text-xs" type="text" placeholder="0.1" />
                    <button className="flex flex-row items-center text-black rounded-md lg:text-base lg:p-3 sm:p-1 sm:text-xs" style={{ border: "solid #494d66 0.5px" }}>
                        <img className="lg:h-4 sm:h-3 lg:mr-1 sm:mr-1" src="/swap/swapEther.svg" />
                        Eth
                        <img className="lg:h-2 sm:h-1 lg:mx-2 sm:mx-1" src="/swap/vectorBlack.svg" /></button>
                </div>
                <p className="mb-2"><center><img className="lg:h-2 md:h-1 sm:h-1" src="/swap/vectorBlack.svg" /></center></p>
                <div className="flex flex-row items-center justify-between mb-6 rounded-md lg:p-3 sm:p-1" style={{ border: "solid #494d66 0.5px" }}>
                    <input className="w-2/3 text-black bg-transparent focus:outline-none lg:text-lg sm:text-xs" type="text" placeholder="0.1" />
                    <button className="flex flex-row items-center text-black rounded-md lg:text-base lg:p-3 sm:p-1 sm:text-xs" style={{ border: "solid #494d66 0.5px" }}>
                        <img className="lg:h-4 sm:h-3 lg:mr-1 sm:mr-1" src="/swap/swapEther.svg" />
                        Eth
                        <img className="lg:h-2 sm:h-1 lg:mx-2 sm:mx-1" src="/swap/vectorBlack.svg" /></button>
                </div>
                <button type='button' className='w-full font-medium text-white rounded-md lg:text-base lg:p-5 sm:p-2 sm:text-xs' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>CONNECT WALLET</button>
            </section>
            {settingModal()}

        </>
    )
}

export default Modal