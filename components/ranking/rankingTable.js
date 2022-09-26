import { useEffect, useState } from "react"

const RankingTable = () => {
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
                <div className="flex flex-col" style={{ marginBottom: "92px" }}>
                    <div style={{ padding: "45px 70px 28px 80px" }} className='flex flex-row items-center'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>#</p>
                        </div>
                        <div style={{ marginLeft: "40px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}>COLLECTION</p>
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: "550px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> FLOOR PRICE</p>
                            <img src='/ranking/th_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: "40px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}>VOLUME</p>
                            <img src='/ranking/th_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: "40px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}>SALES</p>
                            <img src='/ranking/th_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: "40px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}>ITEMS</p>
                            <img src='/ranking/th_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: "40px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}>POOLS</p>
                            <img src='/ranking/th_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                        </div>
                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                    <div style={{ padding: "16px 70px 16px 80px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "523px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "63px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "27px", width: "90px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "40px", width: "60px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 16</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "38px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 12</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "46px", width: "60px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 221</p>
                        </div>

                    </div>
                </div >

            )
        }
        if (!desktop) {
            return (
                <div className="flex flex-col" style={{ marginBottom: "0px", overflowX: "auto" }}>
                    <div style={{ padding: "36px 10px 24px 19px" }} className='flex flex-row items-center'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>#</p>
                        </div>
                        <div style={{ marginLeft: "40px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}>COLLECTION</p>
                        </div>
                        <div className="flex flex-row items-center" style={{ marginLeft: "115px" }}>
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> FLOOR PRICE</p>
                            <img src='/ranking/th_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                    <div style={{ padding: "22px 18px 17px 16px" }} className='flex flex-row items-center table_tr'>
                        <div>
                            <p style={{ fontSize: "16px", color: "#494d66" }}>1</p>
                        </div>
                        <div style={{ marginLeft: "40px" }} className='flex flex-row items-center'>
                            <img src='/ranking/collection1.svg' height={{ width: "40px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66", marginLeft: "16px", width: "126px", color: '#494d66', fontSize: "16px", fontWeight: "500" }}>Boreed ape yacht...</p>
                        </div>
                        <div className="flex flex-row items-center justify-end" style={{ marginLeft: "23px", width: "128px" }}>
                            <img src='/ranking/td_icon.svg' style={{ height: "12px", marginLeft: "5px" }} />
                            <p style={{ fontSize: "16px", fontWeight: "400", color: "#494d66" }}> 80</p>
                        </div>
                    </div>
                </div >
            )
        }

    }
    return drawScreen()
}
export default RankingTable