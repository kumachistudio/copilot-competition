import React from 'react';

const GoalCard = ({ goal }) => {
  return (
    <div>
      <h2>{goal.title}</h2>
      <p>{goal.description}</p>
      {/* Add more goal details here */}
    </div>
  );
};

export default GoalCard;
