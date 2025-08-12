import { useContext } from 'react';
import { MediaContext } from '../context/MediaContext';

export function useMediaManager() {
  const mediaContext = useContext(MediaContext);

  if (!mediaContext)
    throw new Error('useMediaManager must be used within a MediaProvider');

  return mediaContext;
}
