import { Metadata } from "next";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import GoalTable from "@/components/Tables/GoalTable";

export const metadata: Metadata = {
  title: "Goal-setting Page | Productivity Tool",
  description: "This is where you set your goals",
};

export default function GoalSettingPage() {
  return (
    <DefaultLayout>
      <div style={{ padding: "20px" }}>
        <GoalTable />
      </div>
    </DefaultLayout>
  );
};


