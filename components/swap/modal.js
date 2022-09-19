import TransanctionSettingModal from "./transanctionSettingModal"
import Background from "./background"
import { useEffect, useState } from "react"
import SelectTokenModal from "./selectTokenModal"
const Modal = () => {
    const [settingButton, setSettingButton] = useState(false)
    const [selectTokenModal, setSelectTokenModal] = useState(false);
    const settingModal = () => {
        if (settingButton)
            return <TransanctionSettingModal hidden={hidden} />;
    }
    const drawSelectTokenModal = () => {
        if (selectTokenModal)
            return (<>
                <SelectTokenModal selectTokenmodalHidden={selectTokenmodalHidden} />
                <Background />
            </>
            )
    }
    const hidden = () => {
        setSettingButton(!settingButton);
    }
    const selectTokenmodalHidden = () => {
        setSelectTokenModal(!selectTokenModal);
    }
    return (
        <>
            <section className="z-10 m-auto mt-6 mb-6 bg-white rounded desktop:w-2/4 laptop:w-6/12 tablet:w-7/12 phone:w-10/12 shadow-indigo-500/50 desktop:p-10 laptop:p-8 tablet:p-4 phone:p-4">
                <img src='/navbar/settings.svg' className="float-right desktop:h-8 laptop:h-6 tablet:h-5 phone:h-4" onClick={() => setSettingButton(!settingButton)}></img>
                <div className="mb-4">
                    <p className="font-bold desktop:text-3xl laptop:text-2xl tablet:text-lg phone:text-md " style={{ color: "#2b2d3c" }}>EXCHANGE</p>
                    <p className="desktop:text-2xl laptop:text-xl tablet:text-md phone:text-sm" style={{ color: "#494d66" }}>SWAP NFT FOR TOKENS</p>
                </div>
                <div className="flex flex-row items-center justify-between mb-4 rounded-md desktop:p-4 laptop:p-2 tablet:p-2 phone:p-2" style={{ border: "solid #494d66 0.5px" }}>
                    <input className="w-2/3 text-black bg-transparent focus:outline-none desktop:text-3xl laptop:text-xl tablet:text-base phone:text-md" type="text" placeholder="0.1" />
                    <button className="flex flex-row items-center text-black rounded-md desktop:text-xl desktop:p-3 laptop:p-2 laptop:text-base tablet:text-base tablet:p-1 phone:p-1 " style={{ border: "solid #494d66 0.5px" }} onClick={() => setSelectTokenModal(!selectTokenModal)}>
                        <img className="mr-2 desktop:h-6 laptop:h-5 tablet:h-4 phone:h-3" src="/swap/swapEther.svg" />
                        Eth
                        <img className="mx-1 desktop:h-2 laptop:h-2 tablet:h-2 phone:h-1" src="/swap/vectorBlack.svg" /></button>
                </div>
                <p className="mb-2"><center><img className="desktop:h-2 laptop:h-2 tablet:h-2 phone:h-2" src="/swap/vectorBlack.svg" /></center></p>
                <div className="flex flex-row items-center justify-between mb-4 rounded-md desktop:p-4 laptop:p-2 tablet:p-2 phone:p-2" style={{ border: "solid #494d66 0.5px" }}>
                    <input className="w-2/3 text-black bg-transparent focus:outline-none desktop:text-3xl laptop:text-xl tablet:text-base phone:text-md" type="text" placeholder="0.1" />
                    <button className="flex flex-row items-center text-black rounded-md desktop:text-xl desktop:p-3 laptop:p-2 laptop:text-base tablet:text-base tablet:p-1 phone:p-1 " style={{ border: "solid #494d66 0.5px" }} onClick={() => setSelectTokenModal(!selectTokenModal)}>
                        <img className="mr-2 desktop:h-6 laptop:h-5 tablet:h-4 phone:h-3" src="/swap/swapEther.svg" />
                        Eth
                        <img className="mx-1 desktop:h-2 laptop:h-2 tablet:h-2 phone:h-1" src="/swap/vectorBlack.svg" /></button>
                </div>
                <button type='button' className='w-full font-medium text-white rounded-md desktop:p-6 desktop:text-3xl laptop:p-4 laptop:text-xl tablet:text-base tablet:p-3 phone:p-2 tablet:text-md' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>CONNECT WALLET</button>
            </section>
            {settingModal()}
            {drawSelectTokenModal()}
        </>
    )
}

export default Modal