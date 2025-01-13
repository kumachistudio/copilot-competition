import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
      {/* Add more journal entry details here */}
    </div>
  );
};

export default JournalEntry;
