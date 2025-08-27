// components/VerifyEmail.tsx
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import InputOTP from "./InputOTP";
import ActionButton from "../ActionButton";
import { useUser } from "../../hooks/useUser";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const verifyOtpRequest = async ({
  otp,
  userId,
}: {
  otp: string;
  userId: string;
}) => {
  const response = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp, userId }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "OTP verification failed");
  }

  return await response.json();
};

const VerifyEmail: React.FC = () => {
  const [code, setCode] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [error, setError] = useState("");
  const { updateUser } = useUser();
  const [searchParams] = useSearchParams();
  const userId = decodeURIComponent(searchParams.get("userId") || "");
  const navigate = useNavigate();

  const {
    mutate: verifyOtp,
    isPending,
    isSuccess,
    isError,
    error: apiError,
  } = useMutation({
    mutationFn: verifyOtpRequest,
    onSuccess: (data) => {
      updateUser(data.user); // ✅ Login now
      navigate("/workSpace"); // ✅ Only after verification
    },
    onError: (error: Error) => {
      setError(error.message);
    },
  });

  const handleVerify = () => {
    if (code.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }
    if (!userId) {
      setError("Missing user ID");
      return;
    }

    verifyOtp({ otp: code, userId });
  };

  const handleResendCode = () => {
    if (resendCountdown > 0) return;
    setIsResending(true);
    setError("");
    console.log("Resending verification code...");
    setTimeout(() => {
      setIsResending(false);
      setResendCountdown(30);
    }, 1000);
  };

  useEffect(() => {
    if (resendCountdown <= 0) return;
    const timer = setTimeout(() => {
      setResendCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-800 text-white font-plus">
      <div className="w-full md:w-3/5 flex flex-col justify-center px-4 sm:px-8 md:px-16 py-10 sm:py-16 space-y-6">
        <div className="max-w-md w-full space-y-6 mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
            Verify your{" "}
            <span className="text-gradient-green-blue-dayblue-500">email</span>
          </h1>
          <p className="text-noble-black-300 text-sm sm:text-base text-center sm:text-left">
            Enter the 6-digit code sent to your email to continue.
          </p>

          <div className="flex justify-center">
            <InputOTP
              length={6}
              value={code}
              onChange={(value) => {
                setCode(value);
                setError("");
              }}
              aria-label="6-digit verification code"
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          {isError && !error && (
            <p className="text-red-400 text-sm text-center">
              {(apiError as Error).message}
            </p>
          )}
          {isSuccess && (
            <p className="text-green-400 text-sm text-center">
              Email verified!
            </p>
          )}

          <div className="text-sm text-center mt-2">
            {resendCountdown > 0 ? (
              <span className="text-noble-black-400">
                Resend code in {resendCountdown}s
              </span>
            ) : (
              <button
                onClick={handleResendCode}
                disabled={isResending}
                className={`text-day-blue-400 hover:underline ${
                  isResending
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {isResending ? "Sending..." : "Resend code"}
              </button>
            )}
          </div>

          <ActionButton
            text={isPending ? "Verifying..." : "Verify Email"}
            onClick={handleVerify}
            disabled={code.length !== 6 || isPending}
          />
        </div>

        <div className="text-sm text-center mt-6">
          <a
            href="/login"
            className="text-noble-black-300 hover:text-day-blue-400 transition-colors"
          >
            Back to Login
          </a>
        </div>
      </div>
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

export default VerifyEmail;
