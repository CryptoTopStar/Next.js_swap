const LandingPage = () => {
    return (
        <section className="desktop:py-40 laptop:py-36 tablet:py-24 phone:py-12 bg-1d1d28">
            <p className="text-center smells_good desktop:text-5xl laptop:text-3xl tablet:text-xl phone:text-2xl">Something Smells Good</p>
            <img src='/landingpage/curve.svg' className="m-auto desktop:w-3/5 laptop:w-4/5 tablet:w-full phone:w-full desktop:mt-24 laptop:mt-16 tablet:mt-12 phone:mt-8" />
            <div className="flex flex-row p-4 m-auto desktop:w-3/5 laptop:w-4/5 tablet:w-full phone:w-full phone:flex-col desktop:flex-row laptop:flex-row tablet:flex-row">
                <img src='/landingpage/landingimage.svg' className="desktop:w-1/3 laptop:w-1/3 tablet:w-1/3 phone:w-full" />
                <p className="m-auto phone:text-center desktop:w-2/3 laptop:w-2/3 tablet:w-2/3 phone:w-full desktop:mx-36 laptop:mx-24 desktop:mt-36 laptop:mt-24 smells_good desktop:text-3xl laptop:text-3xl tablet:text-lg phone:text-2xl tablet:mx-20 tablet:mt-20">We are making desert</p>
            </div>
            <img src='/landingpage/border.svg' className="m-auto desktop:mt-24 laptop:mt-16 tablet:mt-12 phone:mt-8 desktop:w-3/5 laptop:w-4/5 tablet:w-full phone:w-full" />
            <p className="text-center desktop:mt-24 laptop:mt-16 tablet:mt-16 phone:mt-8 smells_good desktop:text-5xl laptop:text-3xl tablet:text-xl phone:text-2xl">Available On</p>
            <p className="text-center desktop:text-xl laptop:text-lg tablet:text-base phone:text-md text-9b9b9b">Buy, List and Swap NFTs on the following chains</p>
            <div className="flex flex-row justify-between p-8 m-auto desktop:mt-24 laptop:mt-16 tablet:mt-16 phone:mt-8 desktop:w-6/12 laptop:w-9/12 tablet:w-full phone:w-full ">
                <div className="">
                    <center><img src='/landingpage/cryptocurrency_eth.svg' className="mb-4 desktop:h-48 laptop:h-36 tablet:h-24 phone:h-12" /></center>
                    <p className='text-center text-white desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-sm'>AVAILABLE</p>
                </div>
                <div className="">
                    <center><img src='/landingpage/polygon.svg' className="mb-4 desktop:h-48 laptop:h-36 tablet:h-24 phone:h-12" /></center>
                    <p className='text-center desktop:text-2xl laptop:text-xl text-9b9b9b tablet:text-lg phone:text-sm'>COMING SOON</p>
                </div>
                <div className="">
                    <center><img src='/landingpage/binance.svg' className="mb-4 desktop:h-48 laptop:h-36 tablet:h-24 phone:h-12" /></center>
                    <p className='text-center desktop:text-2xl laptop:text-xl text-9b9b9b tablet:text-lg phone:text-sm'>COMING SOON</p>
                </div>
            </div>
            <img src='/landingpage/border.svg' className="m-auto desktop:mt-24 laptop:mt-16 tablet:mt-12 phone:mt-8 desktop:w-3/5 laptop:w-4/5 tablet:w-full phone:w-full" />
            <p className="text-center desktop:mt-24 laptop:mt-16 tablet:mt-12 phone:mt-8 smells_good desktop:text-5xl laptop:text-3xl tablet:text-xl phone:text-2xl">Join the Community</p>
            <p className="text-center desktop:text-xl laptop:text-lg tablet:text-base phone:text-md text-9b9b9b">In a gentle way, you can shake the world</p>
            <div className="flex justify-between p-8 m-auto desktop:mt-24 laptop:mt-16 tablet:mt-12 phone:mt-8 desktop:w-3/5 laptop:w-4/5 tablet:w-full phone:w-full desktop:flex-row laptop:flex-row tablet:flex-row phone:flex-col">
                <div className="flex flex-row items-center m-auto mb-4">
                    <img src='/landingpage/discord.svg' className="h-24 mr-4" />
                    <p className='text-2xl smells_good desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-lg'>DISCORD</p>
                </div>
                <div className="flex flex-row items-center m-auto mb-4">
                    <img src='/landingpage/telegram.svg' className="h-24 mr-4" />
                    <p className='text-2xl smells_good desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-lg'>TELEGRAM</p>
                </div>
                <div className="flex flex-row items-center m-auto mb-4">
                    <img src='/landingpage/twitt.svg' className="h-24 mr-4" />
                    <p className='text-2xl smells_good desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-lg'>TWITTER</p>
                </div>
            </div>
        </section>
    )

}
export default LandingPage