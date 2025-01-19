"use client";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyHabits = [
  {
    id: 1,
    name: "Morning Exercise",
    description: "30 minutes of jogging",
    frequency: "daily",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    goal: "Fitness",
  },
  {
    id: 2,
    name: "Read a Book",
    description: "Read 20 pages",
    frequency: "daily",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    goal: "Personal Development",
  },
  {
    id: 3,
    name: "Weekly Review",
    description: "Review weekly goals",
    frequency: "weekly",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    goal: "Productivity",
  },
];

export default function HabitTrackerTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Description</th>
            <th className="px-4 py-2 border-b">Frequency</th>
            <th className="px-4 py-2 border-b">Start Date</th>
            <th className="px-4 py-2 border-b">End Date</th>
            <th className="px-4 py-2 border-b">Goal</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyHabits.map((habit) => (
            <tr key={habit.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{habit.name}</td>
              <td className="px-4 py-2 border-b">{habit.description}</td>
              <td className="px-4 py-2 border-b">{habit.frequency}</td>
              <td className="px-4 py-2 border-b">{habit.startDate}</td>
              <td className="px-4 py-2 border-b">{habit.endDate}</td>
              <td className="px-4 py-2 border-b">{habit.goal}</td>
              <td className="px-4 py-2 border-b">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="ml-2 text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}