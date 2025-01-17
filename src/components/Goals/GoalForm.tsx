"use client";
import React, { useState } from "react";

export default function GoalForm() {
  const [goal, setGoal] = useState({
    title: "",
    description: "",
    category: "",
    startDate: "",
    endDate: "",
    priority: "medium",
    status: "not started",
    progress: 0,
    visibility: "private",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        console.error("Failed to create goal");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={goal.title} onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={goal.description} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Category</label>
        <input type="text" name="category" value={goal.category} onChange={handleChange} />
      </div>
      <div>
        <label>Start Date</label>
        <input type="date" name="startDate" value={goal.startDate} onChange={handleChange} />
      </div>
      <div>
        <label>End Date</label>
        <input type="date" name="endDate" value={goal.endDate} onChange={handleChange} />
      </div>
      <div>
        <label>Priority</label>
        <select name="priority" value={goal.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select name="status" value={goal.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Progress</label>
        <input type="number" name="progress" value={goal.progress} onChange={handleChange} />
      </div>
      <div>
        <label>Visibility</label>
        <select name="visibility" value={goal.visibility} onChange={handleChange}>
          <option value="private">Private</option>
          <option value="shared">Shared</option>
        </select>
      </div>
      <button type="submit">Create Goal</button>
    </form>
  );
}
