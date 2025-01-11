import "keen-slider/keen-slider.min.css";
import {useKeenSlider} from "keen-slider/react";
import {useEffect} from "react";


export function MotionGraphics() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        drag: true,
        slides: { perView: 1, spacing: 10 },
        created: () => {
            console.log("Keen Slider created!");
        },
    });
    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 3000);

        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section className="navigation-wrapper2 w-full px-4 lg:px-16 relative flex flex-col justify-center items-center">
            <div ref={sliderRef} className="keen-slider" data-keen-slider-reverse="">
                <a
                    className="keen-slider__slide w-full h-44 lg:h-[30rem] rounded-xl lg:rounded-3xl object-contain lg:object-cover"
                    href="/undefined"
                    style={{
                        transform: 'translate3d(1424px, 0px, 0px)',
                        minWidth: '1408px',
                        maxWidth: '1408px',
                    }}
                >
                    <img
                        className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
                        alt="/uploads/images/2024/9/fYCcSRq0QZJjE7YjHctfSAVE_۲۰۲۲۰۱۱۲_۱۵۵۸۱۷.jpg"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src="https://my.bamadar.com/uploads/images/2024/9/fYCcSRq0QZJjE7YjHctfSAVE_۲۰۲۲۰۱۱۲_۱۵۵۸۱۷.jpg"
                    />
                </a>
                <a
                    className="keen-slider__slide w-full h-44 lg:h-[30rem] rounded-xl lg:rounded-3xl object-contain lg:object-cover"
                    href="/undefined"
                    style={{
                        transform: 'translate3d(1440px, 0px, 0px)',
                        minWidth: '1408px',
                        maxWidth: '1408px',
                    }}
                >
                    <img
                        className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
                        alt="/uploads/images/2024/9/OkGV8WURTRfVuhNwM1ssbamadarcom-20210811-0006.jpg"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src="https://my.bamadar.com/uploads/images/2024/9/OkGV8WURTRfVuhNwM1ssbamadarcom-20210811-0006.jpg"
                    />
                </a>
                <a
                    className="keen-slider__slide w-full h-44 lg:h-[30rem] rounded-xl lg:rounded-3xl object-contain lg:object-cover"
                    href="/promotions"
                    style={{
                        transform: 'translate3d(-4240px, 0px, 0px)',
                        minWidth: '1408px',
                        maxWidth: '1408px',
                    }}
                >
                    <img
                        className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
                        alt="/uploads/images/2024/12/24jwdpef7X6fbc5721-e942-4f3d-a319-6245bd2e5a07.jfif"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src="https://my.bamadar.com/uploads/images/2024/12/24jwdpef7X6fbc5721-e942-4f3d-a319-6245bd2e5a07.jfif"
                    />
                </a>
            </div>
            <div className="absolute left-4 lg:left-24 lg:translate-x-2 -bottom-10 lg:bottom-5 flex
                 flex-row justify-start items-center gap-2 lg:gap-3 ">
                      <span
                          className="size-8 lg:size-11 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor
        bg-bgLighterColor hover:bg-[#D1D5DB] bg-white dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center
        items-center rounded-full cursor-pointer select-none duration-300"
                          onClick={() => instanceRef.current?.next()}
                      >
        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"

                clipRule="evenodd"
            />
        </svg>
    </span>
                <span
                    className="size-8 lg:size-11 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor
        bg-bgLighterColor hover:bg-[#D1D5DB] bg-white dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center
        items-center rounded-full cursor-pointer select-none duration-300"
                    onClick={() => instanceRef.current?.prev()}
                >
        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d= "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
            />
        </svg>
    </span>
            </div>
        </section>
    );
}
