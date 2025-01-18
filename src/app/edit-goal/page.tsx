import { Metadata } from "next";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import EditGoalForm from "@/components/Goals/EditGoalForm";

export const metadata: Metadata = {
  title: "Edit Your Goal Page | Productivity Tool",
  description: "This is where you edit your goal",
};

export default function GoalSettingPage() {
  return (
    <DefaultLayout>
      <div style={{ padding: "20px" }}>
        <EditGoalForm goalId="1"/>
      </div>
    </DefaultLayout>
  );
};


