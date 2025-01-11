import InfoCard from "./InfoCard";

export default function Information() {
    return (
        <section className="w-full lg:w-[1260px] relative grid grid-cols-2 lg:grid-cols-4 place-content-around place-items-center
        gap-y-16 gap-x-0 lg:gap-0 top-4 lg:top-10">
            <hr className="lg:hidden w-full h-px absolute bg-textDisableColor dark:bg-white-10 rounded-full" />
            <hr className="lg:hidden w-full h-px absolute bg-textDisableColor dark:bg-white-10 rounded-full" />

            <InfoCard
                imgSrc="https://bamadar.com/_next/static/media/support.924e8154.svg"
                altText="پشتیبانی شبانه روزی"
                title="پشتیبانی شبانه روزی"
                description="7 روز هفته ، 24 ساعته"
            />

            <InfoCard
                imgSrc="https://bamadar.com/_next/static/media/express-delivery.43d4168a.svg"
                altText="امکان تحویل اکسپرس"
                title="امکان تحویل اکسپرس"
                description="ارسال بسته با سرعت باد"
            />

            <InfoCard
                imgSrc="https://bamadar.com/_next/static/media/original-products.c4844dcc.svg"
                altText="ضمانت کیفیت"
                title="ضمانت کیفیت"
                description="تازه برشته شده و با کیفیت"
                />

            <InfoCard
            imgSrc="https://bamadar.com/_next/static/media/days-return.38e82b33.svg"
            altText="ضمانت بازگشت وجه"
            title="ضمانت بازگشت وجه"
            description="وسایل و ادوات دم آوری"
            />
        </section>
    );
}
