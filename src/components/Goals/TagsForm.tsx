import React, { useState } from "react";

interface TagsFormProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagsForm: React.FC<TagsFormProps> = ({ tags, setTags }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
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

  return (
    <form onSubmit={handleSubmit}>
      <label>Tags</label>
      {tags.map((tag, index) => (
        <input
          key={index}
          type="text"
          value={tag}
          onChange={(e) => handleTagChange(index, e.target.value)}
        />
      ))}
      <button type="button" onClick={() => setTags([...tags, ""])}>Add Tag</button>
      <button type="submit" disabled={loading}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default TagsForm;
