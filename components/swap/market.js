const Market = () => {
    return (
    <section className="px-6 py-6 sm:px-12 md:px-28 sm:py-12 md:py-3" style={{ background: "#2c2d3c"}}>
        <div className="w-full mt-14">
            <div className="flex flex-row items-center lg:mb-8 lg:mx-40 sm:mb-4 sm:mx-20">
                <img src="/swap/cryptocurrency_eth.svg" className="h-8 mr-3"/>
                <p className="mr-3 text-3xl text-white">ETHERUM MARKET</p>
                <img src="/swap/vector.svg" className="h-3"/>
            </div>
            <div className="flex flex-row items-center mb-16 lg:mx-40 sm:mx-20">
                <img src="/swap/graph.svg" className="h-10 mr-3"/>
                <div className="flex flex-col">
                    <p style={{ color: "#6d7399"}}>Net Worth</p>
                    <p style={{ color: "a3ade5", fontWeight: "bold"}}>0.0000000000000</p>
                </div>
            </div>   
        </div>
    </section>
    )
  }
  
  export default Market