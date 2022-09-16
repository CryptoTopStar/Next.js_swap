const TransanctionSettingModal = (props) => {
    return (
        <div id="myModal" className="modal">
            <div className="rounded-md modal-content">
            <span onClick={() => props.hidden()} className="lg:text-2xl md:text-base close sm:text-sm xs:text-tiny">&times;</span>
            <p className="p-2 text-black border-b-2 border-gray-300 lg:text-2xl md:text-base sm:text-tiny xs:text-tiny">Transanction Settings</p>
            <div className="p-2 lg:mr-10 lg:mx-10 lg:mb-16 lg:mt-16 md:mb-8 md:mt-8 md:mr-5 md:mx-5">
                <p className="lg:mb-4 lg:text-lg md:text-sm p-auto md:mb-2 sm:text-tiny sm:mb-1 xs:text-tiny" style={{color: "#5b6080"}}><center>Item purchase Per/Pool</center></p>
                <div className="flex flex-row w-full lg:mb-4 sm:mb-1">
                    <input type="text" className="w-3/5 mx-0 text-right text-black rounded-sm outline-none lg:p-4 sm:p-1 lg:text-lg sm:text-tiny xs:text-tiny" style={{background: "#F1F1FD"}} placeholder="5" />
                    <button className="w-2/5 rounded-sm" style={{ backgroundImage: "linear-gradient(90deg, rgba(250, 2, 255, 0.1) -3.16%, rgba(6, 214, 223, 0.1) 100%)"}}><p className="lg:text-lg sm:text-tiny lg:p-auto gradient_text sm:p-1 xs:text-tiny">ITEMS</p></button>
                </div>
            </div>
            </div>
        </div>
    )

}
export default TransanctionSettingModal