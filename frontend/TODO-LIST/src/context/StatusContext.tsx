import React, { createContext, useContext, useState } from 'react';

interface StatusContextType {
  status: number | boolean;
  setStatus: React.Dispatch<React.SetStateAction<number | boolean>>;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [status, setStatus] = useState<number | boolean>(false);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
};
