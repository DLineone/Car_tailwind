import { Suspense } from "react";
import CarCard from "./components/CarCard";
import LoadingCarCard from "./components/LoadingCarCard";

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-slate-400">
      <Suspense fallback={<LoadingCarCard />}>
        <CarCard />
      </Suspense>
    </div>
  );
}

export default App;
