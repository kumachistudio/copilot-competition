"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HabitTrackerForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: string[] = [];
    if (name.length > 50) newErrors.push("Name should not be longer than 50 characters.");
    if (description.length > 100) newErrors.push("Description should not be longer than 100 characters.");
    if (new Date(startDate) > new Date(endDate)) newErrors.push("Start date should be before end date.");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const habitData = { name, description, frequency, startDate, endDate };

    try {
      const response = await fetch("/api/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(habitData),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Failed to create habit");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const isFormValid = () => {
    return name && description && frequency && startDate && (!endDate || new Date(startDate) <= new Date(endDate));
  };

  return (
    <div>
      <h2 className="mb-6 text-xl font-light text-gray-700">Create a New Habit</h2>
      {errors.length > 0 && (
        <div className="mb-4 text-red-500">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2 font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="frequency" className="mb-2 font-medium text-gray-700">Frequency:</label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="startDate" className="mb-2 font-medium text-gray-700">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDate" className="mb-2 font-medium text-gray-700">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end md:col-span-2">
          <button
            type="submit"
            className={`px-4 py-2 font-medium text-white rounded-md ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
            disabled={!isFormValid()}
          >
            Create Habit
          </button>
        </div>
      </form>
    </div>
  );
}