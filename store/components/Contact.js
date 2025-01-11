
export default function Contact(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    };

    return (
      <footer className="w-full lg:w-[1536px] lg:h-[420px] relative px-5 pb-24 lg:pb-10 lg:px-24 bg-bgDarkerColor flex flex-col
       justify-center items-center top-7 lg:top-24">
          <div className="hidden absolute top-0 rotate-180 z-40 lg:flex justify-center items-center">
              <svg className="fill-bgLightColor dark:fill-[#27272A]"
                   width="100" height="22"
                   viewBox="0 0 100 22"
                   xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
              </svg>
              <span className="size-8 absolute -bottom-5 rounded-full border-2 border-primaryColor text-primaryColor
               flex justify-center items-center cursor-pointer aos-init aos-animate"
                    onClick={scrollToTop}
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    data-aos-delay="150"
                    data-aos-mirror="true"
                    data-aos-once="true">
                  <svg className="size-6 animate-pulse"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20"
                       fill="currentColor">
                      <path fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"></path>
                  </svg>

              </span>
          </div>
          <div className="w-full pt-10 lg:pt-16 pb-8 flex flex-col lg:flex-row justify-start lg:justify-between
           items-start gap-10 lg:gap-0">
              <div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-10">
                  <div className="grayscale hover:grayscale-0 flex justify-start items-center gap-5 duration-300">
                      <img
                          className="size-14 object-contain saturate-0 hover:saturate-100 duration-300"
                          alt="logo bamadar"
                          loading="lazy"
                          width="100"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          style={{color: 'transparent'}}
                          src="https://bamadar.com/_next/static/media/logo.9e104326.webp"
                      />
                  </div>
                  <p className="text-base text-customWhite font-normal text-justify text-textDisableColor leading-loose lg:leading-10 break-words">
                      بامادر همه روزه از ساعت 9 صبح تا 11 شب در کنار شماست
                  </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-10">
                  <span className="lg:pt-7 text-textPrimaryDarkColor text-2xl font-semibold">
                      در تماس باشیم
                  </span>
                  <div className="w-full text-customWhite flex flex-col justify-start items-center gap-5">
                      <div
                          className="w-full hover:text-primaryColor flex justify-start items-center gap-2 cursor-pointer">
                          <svg className="size-6"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               strokeWidth="1.5"
                               stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                          </svg>
                          <p className="text-base font-normal">
                              بلوار پیام آوران، تقاطع آفرینش شمالی، مجموعه تجاری مادر
                          </p>
                      </div>
                      <div className="w-full flex flex-col lg:flex-row justify-start lg:items-center gap-5">
                          <div className="hover:text-primaryColor flex justify-start items-center cursor-pointer gap-2">
                              <svg className="size-5 mb-1"
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   strokeWidth="1.5"
                                   stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                  ></path>
                              </svg>
                              <p className="text-base">3833 - 061</p>
                              .
                              <p className="text-base">4444 4254 - 061</p>
                          </div>
                      </div>
                      <span className="w-full lg:pt-3 text-textPrimaryDarkColor text-2xl font-semibold">
                          شبکه های اجتماعی
                      </span>
                      <ul className="w-full flex flex-row justify-start items-center gap-2.5 lg:gap-4">
                          <a className="flex text-textDisableColor !fill-textDisableColor hover:text-primaryColor
                           hover:!fill-primaryColor flex-row justify-start items-center gap-1.5 fill-customWhite"
                             href="https://www.instagram.com/bamadarcom/">
                              <svg className="size-6"
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                        ></path>
                                  <path
                                      d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                                      ></path>
                                  <path
                                      d="M17 7.50003C16.87 7.50003 16.74 7.47003 16.62 7.42003C16.5 7.37003 16.39 7.30003 16.29 7.21003C16.2 7.11003 16.12 7.00003 16.07 6.88003C16.02 6.76003 16 6.63003 16 6.50003C16 6.37003 16.02 6.24003 16.07 6.12003C16.13 5.99003 16.2 5.89003 16.29 5.79003C16.34 5.75003 16.39 5.70003 16.44 5.67003C16.5 5.63003 16.56 5.60003 16.62 5.58003C16.68 5.55003 16.74 5.53003 16.81 5.52003C17.13 5.45003 17.47 5.56003 17.71 5.79003C17.8 5.89003 17.87 5.99003 17.92 6.12003C17.97 6.24003 18 6.37003 18 6.50003C18 6.63003 17.97 6.76003 17.92 6.88003C17.87 7.00003 17.8 7.11003 17.71 7.21003C17.61 7.30003 17.5 7.37003 17.38 7.42003C17.26 7.47003 17.13 7.50003 17 7.50003Z"
                                      ></path>
                              </svg>
                              bamadarcom@
                          </a>
                          <a className="flex text-textDisableColor !fill-textDisableColor hover:text-primaryColor
                           hover:!fill-primaryColor flex-row justify-start items-center gap-1.5 fill-customWhite"
                             href="#">
                              <svg className="size-6"
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M2.00014 22.7502C1.80014 22.7502 1.61011 22.6702 1.47011 22.5302C1.28011 22.3402 1.20016 22.0602 1.27016 21.8002L2.53017 17.0902C1.69017 15.5302 1.25014 13.7702 1.25014 11.9902C1.25014 6.06023 6.07014 1.24023 12.0001 1.24023C17.9301 1.24023 22.7501 6.06023 22.7501 11.9902C22.7501 17.9202 17.9301 22.7402 12.0001 22.7402C10.1901 22.7402 8.42017 22.2902 6.84017 21.4302L2.20015 22.7202C2.13015 22.7402 2.07014 22.7502 2.00014 22.7502ZM6.94014 19.8802C7.07014 19.8802 7.20015 19.9203 7.32015 19.9803C8.73015 20.8103 10.3501 21.2502 12.0001 21.2502C17.1001 21.2502 21.2501 17.1002 21.2501 12.0002C21.2501 6.90024 17.1001 2.75024 12.0001 2.75024C6.90014 2.75024 2.75014 6.90024 2.75014 12.0002C2.75014 13.6302 3.18013 15.2202 3.99013 16.6202C4.09013 16.7902 4.12015 17.0002 4.07015 17.1902L3.07015 20.9302L6.75014 19.9102C6.81014 19.8902 6.88014 19.8802 6.94014 19.8802Z"
                                      ></path>
                                  <path
                                      d="M14.7402 17.7603C14.1202 17.7603 13.4802 17.6203 12.8102 17.3303C12.1802 17.0603 11.5502 16.7003 10.9402 16.2503C10.3402 15.8103 9.75027 15.3103 9.21027 14.7703C8.67027 14.2203 8.17022 13.6403 7.73022 13.0403C7.28022 12.4103 6.92022 11.7903 6.66022 11.1803C6.38022 10.5203 6.24023 9.87029 6.24023 9.25029C6.24023 8.81029 6.32021 8.39029 6.47021 8.00029C6.63021 7.59029 6.89022 7.22028 7.23022 6.90028C7.87022 6.27028 8.79026 6.0403 9.52026 6.3903C9.77026 6.5003 9.98026 6.6803 10.1403 6.9203L11.3002 8.55027C11.4202 8.71027 11.5103 8.88027 11.5803 9.05027C11.6603 9.25027 11.7103 9.4503 11.7103 9.6403C11.7103 9.9003 11.6402 10.1603 11.5002 10.3903C11.4102 10.5403 11.2802 10.7203 11.1102 10.8903L10.9802 11.0303C11.0402 11.1103 11.1102 11.2103 11.2202 11.3303C11.4302 11.5703 11.6602 11.8303 11.9102 12.0803C12.1602 12.3203 12.4102 12.5603 12.6602 12.7703C12.7802 12.8703 12.8803 12.9503 12.9603 13.0003L13.1002 12.8603C13.2802 12.6803 13.4603 12.5403 13.6403 12.4503C13.9703 12.2403 14.4802 12.1903 14.9302 12.3803C15.0902 12.4403 15.2502 12.5303 15.4202 12.6503L17.0903 13.8303C17.3203 13.9903 17.5002 14.2103 17.6202 14.4603C17.7202 14.7103 17.7603 14.9303 17.7603 15.1603C17.7603 15.4603 17.6902 15.7503 17.5602 16.0303C17.4302 16.2903 17.2802 16.5203 17.1002 16.7303C16.7802 17.0803 16.4103 17.3403 16.0103 17.5103C15.6103 17.6803 15.1802 17.7603 14.7402 17.7603ZM8.79022 7.74028C8.73022 7.74028 8.53027 7.74028 8.28027 7.99028C8.09027 8.17028 7.96024 8.36029 7.87024 8.57029C7.78024 8.78029 7.74023 9.0203 7.74023 9.2603C7.74023 9.6803 7.84022 10.1303 8.04022 10.6103C8.25022 11.1103 8.56025 11.6403 8.94025 12.1703C9.33025 12.7003 9.77025 13.2303 10.2603 13.7203C10.7503 14.2003 11.2702 14.6503 11.8102 15.0503C12.3302 15.4303 12.8603 15.7303 13.3903 15.9603C14.1503 16.2903 14.8502 16.3703 15.4202 16.1303C15.6202 16.0503 15.8002 15.9103 15.9802 15.7303C16.0702 15.6303 16.1403 15.5303 16.2003 15.4003C16.2303 15.3303 16.2502 15.2503 16.2502 15.1803C16.2502 15.1603 16.2502 15.1303 16.2202 15.0703L14.5502 13.9103C14.4802 13.8603 14.4102 13.8203 14.3502 13.8003C14.3102 13.8203 14.2503 13.8503 14.1403 13.9603L13.7603 14.3403C13.4703 14.6303 13.0103 14.7103 12.6403 14.5803L12.4603 14.5003C12.2303 14.3803 11.9702 14.2003 11.6802 13.9503C11.4002 13.7103 11.1303 13.4603 10.8403 13.1803C10.5603 12.8903 10.3103 12.6203 10.0703 12.3403C9.81025 12.0303 9.63025 11.7803 9.51025 11.5703L9.40027 11.3103C9.37027 11.2103 9.36023 11.1003 9.36023 11.0003C9.36023 10.7203 9.46027 10.4703 9.65027 10.2703L10.0303 9.88029C10.1403 9.77029 10.1803 9.7103 10.2003 9.6703C10.1703 9.6003 10.1303 9.54029 10.0803 9.47029L8.91022 7.82029L8.79022 7.74028Z"
                                      ></path>
                              </svg>
                              bamadarcom
                          </a>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
);
}