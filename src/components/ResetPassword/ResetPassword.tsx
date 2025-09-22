import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ActionButton from "../ActionButton";
import FormInput from "../FormInput";
import { toast } from "react-hot-toast";
import { useUser } from "../../hooks/useUser";

interface ResetPasswordResponse {
  message?: string;
  error?: string;
  data?: {
    email: string;
    firstname: string;
    lastname: string;
    isVerified: string;
  };
}

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const query = new URLSearchParams(location.search);

  const token = decodeURIComponent(query.get("token") || "");
  const email = decodeURIComponent(query.get("email") || "");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'https://artificium-main.onrender.com';

  const validatePassword = (): string | null => {
    if (!password || !confirmPassword) {
      return "Please fill in all fields";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }

    // Add more complex validation if needed
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }

    return null;
  };

  const handleReset = async () => {
    const validationError = validatePassword();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, password }),
      });

      const data: ResetPasswordResponse = await res.json();

      if (!res.ok) {
        // Handle specific error codes
        if (res.status === 400) {
          throw new Error(
            data.error || "Invalid request. Please check your input."
          );
        } else if (res.status === 404) {
          throw new Error(
            "Token has expired. Please request a new password reset."
          );
        } else {
          throw new Error(data.error || "Failed to reset password");
        }
      }

      // Update user context if needed
      if (data.data) {
        updateUser(data.data);
      }

      toast.success(data.message || "Password reset successfully");
      navigate("/login");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(message);
      console.error("Reset password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-800 text-white font-plus">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Reset your Password</h1>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          Create a new password to access your account
        </p>

        <div className="space-y-4">
          <div className="relative">
            <FormInput
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <FormInput
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="text-xs text-gray-400">
            Password must be at least 8 characters with uppercase and numbers
          </div>
          <ActionButton
            text={isLoading ? "Processing..." : "Reset Password"}
            onClick={handleReset}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src="https://i.postimg.cc/wjz7xBR2/9375b84f-6b13-4868-822d-20925e5fb194.jpg"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
