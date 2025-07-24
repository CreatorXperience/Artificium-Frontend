// src/hooks/useUser.ts
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import type { UserContextType } from "../types/types";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
