import SwapListItem from "./swapListItem";
const SelectTokenModal = (props) => {
    return (
        <div className='absolute left-0 right-0 z-30 m-auto bg-white rounded desktop:w-1/3 top-16 laptop:w-1/3 tablet:w-7/12 phone:w-9/12' >
            <div className="flex flex-row justify-between pr-2">
                <p className="mx-6 my-6 desktop:text-2xl laptop:text-lg tablet:text-base phone:text-md text-b-text">Select Token</p>
                <span onClick={() => props.selectTokenmodalHidden()} className="desktop:text-3xl laptop:text-xl tablet:text-lg phone:text-base close">&times;</span>
            </div>
            <div className="flex flex-row p-2">
                <input type='text' className="w-full py-4 rounded-sm desktop:text-2xl desktop:px-14 laptop:px-12 tablet:px-8 phone:px-6 bg-b-back text-b-text" placeholder="Token search..." />
                <img src='/swap/search.svg' className="absolute mt-4 desktop:mx-6 tablet:mx-2 laptop:mx-4 desktop:h-8 phone:mx-1 laptop:h-6 tablet:h-5 phone:h-5" />
            </div>
            <div className="flex flex-row p-2">
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">ETH</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">DAI</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">USDC</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">USDT</p>
                </div>
            </div>
            <div className="flex flex-row p-2">
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">ETH</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">DAI</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">USDC</p>
                </div>
                <div className="flex flex-row items-center mr-2 gradientBorderButton">
                    <img src='/swap/etherum.svg' className="mx-2 my-2 mr-2 desktop:h-6 laptop:h-4 tablet:h-3 phone:h-2" />
                    <p className="mr-2 text-b-text desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm">USDT</p>
                </div>
            </div>
            <div className="flex flex-row ">
                <div className="w-1/2 border-r-2 border-b-border">
                    <p className="w-full py-2 text-center desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm text-b-body bg-b-back">SWAP LIST</p>
                    <SwapListItem />
                    <SwapListItem />
                    <SwapListItem />
                    <SwapListItem />
                </div>
                <div className="w-1/2">
                    <p className="w-full py-2 text-center desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm text-b-body bg-b-back">SAVED</p>
                    <SwapListItem />
                    <SwapListItem />
                </div>

            </div>
        </div >
    )

}
export default SelectTokenModal;