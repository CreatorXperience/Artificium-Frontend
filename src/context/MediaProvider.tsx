import { useState, type ReactNode } from 'react';
import { MediaContext } from './MediaContext';

export default function MediaProvider({ children }: { children: ReactNode }) {
  const [currentMediaId, setCurrentMediaId] = useState<string | null>(null);

  return (
    <MediaContext.Provider value={{ currentMediaId, setCurrentMediaId }}>
      {children}
    </MediaContext.Provider>
  );
}
