import { Metadata } from "next";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import GoalForm from "@/components/Goals/GoalForm";
import MilestonesForm from "@/components/Goals/MilestonesForm";

export const metadata: Metadata = {
  title: "Create Your Goal Page | Productivity Tool",
  description: "This is where you create your goals",
};

export default function GoalSettingPage() {
  const [goalCreated, setGoalCreated] = useState<boolean>(false);

  const handleGoalCreated = () => {
    setGoalCreated(true);
  };

  return (
    <DefaultLayout>
      <div style={{ padding: "20px" }}>
        {goalCreated ? (
          <MilestonesForm />
        ) : (
          <GoalForm onGoalCreated={handleGoalCreated} />
        )}
      </div>
    </DefaultLayout>
  );
}

