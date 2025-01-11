import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DiscountSlide from "./DiscountSlide";
import Navigation from "./Navigation";
import Header from "./Header";
import React from "react";
import CategorySlide from "@/components/CategorySlide";
import BestSellerSlide from "@/components/BestSellerSlide";
import Information from "@/components/Information";


function toPersianNumber(number) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return number.toString().replace(/[0-9]/g, (d) => persianDigits[d]);
}

export function Items() {
    const [discountSliderRef, discountInstanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: "auto",
            spacing: 20,
        },
    });

    const [categorySliderRef, categoryInstanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: "auto",
            spacing: 20,
        },
    });
    const [bestSellerSliderRef, bestSellerInstanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: "auto",
            spacing: 20,
        },
    });
    const [popularSliderRef, popularInstanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        rtl: true,
        slides: {
            perView: "auto",
            spacing: 20,
        },
    });



    return (
        <section className="w-full lg:w-[1260px] relative py-5 px-10 lg:px-20 flex flex-col
        justify-center items-center gap-28 lg:gap-30 ">
            <Header title="تخفیفات شگفت‌انگیز"/>
            <section
                className="navigation-wrapper w-full lg:w-[1260px] relative flex flex-row justify-center items-stretch">
                <Navigation
                    onClickPrev={() => discountInstanceRef.current?.prev()}
                    onClickNext={() => discountInstanceRef.current?.next()}
                />
                <div ref={discountSliderRef} className="keen-slider">
                    <DiscountSlide
                        href="/product/162"

                        discount={toPersianNumber("20%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2023/1/nknJKtpfEkAblimoo2-Delnoosh-1350-932x1080-300.jpg"
                        imgAlt="آبلیمو دلنوش"
                        title={toPersianNumber("آبلیمو دلنوش 1350 سی‌سی")}
                        price={toPersianNumber("44,640")}
                        originalPrice={toPersianNumber("55,800")}
                    />
                    <DiscountSlide
                        href="/product/383"
                        discount={toPersianNumber("30%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2023/12/UWAqlqTF4Y12f78a4b7fcea992660f5ace7c55e0ef4fa1d351_1702390306-300.jpg"
                        imgAlt="پودر ژله"
                        title={toPersianNumber("پودر ژله کیوی فرمند 100 گرم")}
                        price={toPersianNumber("21,000")}
                        originalPrice={toPersianNumber("30,000")}
                    />
                    <DiscountSlide
                        href="/product/509"
                        discount={toPersianNumber("20%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2021/6/tfzknUGbwS121114206-300.jpg"
                        imgAlt="کنسرو تن ماهی"
                        title={toPersianNumber("کنسرو تن ماهی کلیددار پولک 180 گرمی")}
                        price={toPersianNumber("69,900")}
                        originalPrice={toPersianNumber("87,500")}
                    />
                    <DiscountSlide
                        href="/product/921"
                        discount={toPersianNumber("24%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2020/12/DVP8WsjXuk1572077653-300.jpg"
                        imgAlt="آرد برنج"
                        title={toPersianNumber("آرد برنج جعبه برتر350 گرم")}
                        price={toPersianNumber("55,015")}
                        originalPrice={toPersianNumber("73,350")}
                    />
                    <DiscountSlide
                        href="/product/1074"
                        discount={toPersianNumber("20%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2022/11/Uqk8J1vCvTScreenshot (525)-300.png"
                        imgAlt="پودر کاکائو"
                        title={toPersianNumber("پودر کاکائو برتر100 گرم")}
                        price={toPersianNumber("95,480")}
                        originalPrice={toPersianNumber("120,000")}
                    />
                    <DiscountSlide
                        href="/product/1347"
                        discount={toPersianNumber("20%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2023/10/j35QmzAauMimages (2)-300.jpeg"
                        imgAlt="کیک کشمشی"
                        title={toPersianNumber("پارتی کيک کشمشی\n" +
                            "                                نادری75گرم(ويژه مدرسه)")}
                        price={toPersianNumber("9,600")}
                        originalPrice={toPersianNumber("12,000")}
                    />
                    <DiscountSlide
                        href="/product/707"
                        discount={toPersianNumber("20%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2020/3/Tzwo4pbr2Q6260457320241-300.jpg"
                        imgAlt="روغن حیوانی"
                        title="روغن حیوانی اعلا قوطی فلزی
                                باستانی 900گر..."
                        price={toPersianNumber("466,400")}
                        originalPrice={toPersianNumber("583,000")}
                    />
                    <DiscountSlide
                        href="/product/1574"
                        discount={toPersianNumber("25%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2023/3/1nGqIT8sFC4bee90c2383d50a34726bf30171761fc06f5c6d1_1637566400-300.jpg"
                        imgAlt="مربای آلبالو"
                        title={toPersianNumber("مربای آلبالو بدر 300 گرم")}
                        price={toPersianNumber("51,750")}
                        originalPrice={toPersianNumber("69,000")}
                    />
                    <DiscountSlide
                        href="/product/1860"
                        discount={toPersianNumber("30%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2024/1/NIAeZkRiUXPicsart_24-01-09_17-14-17-460-300.jpg"
                        imgAlt="نکتار انبه"
                        title={toPersianNumber("نکتار انبه میهن 1 لیتری")}
                        price={toPersianNumber("80,500")}
                        originalPrice={toPersianNumber("115,000")}
                    />
                </div>
            </section>
            <Header title="دسته بندی"/>
            <section
                className="navigation-wrapper w-full lg:w-[1260px] relative flex flex-row justify-center items-center">
                <Navigation
                    onClickPrev={() => categoryInstanceRef.current?.prev()}
                    onClickNext={() => categoryInstanceRef.current?.next()}
                />
                <div ref={categorySliderRef} className="keen-slider">
                    <CategorySlide
                        href="/product/14"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/qOZ7m2HQUpیکبار مصرف.png"
                        imgAlt="یکبار مصرف"
                        title="یکبار مصرف"
                    />
                    <CategorySlide
                        href="/product/10"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/F7HjG2P4MXنوشیدنی.png"
                        imgAlt="نوشیدنی"
                        title="نوشیدنی"
                    />
                    <CategorySlide
                        href="/product/20"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/t2Je9cQaofنان و شیرینی.png"
                        imgAlt="نان و شیرینی"
                        title="نان و شیرینی"/>
                    <CategorySlide
                        href="/product/13"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/CIyfgUgUbzمیوه سبزی و صیفی جات.png"
                        title="میوه و صیفی جات"/>
                    <CategorySlide
                        href="/product/79"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/pIKFEtNKrAمواد غذایی منجمد.png"
                        title="مواد غذایی منجمد"/>
                    <CategorySlide
                        href="/product/11"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/nkwiQYBBMgمواد پروتئینی1-0۲.png"
                        title="مواد پروتئینی"/>
                    <CategorySlide
                        href="/product/111"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/4/tgjtUN5L3Rمحصولات صبحانه.png"
                        title="مواد صبحانه"/>
                </div>
            </section>
            <Header title="پرفروش ترین ها"/>
            <section
                className="navigation-wrapper w-full lg:w-[1260px] relative flex flex-row justify-center items-center">
                <Navigation
                    onClickPrev={() => bestSellerInstanceRef.current?.prev()}
                    onClickNext={() => bestSellerInstanceRef.current?.next()}
                />
                <div ref={bestSellerSliderRef} className="keen-slider">
                    <DiscountSlide
                        href="/product/2209"
                        discount={toPersianNumber("24%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2022/9/AFmzPJZU2uنوشابه-کوکاکولا-1.5-لیتری-300.webp"
                        imgAlt="نوشابه کوکا"
                        title={toPersianNumber("نوشابه کوکاکولا پت 1500 سی سی")}
                        price={toPersianNumber("31,590")}
                        originalPrice={toPersianNumber("41,700")}
                    />
                    <BestSellerSlide
                        href="/product/5718"
                        imgSrc="https://my.bamadar.com/uploads/images/2023/7/ehXy5tJSIo0001176_-50-_510-300.jpeg"
                        imgAlt="شکر"
                        title="شکر فله"
                        price={toPersianNumber("41,300")}
                    />
                    <BestSellerSlide
                        href="/product/6103"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/9/BUe1SoC7KL0000030_-_600-300.png"
                        imgAlt="سیب زمینی"
                        title="سیب زمینی"
                        price={toPersianNumber("35,000")}/>
                    <BestSellerSlide
                        href="/product/6186"
                        imgSrc="https://my.bamadar.com/uploads/images/2022/11/LdYXG8bHW25f4a56678a8fa-removebg-preview-300.png"
                        imgAlt="مرغ کامل"
                        title={toPersianNumber("مرغ کامل 1800 گرمی")}
                        price={toPersianNumber("78,600")}/>
                    <BestSellerSlide
                        href="/product/6241"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/9/E2VRB3PcMHunnamed-300.png"
                        imgAlt="موز"
                        title={toPersianNumber("موز سوپر اعلاء")}
                        price={toPersianNumber("102,000")}/>
                    <BestSellerSlide
                        href="/product/6305"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/8/FQ6a1SufKIUTB88vZlJNHEXKJk43Jeq6yeeXXar-300.jpg"
                        imgAlt="پیاز"
                        title={toPersianNumber("پیاز قرمز")}
                        price={toPersianNumber("23,700")}/>
                </div>
            </section>

            <Header title="محبوب ترین ها"/>
            <section
                className="navigation-wrapper w-full lg:w-[1260px] relative flex flex-row justify-center items-center">
                <Navigation
                    onClickPrev={() => popularInstanceRef.current?.prev()}
                    onClickNext={() => popularInstanceRef.current?.next()}
                />
                <div ref={popularSliderRef} className="keen-slider">

                    <DiscountSlide
                        href="/product/625"
                        discount={toPersianNumber("7%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2023/1/frkmRR6CP1gg-300.jpg"
                        imgAlt="چیپس چیتوز"
                        title={toPersianNumber("چیپس کچاپ متوسط چی توز 65 گرم")}
                        price={toPersianNumber("23,250")}
                        originalPrice={toPersianNumber("25,000")}
                    />
                    <DiscountSlide
                        href="/product/3334"
                        discount={toPersianNumber("6%")}
                        imgSrc="https://my.bamadar.com/uploads/images/2020/3/GLiKf6lY08IuJcma97VU-6UeHH-300.jpg"
                        imgAlt="دستمال سافتلن"
                        title={toPersianNumber("دستمال کاغذی نقره ای سافتلن300برگ")}
                        price={toPersianNumber("30,855")}
                        originalPrice={toPersianNumber("33,175")}
                    />
                    <BestSellerSlide
                        href="/product/5718"
                        imgSrc="https://my.bamadar.com/uploads/images/2023/7/ehXy5tJSIo0001176_-50-_510-300.jpeg"
                        imgAlt="شکر"
                        title="شکر فله"
                        price={toPersianNumber("41,300")}
                    />
                    <BestSellerSlide
                        href="/product/6103"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/9/BUe1SoC7KL0000030_-_600-300.png"
                        imgAlt="سیب زمینی"
                        title="سیب زمینی"
                        price={toPersianNumber("35,000")}/>
                    <BestSellerSlide
                        href="/product/6214"
                        imgSrc="https://my.bamadar.com/uploads/images/2023/5/S32UG62ePHUntitled-300.png"
                        imgAlt="سینه مرغ"
                        title={toPersianNumber("سینه مرغ بدون پوست")}
                        price={toPersianNumber("145,000")}/>
                    <BestSellerSlide
                        href="/product/6305"
                        imgSrc="https://my.bamadar.com/uploads/images/2020/8/FQ6a1SufKIUTB88vZlJNHEXKJk43Jeq6yeeXXar-300.jpg"
                        imgAlt="پیاز"
                        title={toPersianNumber("پیاز قرمز")}
                        price={toPersianNumber("23,700")}/>
                </div>
            </section>
            </section>
            );
            }
