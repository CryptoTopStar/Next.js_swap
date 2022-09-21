import TransanctionSettingModal from "./transanctionSettingModal"
import Background from "./background"
import { useEffect, useState } from "react"
import SelectTokenModal from "./selectTokenModal"
const Modal = () => {
    const [settingButton, setSettingButton] = useState(false)
    const [selectTokenModal, setSelectTokenModal] = useState(false);
    const settingModal = () => {
        if (settingButton)
            return <><TransanctionSettingModal hidden={hidden} />
                <Background /></>;
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
        <section className="m-auto bg-transparent rounded-lg" style={{ position: "absolute", width: "1440px", top: "276px", paddingLeft: "290px", paddingRight: "290px" }}>
            <div className="relative bg-white rounded" style={{ padding: "60px", boxShadow: "0px 10px 20px rgba(47, 49, 66, 0.1)" }}>
                <div>
                    <p className="font-bold" style={{ color: "#2b2d3c", fontSize: "32px", marginBottom: "6px" }}>EXCHANGE</p>
                    <p style={{ color: "#494d66", fontSize: "20px" }}>SWAP NFT FOR TOKENS</p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-md" style={{ border: "solid #494d66 0.5px", marginTop: "40px", padding: "30px" }}>
                    <input className="w-2/3 text-black bg-transparent focus:outline-none" type="text" placeholder="0.1" style={{ fontSize: "32px", padding: "2px" }} />
                    <button className="flex flex-row items-center rounded-lg" style={{ border: "solid #b8bacc 0.5px", padding: "18px 15px 18px 13px" }} onClick={() => setSelectTokenModal(!selectTokenModal)}>
                        <img src="/swap/swapEther.svg" style={{ height: "24px", marginRight: "8px" }} />
                        <p style={{ color: "#2b2d3c", fontSize: "20px", marginRight: "15px" }}>Eth</p>
                        <img src="/swap/vectorBlack.svg" style={{ width: "14px" }} /></button>
                </div>
                <center><img src="/swap/vectorBlack.svg" style={{ marginTop: "18px", width: "14px" }} /></center>
                <div className="flex flex-row items-center justify-between rounded-md" style={{ border: "solid #494d66 0.5px", marginTop: "18px", padding: "30px" }}>
                    <input className="w-2/3 text-black bg-transparent focus:outline-none" type="text" placeholder="0.1" style={{ fontSize: "32px", padding: "2px" }} />
                    <button className="flex flex-row items-center rounded-lg" style={{ border: "solid #b8bacc 0.5px", padding: "18px 15px 18px 13px" }} onClick={() => setSelectTokenModal(!selectTokenModal)}>
                        <img src="/swap/swapEther.svg" style={{ height: "24px", marginRight: "8px" }} />
                        <p style={{ color: "#2b2d3c", fontSize: "20px", marginRight: "15px" }}>Eth</p>
                        <img src="/swap/vectorBlack.svg" style={{ width: "14px" }} /></button>
                </div>
                <button type='button' className='w-full font-medium text-white rounded-md' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", marginTop: "44px", padding: "28px 272px", fontSize: "20px" }}>CONNECT WALLET</button>
                <img src='/navbar/settings.svg' onClick={() => setSettingButton(!settingButton)} style={{ position: "absolute", top: "34px", right: "34px", height: "28px" }}></img>
                {settingModal()}
                {drawSelectTokenModal()}
            </div>
        </section>
    )
}

export default Modal