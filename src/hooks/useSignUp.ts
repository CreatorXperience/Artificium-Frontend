import toast from "react-hot-toast";
import { signup } from "../feature/auth/services/signup";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "./useUser";

export type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type UserResponse = {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  isVerified: boolean;
  image: string;
  username: string;
};

export const useSignUp = () => {
  const { updateUser } = useUser();
  const BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "https://artificium-v2.onrender.com";

  return useMutation<UserResponse, Error, SignUpFormData>({
    mutationFn: async (formData: SignUpFormData) => {
      return signup(formData, BASE_URL);
    },
    onSuccess: (data) => {
      toast.success("Sign up successful!", { duration: 3000 });
      updateUser(data);

      return data;
    },
    onError: (error: Error) => {
      const errorMessage = error.message.toLowerCase();

      if (errorMessage.includes("user already exists")) {
        toast.error("This email is already registered.", { duration: 5000 });
      } else if (errorMessage.includes("validation failed")) {
        toast.error("Invalid form data. Please check your inputs.", {
          duration: 5000,
        });
      } else {
        toast.error("Sign up failed. Please try again.", { duration: 5000 });
      }
    },
  });
};
