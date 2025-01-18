"use client";
import React, { useState } from "react";

const MilestonesForm: React.FC = () => {
  const [milestones, setMilestones] = useState<string[]>([""]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMilestoneChange = (index: number, value: string) => {
    const newMilestones = [...milestones];
    newMilestones[index] = value;
    setMilestones(newMilestones);
  };

  const handleAddMilestone = () => {
    if (milestones.length < 3) {
      setMilestones([...milestones, ""]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/milestones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ milestones }),
      });

      if (!response.ok) {
        throw new Error('Failed to save milestones');
      }

      const data = await response.json();
      console.log('Milestones saved:', data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = milestones.length > 0 && milestones.every((milestone, index) => milestone.length > 0 && (index === 0 || milestone.length >= 5));

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Milestones</h3>
          <p className="mt-1 text-sm text-gray-500">Add your milestones below.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="sm:col-span-6">
              <label htmlFor={`milestone-${index}`} className="block text-sm font-medium text-gray-700">
                Milestone {index + 1}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name={`milestone-${index}`}
                  id={`milestone-${index}`}
                  value={milestone}
                  onChange={(e) => handleMilestoneChange(index, e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 hover:cursor-pointer p-1.5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleAddMilestone}
            disabled={milestones.length >= 3}
          >
            Add Milestone
          </button>
          <button
            type="submit"
            className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${loading || !isFormValid ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            disabled={loading || !isFormValid}
          >
            Save Milestones
          </button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </form>
  );
};

export default MilestonesForm;
