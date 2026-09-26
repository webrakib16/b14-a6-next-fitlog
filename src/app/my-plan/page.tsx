import MyPlanClient from "@/Components/Shared/my-plan";
import { Suspense } from "react";


const MyPlan = () => {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MyPlanClient />
    </Suspense>
  );
};

export default MyPlan;