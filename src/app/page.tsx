import Hero from "@/components/hero";
import WorkoutLibrary from "@/components/workoutLibrary";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <WorkoutLibrary />
    </div>
  );
}
