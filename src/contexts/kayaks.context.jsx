import { createContext, useState } from 'react';

import KAYAKS from '../kayak-data.json';

export const KayaksContext = createContext({
  kayaks: [],
});

export const KayaksProvider = ({ children }) => {
  const [kayaks, setKayaks] = useState(KAYAKS);
  const value = { kayaks };
  return (
    <KayaksContext.Provider value={value}> {children} </KayaksContext.Provider>
  );
};
