// src/hooks/useSignIn.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

type LoginData = {
  email: string;
  password: string;
};

export const useSignIn = (BASE_URL: string) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (credentials: LoginData) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      return data;
    },
    onSuccess: (data) => {
      // Store user data and token
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.token);

      toast.success("Login successful!");
      navigate("/Workspace");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed. Please try again.");
      console.error("Login error:", error);
    },
  });
};
