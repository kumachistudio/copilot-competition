import { Metadata } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import GoalForm from "@/components/Goals/GoalForm";
import MilestonesForm from "@/components/Goals/MilestonesForm";
import RemindersForm from "@/components/Goals/RemindersForm";
import TagsForm from "@/components/Goals/TagsForm";
import { GoalProvider, useGoal } from "@/context/GoalContext";

export const metadata: Metadata = {
  title: "Create Your Goal Page | Productivity Tool",
  description: "This is where you create your goals",
};

const GoalSettingPageContent: React.FC = () => {
  const { goalId, setGoalId } = useGoal();
  const [milestonesCreated, setMilestonesCreated] = useState(false);
  const [remindersCreated, setRemindersCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGoalCreated = (id: string) => {
    setGoalId(id);
    setError(null);
  };

  const handleGoalCreationFailed = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleMilestonesCreated = () => {
    setMilestonesCreated(true);
  };

  const handleRemindersCreated = () => {
    setRemindersCreated(true);
  };

  const handleTagsCreated = () => {
    router.push("/goal-setting");
  };

  return (
    <div style={{ padding: "20px" }}>
      {goalId ? (
        milestonesCreated ? (
          remindersCreated ? (
            <TagsForm goalId={goalId} onTagsCreated={handleTagsCreated} />
          ) : (
            <RemindersForm goalId={goalId} onRemindersCreated={handleRemindersCreated} />
          )
        ) : (
          <MilestonesForm goalId={goalId} onMilestonesCreated={handleMilestonesCreated} />
        )
      ) : (
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <GoalForm onGoalCreated={handleGoalCreated} onGoalCreationFailed={handleGoalCreationFailed} />
        </>
      )}
    </div>
  );
};

export default function GoalSettingPage() {
  return (
    <GoalProvider>
      <DefaultLayout>
        <GoalSettingPageContent />
      </DefaultLayout>
    </GoalProvider>
  );
}

