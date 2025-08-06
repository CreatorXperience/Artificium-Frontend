import { createContext } from 'react';
import type { SocketContextProps } from '../types/types';

export const SocketContext = createContext<SocketContextProps>({
  socket: null,
  isConnected: false,
});
