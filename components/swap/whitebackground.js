import { useEffect, useState } from "react";
const Whitebackground = () => {
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
                <section style={{ marginTop: "0px", height: "775px", background: "#f1f1f3", width: "100vw" }}>

                </section>
            )
        }
        if (!desktop) {
            return (
                <section style={{ marginTop: "0px", height: "775px", background: "#f1f1f3", width: "100vw" }}>

                </section>
            )


        }
    }
    return drawScreen()

}
export default Whitebackground