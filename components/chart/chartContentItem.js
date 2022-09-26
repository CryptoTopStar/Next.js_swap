import BuyNftList from "./buyNftList"
import NftGridItem from "./nftGridItem"
import { useEffect, useState } from "react"

const ChartContentItem = () => {
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
        drawScreen()
    }, []);
    const drawScreen = () => {
        if (desktop) {
            return (
                <div className="w-full bg-b-body">  
                <section style={{width:"1440px" , margin:"auto"}} className=" bg-b-body">
                    <div className="relative " >
                        <div className="grid grid-cols-4 overflow-auto bg-b-body" style={{ height: "1156px", padding: "40px 70px" }}>
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                        </div>
                        <BuyNftList />
                    </div>
                    </section>
                </div>
            )
        }
        if (!desktop) {
            return (
                <>
                    <section className="relative " >
                        <div className="grid grid-cols-1 overflow-auto bg-b-body" style={{ height: "800px", padding: "40px 40px" }}>
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                            <NftGridItem />
                        </div>
                    </section>

                </>
            )
        }
    }
    return drawScreen()

}
export default ChartContentItem