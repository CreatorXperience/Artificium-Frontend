import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import ActionButton from "../../components/ActionButton";
import toast from "react-hot-toast";

interface OtpResponse {
  success: boolean;
  message?: string;
  countdown?: number;
}

interface GetOtpModalProps {
  onClose: () => void;
  id?: string;
  email?: string;
}

const GetOtpModal = ({ onClose, id, email }: GetOtpModalProps) => {
  const navigate = useNavigate();
  const BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "https://artificium-v2.onrender.com";

  const [expireAt, setExpireAt] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number>(0);

  const sendOtpRequest = async (userId: string): Promise<OtpResponse> => {
    const response = await fetch(`${BASE_URL}/auth/otp?userId=${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "Failed to send OTP. Please try again."
      );
    }

    return await response.json();
  };

  // Countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (expireAt) {
      interval = setInterval(() => {
        const remaining = Math.max(0, expireAt - Date.now());
        setCountdown(Math.floor(remaining / 1000));

        if (remaining <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [expireAt]);

  const {
    mutate: getOtp,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: sendOtpRequest,
    onSuccess: (data) => {
      toast.success("OTP sent successfully!");
      if (data.countdown) {
        setExpireAt(Date.now() + data.countdown * 1000);
      }
      setTimeout(() => {
        navigate(`/verify-email?userId=${encodeURIComponent(id || "")}`);
      }, 2000);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleGetOtp = () => {
    if (!id) {
      toast.error("User ID is missing");
      return;
    }
    getOtp(id);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="otp-modal-title"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-noble-black-600 rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <div className="flex flex-col space-y-5">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h2
              id="otp-modal-title"
              className="text-2xl font-semibold text-noble-black-100"
            >
              Verify Your Account
            </h2>
            <button
              onClick={onClose}
              className="text-noble-black-400 hover:text-noble-black-600 focus:outline-none"
              aria-label="Close modal"
              disabled={isPending}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Info About ID */}
          {email && (
            <p className="text-sm text-noble-black-400">
              We'll send a verification code to:{" "}
              <span className="font-medium text-noble-black-100">{email}</span>
            </p>
          )}

          {/* Info Box */}
          <div className="bg-day-blue-100 border border-day-blue-200 p-4 rounded-xl text-day-blue-700 text-sm flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-day-blue-500 mt-0.5 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Your account needs verification. Click <strong>Get OTP</strong> to
              receive your code.
            </span>
          </div>

          {/* Error Message */}
          {isError && (
            <div className="bg-red-100 border border-red-200 p-3 rounded-lg text-red-700 text-sm flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{error.message}</span>
            </div>
          )}

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-stem-green-100 border border-stem-green-200 p-3 rounded-lg text-stem-green-700 text-sm flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-stem-green-500 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>OTP sent successfully! Redirecting...</span>
            </div>
          )}

          {/* Countdown */}
          {countdown > 0 && (
            <p className="text-xs text-noble-black-500">
              You can request another OTP in {countdown} seconds.
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-noble-black-300 rounded-lg text-noble-black-100 hover:bg-noble-black-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-day-blue-400 transition-colors"
              disabled={isPending}
            >
              Cancel
            </button>
            <ActionButton
              text={
                isPending
                  ? "Sending..."
                  : countdown > 0
                    ? `Resend in ${countdown}s`
                    : "Get OTP"
              }
              onClick={handleGetOtp}
              disabled={isPending || countdown > 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOtpModal;
