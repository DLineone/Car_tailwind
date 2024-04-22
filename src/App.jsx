/* eslint-disable no-unused-vars */
import { Suspense } from "react";
import CarCard from "./components/CarCard";
import LoadingCarCard from "./components/LoadingCarCard";
import useSWR from "swr";
import { fetchCar } from "./utils";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-400">
      <Suspense fallback={<LoadingCarCard />}>
        <CarCard />
      </Suspense>
    </div>
  );
}

export default App;
