import Image from "next/image";
import WorkoutActions from "@/Components/Shared/WorkoutActions";
import type { Workout } from "@/types/workout";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const getWorkout = async (id: string): Promise<Workout> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  const data: Workout[] = await response.json();

  const workout = data.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    throw new Error("Workout not found");
  }

  return workout;
};

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="container mx-auto min-h-screen px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr]">
        {/* LEFT - IMAGE */}
        <div className="relative h-[450px] overflow-hidden rounded-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          {/* Title */}
          <h1 className="text-4xl font-extrabold uppercase text-white">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
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

          {/* Workout Information */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#171d20]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Equipment
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Difficulty
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Sets
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Reps
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Duration
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Calories
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-400">
                Rating
              </span>

              <span className="text-sm font-semibold text-white">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-lg font-extrabold uppercase text-white">
              INSTRUCTIONS
            </h2>

            <div className="mt-3 space-y-2">
              {workout.instructions.map(
                (instruction: string, index: number) => (
                  <div
                    key={index}
                    className="flex gap-3 text-sm text-gray-300"
                  >
                    <span className="font-bold text-white">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Actions */}
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;