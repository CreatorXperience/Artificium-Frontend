// src/hooks/useAuth.ts
import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, logout, isAuthenticated: !!user };
}
