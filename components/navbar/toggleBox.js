const ToggleBox = () => {
  return (
    <div className="absolute z-50 bg-white rounded-md" style={{ top: "64px", right: "0px", width: "230px", paddingRight: "12px", paddingLeft: "12px", boxShadow: "0px 10px 20px rgba(47, 49, 66, 0.1)" }}>
      <div className="flex flex-col" style={{ paddingTop: "24px", paddingBottom: "17px", paddingLeft: "4px", borderBottom: "1px solid #E6E6E6" }}>
        <p style={{ fontSize: "14px", color: "#919299", marginBottom: "12px", textAlign: "left" }}>Network</p>
        <p style={{ fontSize: "16px", color: "#2b2d3c", textAlign: "left" }}>Etherum</p>
      </div>
      <div className="flex flex-col" style={{ marginTop: "16px" }}>
        <div className="flex flex-row items-center" style={{ marginLeft: "4px" }}>
          <img src="/navbar/copy.svg" style={{ width: "16px", marginRight: "8px" }} />
          <p style={{ color: "#37394d", fontSize: "16px" }}>Copy Address</p>
        </div>
        <div className="flex flex-row items-center" style={{ marginLeft: "4px", marginTop: "24px" }}>
          <img src="/navbar/explorer.svg" style={{ width: "16px", marginRight: "8px" }} />
          <p style={{ color: "#37394d", fontSize: "16px" }}>View On Explorer</p>
        </div>
        <div className="flex flex-row items-center" style={{ marginLeft: "4px", marginTop: "24px", marginBottom: "24px" }}>
          <img src="/navbar/disconnect.svg" style={{ width: "16px", marginRight: "8px" }} />
          <p style={{ color: "#37394d", fontSize: "16px" }}>Disconnect Wallet</p>
        </div>
      </div>
    </div >
  )
}

export default ToggleBox