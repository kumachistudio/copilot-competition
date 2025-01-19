"use client";
import React, { useState } from "react";

interface GoalFormProps {
  onGoalCreated: (id: string) => void;
  onGoalCreationFailed: (errorMessage: string) => void;
}

export default function GoalForm({ onGoalCreated, onGoalCreationFailed }: GoalFormProps) {
  const [goal, setGoal] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "medium",
    status: "not started",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    if (!goal.title) newErrors.push("Title is required.");
    if (goal.title.length > 50) newErrors.push("Title should not be longer than 50 characters.");
    if (!goal.description) newErrors.push("Description is required.");
    if (goal.description.length > 100) newErrors.push("Description should not be longer than 100 characters.");
    if (!goal.startDate) newErrors.push("Start date is required.");
    if (!goal.endDate) newErrors.push("End date is required.");
    if (new Date(goal.startDate) > new Date(goal.endDate)) {
      newErrors.push("Start date cannot be later than end date.");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goal),
      });

      if (response.ok) {
        // Handle successful goal creation
        console.log("Goal created successfully");
        setSuccessMessage("Goal created successfully!");
        const { id } = await response.json();
        onGoalCreated(id);
        // Reset form fields
        setGoal({
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          priority: "medium",
          status: "not started",
        });
      } else {
        console.error("Failed to create goal");
        onGoalCreationFailed("Failed to create goal");
      }
    } catch (error) {
      console.error("An error occurred", error);
      if (error instanceof Error) {
        onGoalCreationFailed(error.message);
      } else {
        onGoalCreationFailed("An unknown error occurred");
      }
    }
  };

  const isFormValid = () => {
    return (
      goal.title &&
      goal.description &&
      goal.startDate &&
      goal.endDate &&
      goal.title.length <= 50 &&
      goal.description.length <= 100 &&
      new Date(goal.startDate) <= new Date(goal.endDate)
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Create a New Goal</h3>
          <p className="mt-1 text-sm text-gray-500">Fill out the form below to set a new goal.</p>
        </div>

        {errors.length > 0 && (
          <div className="mb-4 text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 text-green-500">
            <p>{successMessage}</p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                value={goal.title}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1.5"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea
                name="description"
                id="description"
                value={goal.description}
                onChange={handleChange}
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-24 p-1.5"
              ></textarea>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={goal.startDate}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1.5"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={goal.endDate}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1.5"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <div className="mt-1">
              <select
                name="priority"
                id="priority"
                value={goal.priority}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1.5"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="mt-1">
              <select
                name="status"
                id="status"
                value={goal.status}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1.5"
              >
                <option value="not started">Not Started</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isFormValid() ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-200 cursor-not-allowed'}`}
            disabled={!isFormValid()}
          >
            Create Goal
          </button>
        </div>
      </div>
    </form>
  );
}
