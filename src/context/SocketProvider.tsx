import { useEffect, useRef, useState } from 'react';
import { useUser } from '../hooks/useUser';
import { SocketContext } from './SocketContext';
import { io, type Socket } from 'socket.io-client';

const URL = import.meta.env.VITE_API_BASE_URL || '';

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const { isLoading, user } = useUser();
  const socketRef = useRef<Socket>(null);

  useEffect(() => {
    if (!isLoading && user.id && !socketRef.current) {
      const socket = io(URL, {
        withCredentials: true,
      });

      socket.on('connect', () => {
        setIsConnected(true);
        socket.emit('subscribe', user.id);
      });

      socket.on('disconnect', () => {
        setIsConnected(false);
      });

      socketRef.current = socket;
    }

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
      socketRef.current = null;
    };
  }, [isLoading, user.id]);

  return (
    <SocketContext.Provider value={{ isConnected, socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
}
