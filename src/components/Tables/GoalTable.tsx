"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function GoalTable() {
  const router = useRouter();
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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center justify-between">
        <div className="sm:flex-auto">
          <h2 className="text-xl font-semibold text-gray-900">Your Goals</h2>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            onClick={() => router.push('/create-goal')}
          >
            Create Goal
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Progress</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {dummyGoals.map((goal) => (
                    <tr key={goal.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{goal.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{goal.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <progress value={goal.progress} max="100" className="rounded-full">{goal.progress}%</progress>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm" style={{ color: goal.progress === 100 ? "green" : "orange" }}>
                        {goal.progress === 100 ? "Complete" : "In progress"}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                        <div className="flex space-x-2 justify-center">
                          <FaEdit onClick={() => handleEdit(goal.id)} className="text-indigo-600 hover:text-indigo-900 cursor-pointer" />
                          <FaTrash onClick={() => handleDelete(goal.id)} className="text-red-600 hover:text-red-900 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


