import BuyNftList from "./buyNftList"
import NftGridItem from "./nftGridItem"
import { useEffect, useState } from "react"

const ChartContentItem = () => {
    const [desktop, setDesktop] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(screen.width)
            if (screen.width > 429) {
                setDesktop(true);
                console.log(desktop)
            }
            if (screen.width < 429) {
                setDesktop(false);
                console.log(desktop)
            }

        })
    }, []);
    const drawScreen = () => {
        if (desktop) {
            return (
                <>
                    <section className="relative " >
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
                    </section>

                </>
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