import React from "react";

interface MilestonesFormProps {
  milestones: string[];
  setMilestones: React.Dispatch<React.SetStateAction<string[]>>;
}

const MilestonesForm: React.FC<MilestonesFormProps> = ({ milestones, setMilestones }) => {
  const handleMilestoneChange = (index: number, value: string) => {
    const newMilestones = [...milestones];
    newMilestones[index] = value;
    setMilestones(newMilestones);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/milestones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ milestones }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Milestones saved:', data);
    } catch (error) {
      console.error('Failed to save milestones:', error);
    }
  };

  return (
    <div>
      <label>Milestones</label>
      {milestones.map((milestone, index) => (
        <input
          key={index}
          type="text"
          value={milestone}
          onChange={(e) => handleMilestoneChange(index, e.target.value)}
        />
      ))}
      <button type="button" onClick={() => setMilestones([...milestones, ""])}>Add Milestone</button>
      <button type="button" onClick={handleSubmit}>Save Milestones</button>
    </div>
  );
};

export default MilestonesForm;
