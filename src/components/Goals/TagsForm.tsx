"use client";
import React, { useState } from "react";

const TagsForm: React.FC = () => {
  const [tags, setTags] = useState<string[]>([""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleAddTag = () => {
    if (tags.length < 3) {
      setTags([...tags, ""]);
      setMessage(null);
    } else {
      setMessage("You can't enter more than 3 tags");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tags }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit tags');
      }

      // Handle successful submission
      alert('Tags submitted successfully');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = tags.length > 0 && tags.every(tag => tag.length > 0);

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Tags</h3>
          <p className="mt-1 text-sm text-gray-500">Add your tags below.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          {tags.map((tag, index) => (
            <div key={index} className="sm:col-span-6">
              <label htmlFor={`tag-${index}`} className="block text-sm font-medium text-gray-700">
                Tag {index + 1}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name={`tag-${index}`}
                  id={`tag-${index}`}
                  value={tag}
                  onChange={(e) => handleTagChange(index, e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1.5"
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
            onClick={handleAddTag}
            disabled={tags.length >= 3}
          >
            Add Tag
          </button>
          <button
            type="submit"
            className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${loading || !isFormValid ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            disabled={loading || !isFormValid}
          >
            Submit
          </button>
        </div>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </form>
  );
};

export default TagsForm;
