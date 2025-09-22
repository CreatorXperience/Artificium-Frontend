import { Link } from "react-router";
import ActionButton from "../ActionButton";
import FormInput from "../FormInput";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://artificium-main.onrender.com';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const forgotPasswordMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch(`${BASE_URL}/auth/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get("content-type");

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || "Unexpected error occurred.");
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to send reset link.");
      }

      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Reset link sent successfully!");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    },
  });

  const handleForgetPassword = () => {
    if (!email.trim()) {
      toast.error("Please enter a valid email.");
      return;
    }
    forgotPasswordMutation.mutate(email);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-800 text-white font-plus">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Forgot your password?
          </h1>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            No worries! Enter your email below and we’ll send you a link to
            reset your password.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email address
            </label>
            <FormInput
              id="email"
              type="email"
              placeholder="Enter your email"
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            />
          </div>

          <ActionButton
            text={
              forgotPasswordMutation.isPending
                ? "Sending..."
                : "Send Reset Link"
            }
            onClick={handleForgetPassword}
            disabled={forgotPasswordMutation.isPending}
          />

          <div className="text-sm flex justify-center">
            <Link to="/login" className="text-gray-400 hover:underline">
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-2/5 relative">
        <img
          src="https://i.postimg.cc/wjz7xBR2/9375b84f-6b13-4868-822d-20925e5fb194.jpg"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
