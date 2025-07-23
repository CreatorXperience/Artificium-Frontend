import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";

const GOOGLE_USER_INFO_URL = import.meta.env.VITE_GOOGLE_USER_INFO_URL || "";
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://artificium-v2.onrender.com";

export const useGoogleAuth = () => {
  const navigate = useNavigate();

  const handleGoogleSignUp = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(GOOGLE_USER_INFO_URL, {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const userData = await response.json();

        const payload = {
          firstname: userData.given_name,
          lastname: userData.family_name,
          email: userData.email,
          image: userData.picture,
          isVerified: userData.email_verified,
        };

        const signupResponse = await fetch(`${BASE_URL}/auth/google/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const SignUpData = await signupResponse.json();

        if (!signupResponse.ok) {
          if (SignUpData.message === "user already exists") {
            toast.error("This email is already registered.");
            return;
          }

          toast.error(SignUpData.message || "Signup failed");
          return;
        }

        localStorage.setItem("user", JSON.stringify(SignUpData.data));
        toast.success("Sign up successful!");
        navigate("/Workspace");
      } catch (error) {
        const errorMessage =
          error && typeof error === "object" && "message" in error
            ? (error as { message?: string }).message
            : "Google sign-up failed";
        toast.error(errorMessage || "Google sign-up failed");
      }
    },
    onError: (error) => {
      const errorMessage =
        error.error_description || error.error || "Unknown error";
      toast.error(`Google sign-in failed: ${errorMessage}`);
    },
  });

  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(GOOGLE_USER_INFO_URL, {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const userData = await response.json();

        const payload = {
          email: userData.email,
          firstname: userData.given_name,
          lastname: userData.family_name,
          image: userData.picture,
          isVerified: userData.email_verified,
        };

        const LoginResponse = await fetch(`${BASE_URL}/auth/google/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const SignInData = await LoginResponse.json();

        if (!LoginResponse.ok) {
          throw new Error(SignInData.message || "Google login failed");
        }

        localStorage.setItem("token", SignInData.token);
        localStorage.setItem("user", JSON.stringify(SignInData.data));
        toast.success("Login successful!");
        navigate("/Workspace");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Google login failed"
        );
        console.error("Google sign-in error:", error);
      }
    },
  });

  return { handleGoogleSignUp, handleGoogleSignIn };
};
