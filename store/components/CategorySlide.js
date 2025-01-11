export default function CategorySlide({imgSrc, title}) {
    return (
        <a className="keen-slider__slide bg-gradient-to-t to-bgLighterColor dark:to-bgDarkerColor
                from-transparent rounded-t-full flex flex-col justify-stretch items-center gap-2"
           style={{
               transform: 'translate3d(0px, 0px, 0px)',
               minWidth: '193px',
               maxWidth: '193px',
           }}
           href="#">
            <img
                className="size-[100px] lg:size-[200px] object-contain"
                alt={title}
                src={imgSrc}
            />
            <p className="text-sm lg:text-xl  font-semibold text-center text-textPrimaryLightColor
                 dark:text-textPrimaryDarkColor">
                {title}
            </p>
        </a>
    );
}