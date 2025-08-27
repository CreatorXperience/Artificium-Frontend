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

  const { data, isLoading } = useQuery({
    queryFn: getMe,
    queryKey: ["/me"],
    staleTime: 5000,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (data && data.data) {
      console.log(data.data);
      setUser(data.data);
    }
  }, [data]);

  const updateUser = (newData: Partial<User>) => {
    setUser((prev: User) => ({ ...prev, ...newData }));
  };

  const value: UserContextType = { user, setUser, updateUser, isLoading };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
