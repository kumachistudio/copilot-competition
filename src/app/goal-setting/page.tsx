"use client"
import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import GoalForm from "@/components/Goals/GoalForm";
import { useRouter } from "next/navigation";
 import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons

export const metadata: Metadata = {
    title:
      "Goal-setting Page | Productivity Tool",
    description: "This is Next.js Home page for NextAdmin Dashboard Kit",
  };

export default function  GoalSettingPage(){
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/goals");
      } else {
        console.error("Failed to create goal");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const dummyGoals = [
    { id: 1, title: "Goal 1", description: "Description 1", progress: 50 },
    { id: 2, title: "Goal 2", description: "Description 2", progress: 100 },
    { id: 3, title: "Goal 3", description: "Description 3", progress: 70 },
  ];

  const handleEdit = (id: number) => {
    // Handle edit logic
    console.log(`Edit goal with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    // Handle delete logic
    console.log(`Delete goal with id: ${id}`);
  };

  return (
    <DefaultLayout>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "20px" }}>
          <h2>Your Goals</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyGoals.map((goal) => (
                <tr key={goal.id}>
                  <td>{goal.title}</td>
                  <td>{goal.description}</td>
                  <td>
                    <progress value={goal.progress} max="100">{goal.progress}%</progress>
                  </td>
                  <td style={{ color: goal.progress === 100 ? "green" : "orange" }}>
                    {goal.progress === 100 ? "Complete" : "In progress"}
                  </td>
                  <td>
                    <FaEdit onClick={() => handleEdit(goal.id)} style={{ cursor: "pointer", marginRight: "10px" }} />
                    <FaTrash onClick={() => handleDelete(goal.id)} style={{ cursor: "pointer" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ flex: 1, padding: "20px" }}>
          <h1>Set a New Goal</h1>
          <GoalForm />
        </div>
      </div>
    </DefaultLayout>
  );
};


