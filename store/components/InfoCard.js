export default function InfoCard({ imgSrc, altText, title, description }) {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5">
            <img
                className="size-16 lg:size-20 object-contain"
                alt={altText}
                loading="lazy"
                width="100"
                height="50"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={imgSrc}
            />
            <div className="w-full lg:w-auto text-textPrimaryLightColor dark:text-textPrimaryDarkColor flex flex-col justify-start items-start gap-2">
                <h5 className="w-full lg:w-auto text-center lg:text-right font-semibold text-sm lg:text-lg">
                    {title}
                </h5>
                <h5 className="w-full lg:w-auto text-center lg:text-right font-normal text-xs lg:text-sm">
                    {description}
                </h5>
            </div>
        </div>
    );
}
