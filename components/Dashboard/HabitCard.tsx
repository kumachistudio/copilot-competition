import React from 'react';

const HabitCard = ({ habit }) => {
  return (
    <div>
      <h2>{habit.title}</h2>
      <p>{habit.description}</p>
      {/* Add more habit details here */}
    </div>
  );
};

export default HabitCard;
