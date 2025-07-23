// src/hooks/useSignIn.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router";
import { useUser } from "../hooks/useUser";

type LoginData = {
  email: string;
  password: string;
};

export const useSignIn = (BASE_URL: string) => {
  // const navigate = useNavigate();
  const { updateUser } = useUser();

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
      const { id, firstname, lastname, email, image, isVerified, username } =
        data.data;
      const user = {
        id,
        firstname,
        lastname,
        email,
        image,
        isVerified,
        username,
      };
      updateUser(user);

      toast.success("Login successful!");
      // navigate("/Workspace");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed. Please try again.");
      console.error("Login error:", error);
    },
  });
};
