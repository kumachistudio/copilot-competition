import React, { useState } from "react";

interface AttachmentsFormProps {
  attachments: string[];
  setAttachments: React.Dispatch<React.SetStateAction<string[]>>;
}

const AttachmentsForm: React.FC<AttachmentsFormProps> = ({ attachments, setAttachments }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAttachmentChange = (index: number, value: string) => {
    const newAttachments = [...attachments];
    newAttachments[index] = value;
    setAttachments(newAttachments);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/attachments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attachments }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit attachments');
      }

      // Handle successful submission
      alert('Attachments submitted successfully');
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
      <label>Attachments</label>
      {attachments.map((attachment, index) => (
        <input
          key={index}
          type="text"
          value={attachment}
          onChange={(e) => handleAttachmentChange(index, e.target.value)}
        />
      ))}
      <button type="button" onClick={() => setAttachments([...attachments, ""])}>Add Attachment</button>
      <button type="submit" disabled={loading}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AttachmentsForm;
