
export default function BestSellerSlide({ imgSrc, title, price }) {
    return (
        <div
            className="keen-slider__slide w-[236px] lg:min-h-[450px] p-4 lg:p-5 relative bg-bgLighterColor
             dark:bg-bgDarkerColor flex flex-col justify-between items-center lg:items-stretch gap-2 lg:gap-5
             rounded-2xl shadow-defaultShadowStore overflow-hidden bg-white"
            style={{
                transform: 'translate3d(0px, 0px, 0px)',
                minWidth: '236px',
                maxWidth: '236px',
            }}>
            <div className="w-full flex flex-col justify-between items-center lg:items-stretch gap-5">
                <a href="#">
                    <img
                        className="size-32 lg:size-48 object-cover rounded-2xl"
                        alt={title}
                        src={imgSrc}
                    />
                </a>
                <p className="w-full text-right font-medium text-base text-textPrimaryLightColor
                 dark:text-textPrimaryDarkColor overflow-scroll lg:!leading-8">
                    {title}
                </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2.5">
                <a className="flex flex-row justify-start items-center space-x-2" href="#">

          <span className="text-right font-bold text-lg text-[#0D9488] dark:text-customGreen">
            {price}
              <span className="text-right text-xs font-normal"> تومان </span>
          </span>
                </a>
                <button
                    className="w-full h-10 font-normal text-sm text-textPrimaryLightColor
                     dark:text-textPrimaryDarkColor hover:text-textPrimaryDarkColor
                     bg-bgLightColor dark:bg-bgDarkColor hover:bg-customGreen dark:hover:bg-customGreen
                      rounded-xl duration-300 flex flex-row justify-center items-center gap-2">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
                        </path>
                    </svg>
                    <span className="hidden lg:inline">
                                    افزودن به سبد خريد
                                </span>
                </button>
            </div>
        </div>
    );
}
