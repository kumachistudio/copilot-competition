import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GoalContextType {
  goalId: string | null;
  setGoalId: (id: string) => void;
}

const GoalContext = createContext<GoalContextType | undefined>(undefined);

export const GoalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [goalId, setGoalId] = useState<string | null>(null);

  return (
    <GoalContext.Provider value={{ goalId, setGoalId }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = (): GoalContextType => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error('useGoal must be used within a GoalProvider');
  }
  return context;
};
