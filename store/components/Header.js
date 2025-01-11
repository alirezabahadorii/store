export default function Header({title}) {
    return (
        <section
            className="w-full z-10 flex flex-row justify-between items-end aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-mirror="true"
            data-aos-once="true"
        >
            <div className="flex flex-col justify-start items-start gap-2 lg:gap-5 ">
                <h2 className="text-right font-bold text-xl lg:text-3xl text-textPrimaryLightColor
                 dark:text-textPrimaryDarkColor ">
                    {title}
                </h2>
            </div>
        </section>
    );
}
