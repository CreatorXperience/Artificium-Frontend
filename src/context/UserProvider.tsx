import { useEffect, useState, type ReactNode } from "react";
import { UserContext } from "./userContext";
import type { User, UserContextType } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
const getMe = async () => {
  const res = await axiosInstance.get("/user/me");
  return res.data;
};

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

  const { data } = useQuery({
    queryFn: getMe,
    queryKey: ["/me"],
    refetchInterval: 5000,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (data && data.data) {
      setUser(data.data);
    }
  }, [data]);

  const updateUser = (newData: Partial<User>) => {
    setUser((prev: User) => ({ ...prev, ...newData }));
  };

  const value: UserContextType = { user, setUser, updateUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
