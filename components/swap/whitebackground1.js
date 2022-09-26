import { useEffect, useState } from "react";
const Whitebackground1 = () => {
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
                <section style={{ marginTop: "0px", height: "775px", background: "#f1f1f3", width: "1440px" }}>

                </section>
            )
        }
        if (!desktop) {
            return (
                <section style={{ marginTop: "0px", height: "1331px", background: "#f1f1f3", width: "430px" }}>

                </section>
            )


        }
    }
    return drawScreen()

}
export default Whitebackground1