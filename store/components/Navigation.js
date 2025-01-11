export default function Navigation({ onClickPrev, onClickNext }) {
    return (
        <>
            <div className="flex absolute left-1/2 transform -translate-x-1/2  top-0 z-30  lg:left-14
             text-iconPrimaryColor dark:text-[#fff] ">

      <span onClick={onClickPrev} className="size-8 lg:size-11 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor -top-[80px] lg:-top-32 absolute
        bg-bgLighterColor hover:bg-[#D1D5DB] bg-white dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center
        items-center rounded-full cursor-pointer select-none duration-300" onClickPrev={() => instanceRef.current?.prev()}>

        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
          ></path>
        </svg>
      </span>
                <span onClick={onClickNext} className="size-8 lg:size-11 absolute right-10 lg:right-14
             -top-[80px] lg:-top-32 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor
              bg-bgLighterColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff]
              flex justify-center items-center rounded-full cursor-pointer select-none duration-300 bg-white"onClickNext={() => instanceRef.current?.next()}>

        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L7.53 10l4.25 4.25a.75.75 0 0 1-1.06 1.06L6.47 10l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
          ></path>
        </svg>
      </span>
            </div>
        </>
    );
}
