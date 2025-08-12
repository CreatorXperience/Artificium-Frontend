import { createContext } from 'react';

interface MediaContextProp {
  currentMediaId: string | null;
  setCurrentMediaId: (val: string | null) => void;
}

export const MediaContext = createContext<MediaContextProp | undefined>(
  undefined,
);
