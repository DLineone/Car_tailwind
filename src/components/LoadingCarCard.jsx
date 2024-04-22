function LoadingCarCard() {
  return (
    <div className="relative animate-pulse">
      <div className="peer relative z-10 flex max-w-sm content-center items-center gap-2 rounded-md bg-white p-2 shadow-lg transition  duration-200 sm:max-w-xl md:max-w-2xl">
        <div
          className=" flex aspect-square h-52 w-52 w-52 items-center justify-center bg-gray-300 object-contain"
          alt=""
        >
          <svg
            className="h-10 w-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className=" flex h-full flex-col content-start items-start gap-2">
          <div className="h-6 w-36 bg-gray-300 font-bold"></div>
          <div className="word line-clamp-6 flex flex-col gap-0.5 whitespace-pre-line break-words text-justify">
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
            <div className="h-4 w-[344px] bg-gray-300"></div>
          </div>
          <button className="h-10 w-24 self-end bg-gray-300"></button>
        </div>
      </div>
    </div>
  );
}

export default LoadingCarCard;
