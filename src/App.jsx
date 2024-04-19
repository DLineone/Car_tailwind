/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Suspense } from "react";
import CarCard from "./components/CarCard";
import LoadingCarCard from "./components/LoadingCarCard";

function App() {
  let [car, setCar] = useState({
    title: "BMW X5 30d, 2019",
    img: "car.jpg",
    description: ` Заинтересовал этот автомобиль? Позвоните продавцу, чтобы узнать детали — а мы пришлём вам Отчёт в подарок!
    
    ‼️Цена указана за наличный расчет ‼️
    
    Болee подрoбную информaцию по комплектaции aвтомoбиля и дpугие интepеcующие вoпросы утoчняйте пo телeфону, укaзaнному в объявлении.
    
    Автомобили с пробегом :
    Возможность покупки автомобиля в кредит, более 10 банков.`,
  });
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-400">
      <Suspense fallback={<LoadingCarCard />}>
        <CarCard car={car} />
      </Suspense>
    </div>
  );
}

export default App;
