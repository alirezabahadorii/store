export function Menubar() {
    return (
        <header className="w-full lg:w-11/12 h-16 lg:h-24 fixed top-0 z-50 px-4 lg:px-8 lg:mt-9
       bg-bgLighterColor dark:bg-bgDarkerColor lg:bg-[#00000080] dark:lg:bg-[#00000080]
        lg:backdrop-blur-sm shadow-defaultShadowStore lg:shadow-none flex flex-row
        justify-between items-center lg:rounded-3xl">
            <section className="w-full lg:hidden flex flex-row justify-between items-center">
                <div className="lg:hidden text-textPrimaryLightColor dark:text-textPrimaryDarkColor
               hover:text-primaryColor dark:hover:text-secondaryColor duration-300">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </div>
                <a href="/store">
                    <img className="lg:hidden w-auto h-10 object-contain cursor-pointer" alt="online shop bamadar logo"
                         loading="lazy" width="100" height="50" decoding="async" data-nimg="1"
                         style={{ color: "transparent" }}
                         src="img.png"/>
                </a>
                <a className="hover:bg-primaryColor/10 rounded-full cursor-pointer" href="/search?page=1">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                    </svg>
                </a>
            </section>
            <div className="size-full absolute lg:relative top-0 right-0  flex
      pointer-events-none lg:pointer-events-auto">
                <div className="lg:!translate-x-0 lg:!opacity-100 duration-300 w-2/3 lg:w-full h-screen
        lg:h-auto px-4 lg:px-0 z-10 bg-bgLighterColor dark:bg-bgItemDarkColor lg:bg-transparent
         dark:lg:bg-transparent flex flex-col lg:flex-row justify-start lg:justify-between
          items-start lg:items-center gap-2 lg:gap-0
          translate-x-full opacity-0 ease-in-out" dir={"rtl"}>
                    <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-9 ">
                        <div className="w-full lg:w-auto py-3 lg:p-0 flex justify-between items-center">
                            <a href={"/store"}>
                                <img className="w-auto h-10 lg:h-14 object-contain" alt="online shop bamadar logo"
                                     loading="lazy" width="100" height="50" decoding="async" data-nimg="1"
                                     style={{ color: 'transparent' }} src="/img.png"/>
                            </a>
                            <svg class="lg:hidden size-6 text-textPrimaryLightColor dark:text-textPrimaryDarkColor
                 hover:text-primaryColor dark:hover:text-secondaryColor duration-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <hr class="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10"/>

                        <ul className="w-full lg:w-auto text-base lg:text-xl font-normal text-textPrimaryLightColor
             lg:text-textPrimaryDarkColor dark:text-textPrimaryDarkColor
              max-lg:dark:text-textPrimaryLightColor flex flex-col lg:flex-row justify-start
               items-start lg:items-center gap-2.5 lg:gap-9 duration-300 *:duration-300">


                            <a className="w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 hover:text-primaryColor hover:bg-primaryColor/20
                             lg:hover:bg-transparent rounded-md lg:rounded-none flex flex-row justify-start items-center"
                               href={"/"}>
                                <div className="w-full lg:w-auto flex flex-row justify-start items-center gap-2">
                        <span class="lg:hidden">
 <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
 </svg>
                        </span>
                                    سوپر اپلیکیشن بامادر
                                </div>
                            </a>
                            <a className="w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 hover:text-primaryColor hover:bg-primaryColor/20
                 lg:hover:bg-transparent rounded-md lg:rounded-none flex flex-row justify-start items-center"href="/store">
                                <div className="w-full lg:w-auto flex flex-row justify-start items-center gap-2">
                        <span class="lg:hidden">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={"0 0 24 24"}
                                 strokeWidth="1.5" stroke="currentColor">
                                <path  strokeLinecap="round" strokeLinejoin="round"
                                       d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">
                                </path>
                            </svg>
                        </span>
                                    صفحه اصلی فروشگاه
                                </div>
                            </a>
                            <a className="w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 hover:text-primaryColor hover:bg-primaryColor/20
                 lg:hover:bg-transparent rounded-md lg:rounded-none flex flex-row justify-start items-center" href="/category">
                                <div className="w-full lg:w-auto flex flex-row justify-start items-center gap-2">
                        <span className="lg:hidden">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                                </path>
                            </svg>
                        </span>
                                    دسته بندی ها
                                </div>
                            </a>
                            <a className="w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 hover:text-primaryColor hover:bg-primaryColor/20
                 lg:hover:bg-transparent rounded-md lg:rounded-none flex flex-row justify-start items-center" href="/promotions">
                                <div className="w-full lg:w-auto flex flex-row justify-start items-center gap-2">
                        <span className="lg:hidden">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z">
                                </path>
                            </svg>
                        </span>
                                    تخفیفات شگفت انگیز
                                </div>
                            </a>
                            <a className="w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 hover:text-primaryColor hover:bg-primaryColor/20
                 lg:hover:bg-transparent rounded-md lg:rounded-none flex flex-row justify-start items-center" href={"/cart"}>
                                <div className="w-full lg:w-auto flex flex-row justify-start items-center gap-2">
                       <span className="lg:hidden">
                           <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
                                </path>
                           </svg>
                       </span>
                                </div>
                                سبد خرید
                            </a>
                        </ul>
                        <hr className="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10"/>
                    </div>
                    <div className="w-full lg:w-auto pr-2.5 lg:p-0 text-base font-normal text-primaryColor
           lg:text-primaryColor flex flex-col lg:flex-row justify-start lg:justify-between
            items-start lg:items-center gap-2.5 lg:gap-2">
                        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center
             gap-2.5 lg:gap-0 *:duration-300 ">
                            <div className="dropdown dropdown-hover hidden lg:block">
                                <div className="w-full py-2.5 lg:p-3 hover:text-primaryColor
                     lg:hover:bg-primaryColor/10 lg:rounded-full cursor-pointer"
                                     tabIndex="0" role="button">
                                    <div className="flex">
                                        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex justify-center flex-row">
                                        <ul className="dropdown-content w-[28rem] left-0" tabIndex="0">
                                            <div className="w-full max-h-96 px-4 lg:px-0 bg-bgLighterColor dark:bg-bgDarkerColor
                            flex flex-col justify-start items-end gap-4 overflow-hidden duration-300 cursor-default">
                                                <div className="w-full pt-5 pb-1 lg:py-0 flex justify-between items-center">
                                        <span className="hidden lg:block font-normal text-base lg:text-xs text-textDisableColor">
                                            0
                                            محصول
                                        </span>
                                                    <span className="font-normal text-base lg:text-xs text-textPrimaryLightColor
                                         dark:text-textPrimaryDarkColor lg:text-primaryColor dark:lg:text-primaryColor">
                                            مشاهده سبد خرید
                                        </span>
                                                </div>
                                                <div className="w-full h-full overflow-y-auto">
                                                    <div className="w-full py-6 flex flex-col justify-center items-center gap-2.5">
                                                        <svg className="size-16 text-textDisableColor dark:text-white-10"
                                                             xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
                                                            </path>
                                                        </svg>
                                                        <span className="text-sm lg:text-base font-medium text-textPrimaryLightColor
                                            dark:text-textPrimaryDarkColor">
                                                هنوز محصولی به سبد خرید اضافه نشده
                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a className="hidden lg:block py-2.5 p-3 hover:bg-primaryColor/10 rounded-full cursor-pointer"
                               href="/search?page=1">
                                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <hr className="hidden lg:block w-px h-full py-5 bg-linePrimaryColor/20"/>
                        <a className="w-full lg:w-auto lg:px-6 py-2.5 lg:py-3 hover:bg-primaryColor/10 rounded-md lg:rounded-full
               flex flex-row justify-start lg:justify-center items-center gap-2 duration-300 cursor-pointer">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25">
                                </path>
                            </svg>
                            ورود | ثبت نام
                        </a>
                    </div>
                </div>
                <span className="lg:hidden w-full h-screen absolute top-0 left-0 -z-10
               bg-[#00000040] opacity-0 pointer-events-none duration-300"></span>
            </div>
        </header>
    );
}