"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import { useWorkout } from "@/Context/WorkoutContext";

const MyPlanClient = () => {
  const searchParams = useSearchParams();

  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useWorkout();

  const [sortBy, setSortBy] = useState("duration");

  const activeTab =
    searchParams.get("tab") === "saved" ? "saved" : "plan";

  const selectedWorkouts =
    activeTab === "plan" ? [...plan] : [...saved];

  const sortedWorkouts = selectedWorkouts.sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalMinutes = sortedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = sortedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleDone = (id: number) => {
    removeFromPlan(id);
    toast.success("Workout marked as done");
  };

  const handleRemovePlan = (id: number) => {
    removeFromPlan(id);
    toast.success("Workout removed from today's plan");
  };

  const handleRemoveSaved = (id: number) => {
    removeFromSaved(id);
    toast.success("Workout removed from saved");
  };

  return (
    <main className="container mx-auto min-h-screen px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold uppercase text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#171d20] p-6">
          <p className="text-sm text-gray-400">Exercises</p>

          <p className="mt-2 text-4xl font-extrabold text-lime-400">
            {sortedWorkouts.length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#171d20] p-6">
          <p className="text-sm text-gray-400">Minutes</p>

          <p className="mt-2 text-4xl font-extrabold text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#171d20] p-6">
          <p className="text-sm text-gray-400">Calories</p>

          <p className="mt-2 text-4xl font-extrabold text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex overflow-hidden rounded-lg border border-white/10 bg-[#171d20]">
          <Link
            href="/my-plan?tab=plan"
            className={`px-5 py-3 text-sm font-bold ${
              activeTab === "plan"
                ? "bg-lime-400 text-black"
                : "text-white"
            }`}
          >
            Today&apos;s Plan
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className={`px-5 py-3 text-sm font-bold ${
              activeTab === "saved"
                ? "bg-lime-400 text-black"
                : "text-white"
            }`}
          >
            Saved
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-white/20 bg-[#171d20] px-3 py-2 text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {sortedWorkouts.length > 0 ? (
        <div className="space-y-4">
          {sortedWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#171d20] p-4 md:flex-row md:items-center"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-xl md:w-44">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-extrabold uppercase text-white">
                  {workout.name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {workout.equipment}
                </p>

                <div className="mt-3 flex flex-wrap gap-5 text-sm text-gray-300">
                  <span>◷ {workout.duration} min</span>
                  <span>🔥 {workout.caloriesBurned} kcal</span>
                  <span>☆ {workout.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/workouts/${workout.id}`}
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                >
                  View Details
                </Link>

                {activeTab === "plan" && (
                  <>
                    <button
                      onClick={() => handleDone(workout.id)}
                      className="rounded-lg bg-lime-400 px-4 py-2 text-sm font-bold text-black"
                    >
                      ✓ Mark as Done
                    </button>

                    <button
                      onClick={() => handleRemovePlan(workout.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-400/40 text-sm font-bold text-red-400 transition hover:bg-red-400 hover:text-black"
                      aria-label={`Remove ${workout.name}`}
                    >
                      ×
                    </button>
                  </>
                )}

                {activeTab === "saved" && (
                  <button
                    onClick={() => handleRemoveSaved(workout.id)}
                    className="rounded-lg bg-lime-400 px-4 py-2 text-sm font-bold text-black"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-[#111618] text-center">
          <h2 className="text-2xl font-extrabold uppercase text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-black"
          >
            Go to workouts
          </Link>
        </div>
      )}
    </main>
  );
};

export default MyPlanClient;