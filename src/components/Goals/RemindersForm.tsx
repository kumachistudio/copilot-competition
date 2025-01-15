import React from "react";

interface RemindersFormProps {
  reminders: string[];
  setReminders: React.Dispatch<React.SetStateAction<string[]>>;
}

const RemindersForm: React.FC<RemindersFormProps> = ({ reminders, setReminders }) => {
  const handleReminderChange = (index: number, value: string) => {
    const newReminders = [...reminders];
    newReminders[index] = value;
    setReminders(newReminders);
  };

  return (
    <div>
      <label>Reminders</label>
      {reminders.map((reminder, index) => (
        <input
          key={index}
          type="datetime-local"
          value={reminder}
          onChange={(e) => handleReminderChange(index, e.target.value)}
        />
      ))}
      <button type="button" onClick={() => setReminders([...reminders, ""])}>Add Reminder</button>
    </div>
  );
};

export default RemindersForm;
