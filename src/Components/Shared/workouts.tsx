import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout";

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await response.json();

  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-white">
          THE LIBRARY
        </h2>

        <p className="text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workoutsData.map((workout) => (
          <Link
            key={workout.id}
            href={`/workouts/${workout.id}`}
            className="overflow-hidden rounded-2xl bg-[#20272a] transition hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-[220px] w-full">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              {/* Muscle Groups */}
              <div className="mb-4 flex flex-wrap gap-2">
                {workout.muscleGroups.map(
                  (muscle: string, index: number) => (
                    <span
                      key={index}
                      className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                    >
                      {muscle}
                    </span>
                  )
                )}
              </div>

              {/* Workout Name */}
              <h3 className="text-xl font-extrabold uppercase text-white">
                {workout.name}
              </h3>

              {/* Equipment */}
              <p className="mt-1 text-sm text-gray-400">
                {workout.equipment}
              </p>

              {/* Line */}
              <div className="my-4 border-t border-white/10"></div>

              {/* Workout Info */}
              <div className="flex items-center gap-5 text-sm text-gray-300">
                <span>◷ {workout.duration} min</span>

                <span>🔥 {workout.caloriesBurned} kcal</span>

                <span>☆ {workout.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Workouts;