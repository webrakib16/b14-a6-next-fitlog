"use client";

import { useWorkout } from "@/Context/WorkoutContext";
import type { Workout } from "@/types/workout";
import { toast } from "react-toastify";

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { plan, saved, addToPlan, saveWorkout } = useWorkout();

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isInPlan) {
      toast.info("Workout is already in today's plan");
      return;
    }

    addToPlan(workout);
    toast.success("Workout added to today's plan");
  };

  const handleSave = () => {
    if (isSaved) {
      toast.info("Workout is already saved");
      return;
    }

    saveWorkout(workout);
    toast.success("Workout saved for later");
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black"
      >
        {isInPlan ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
      >
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;