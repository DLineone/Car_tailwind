/* eslint-disable react/prop-types */
function CarCard({ car }) {
  return (
    <div className="flex max-w-sm content-center items-center gap-2 rounded-md bg-white p-2 drop-shadow-lg transition  duration-200 hover:shadow-2xl sm:max-w-xl md:max-w-2xl">
      <img className="aspect-square w-52 object-contain" src={car.img} alt="" />
      <div className=" flex h-full flex-col content-start items-start gap-2">
        <div className="font-bold">{car.title}</div>
        <div className="word line-clamp-6 whitespace-pre-line break-words text-justify">
          {car.description}
        </div>
        <button
          className="rounded bg-yellow-300 p-2 shadow drop-shadow-sm transition
        hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] 
        active:translate-x-0 active:translate-y-0 active:shadow"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default CarCard;
