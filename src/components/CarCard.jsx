import { useState } from "react";

/* eslint-disable react/prop-types */
function CarCard({ car }) {
  const [modalOpen, setModalOpen] = useState(false);

  function switchModal() {
    setModalOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <div className="peer relative z-10 flex max-w-sm content-center items-center gap-2 rounded-md bg-white p-2 shadow-lg transition  duration-200 sm:max-w-xl md:max-w-2xl">
        <img
          className="aspect-square w-52 object-contain"
          src={car.img}
          alt=""
        />
        <div className=" flex h-full flex-col content-start items-start gap-2">
          <div className="font-bold">{car.title}</div>
          <div className="word line-clamp-6 whitespace-pre-line break-words text-justify">
            {car.description}
          </div>
          <button
            className="self-end rounded bg-yellow-300 p-2 shadow drop-shadow-sm transition
          hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]
          active:translate-x-0 active:translate-y-0 active:shadow"
            onClick={switchModal}
          >
            Подробнее
          </button>
        </div>
      </div>
      <span className="absolute left-0 top-0 -z-0 h-full w-full rounded-md bg-black transition peer-hover:translate-x-1 peer-hover:translate-y-1"></span>
      <dialog
        id="modal"
        open={modalOpen}
        className="absolute inset-0 z-20 max-w-sm  rounded-md p-2 sm:max-w-xl md:max-w-2xl"
      >
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="font-bold">{car.title}</div>
          <div className="word whitespace-pre-line break-words text-justify">
            {car.description}
          </div>
          <button
            className="self-end rounded bg-yellow-300 p-2 shadow drop-shadow-sm transition
            hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]
            active:translate-x-0 active:translate-y-0 active:shadow"
            onClick={switchModal}
          >
            Закрыть
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default CarCard;
