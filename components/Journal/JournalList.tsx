import React from 'react';
import JournalEntry from './JournalEntry';

const JournalList = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <JournalEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default JournalList;
