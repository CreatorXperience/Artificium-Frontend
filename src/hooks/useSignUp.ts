import toast from "react-hot-toast";
import { signup } from "../feature/auth/services/signup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const useSignUp = (BASE_URL: string) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (_formData: SignUpFormData) => {
      return signup(_formData, BASE_URL);
    },

    onSuccess: (SignUpData) => {
      // Save token and user info
      localStorage.setItem("user", JSON.stringify(SignUpData.data));
      toast.success("Sign up successful!", {
        duration: 3000,
      });
      navigate("/signIn");
    },
    onError: (error) => {
      if (error.message === "user already exists") {
        toast.error("This email is already registered.", {
          duration: 5000,
        });
      } else {
        toast.error("Sign up failed. Please try again.", {
          duration: 5000,
        });
      }
    },
  });
};
