import LiquidityItem from "./liquidityItem"

const AddLiquidity = () => {
    return (
        <section className="flex flex-col justify-center p-4 m-auto mt-2 mb-2 bg-white rounded-md shadow-lg shadow-indigo-500/50 desktop:w-1/3 laptop:w-2/5 tablet:w-2/4 phone:w-10/12">
            <div className="mb-4">
                <p className="mb-2 font-bold text-b-body desktop:text-2xl laptop:text-xl tablet:text-lg phone:text-base">Your Liquidity</p>
                <p className="mb-2 text-b-text desktop:text-lg laptop:text-base tablet:text-md phone:text-sm">Remove liquidity to receive tokens back</p>
            </div>
            <div className="w-3/4 m-auto mb-6 overflow-auto border-2 rounded-md h-80">
                <LiquidityItem />
                <LiquidityItem />
                <LiquidityItem />
                <LiquidityItem />
                <LiquidityItem />
            </div>
            <button type='button' className='w-3/4 m-auto font-medium text-white rounded-md desktop:p-2 desktop:text-2xl laptop:p-2 laptop:text-xl tablet:text-base tablet:p-3 phone:p-2 tablet:text-md' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>ADD LIQUIDITY</button>
        </section>
    )
}
export default AddLiquidity