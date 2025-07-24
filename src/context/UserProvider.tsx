import { useState, type ReactNode } from "react";
import { UserContext } from "./userContext";
import type { User, UserContextType } from "../types/types";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    id: "",
    image: "",
    isVerified: false,
    username: "",
    email: "",
  });

  const updateUser = (newData: Partial<User>) => {
    setUser((prev: User) => ({ ...prev, ...newData }));
  };

  const value: UserContextType = { user, setUser, updateUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
