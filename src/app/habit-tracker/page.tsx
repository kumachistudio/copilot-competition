import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import HabitTrackerForm from "@/components/HabitTracker/HabitTrackerForm";
import HabitTrackerTable from "@/components/Tables/HabitTrackerTable";

export const metadata: Metadata = {
  title:
    "Habit Tracker Page",
  description: "This is the Habit Tracker Page",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/* <HabitTrackerForm/> */}
        <HabitTrackerTable/>
      </DefaultLayout>
    </>
  );
}
