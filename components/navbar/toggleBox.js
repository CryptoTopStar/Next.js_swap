const ToggleBox = () => {
    return (
      <div className="absolute right-0 flex flex-col p-3 bg-white rounded-md top-11 w-72">
        <div className="flex flex-col px-5 py-2 border-b-2">
           <p className="text-sm text-left text-gray-300">Network</p>
           <p className="text-base text-left text-black">Etherum</p> 
        </div>
        <div className="flex flex-col px-5 py-2">
            <div className="flex flex-row items-center mt-3">
                <img src="/navbar/copy.svg" className="w-4 mr-4"/>
                <p style={{ color:"#37394d"}}>Copy Address</p>
            </div>
            <div className="flex flex-row items-center mt-3">
                <img src="/navbar/explorer.svg" className="w-4 mr-4"/>
                <p style={{ color:"#37394d"}}>View On Explorer</p>
            </div>
            <div className="flex flex-row items-center mt-3">
                <img src="/navbar/disconnect.svg" className="w-4 mr-4"/>
                <p style={{ color:"#37394d"}}>Disconnect Wallet</p>
            </div>
        </div>
      </div>
    )
  }
  
  export default ToggleBox