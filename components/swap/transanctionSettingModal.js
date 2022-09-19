const TransanctionSettingModal = (props) => {
    return (
        <div id="myModal" className="modal ">
            <div className="rounded-md modal-content desktop:w-4/12 laptop:w-5/12 tablet:w-6/12 phone:w-8/12">
                <span onClick={() => props.hidden()} className="float-right desktop:text-2xl close laptop:text-xl tablet:text-base phone:text-sm">&times;</span>
                <p className="p-2 text-black border-b-2 border-gray-300 desktop:text-2xl laptop:text-xl tablet:text-base phone:text-sm">Transanction Settings</p>
                <div className="p-2 mt-6">
                    <p className="desktop:text-2xl laptop:text-xl tablet:text-base phone:text-sm" style={{ color: "#5b6080" }}><center>Item purchase Per/Pool</center></p>
                    <div className="flex flex-row mx-auto mt-4 mr-auto rounded desktop:w-7/12 laptop:w-6/12 tablet:w-6/12 phone:w-8/12">
                        <input type="text" className="w-3/5 mx-0 text-right text-black rounded-sm outline-none desktop:text-2xl desktop:p-4 laptop:text-xl laptop:p-3 tablet:p-2 tablet:text-base phone:p-1 phone:text-sm" style={{ background: "#F1F1FD" }} placeholder="5" />
                        <button className="w-2/5 rounded-sm" style={{ backgroundImage: "linear-gradient(90deg, rgba(250, 2, 255, 0.1) -3.16%, rgba(6, 214, 223, 0.1) 100%)" }}><p className=" desktop:text-2xl laptop:text-xl tablet:text-base phone:text-sm gradient_text">ITEMS</p></button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default TransanctionSettingModal