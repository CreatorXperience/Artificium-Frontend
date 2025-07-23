import { FaGoogle } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";
<<<<<<< HEAD:src/components/SignUp/index.tsx
import FormInput from "../FormInput";
import ActionButton from "../ActionButton";
import SocialButton from "../SocialButton";
=======
>>>>>>> 32d456cb6e03723c3dfcbc0306b89f5e8b16d8f5:src/pages/SignUp/index.tsx
import { useGoogleAuth } from "../../feature/auth/services/googleAuth";
import { useSignUp } from "../../hooks/useSignUp";
import FormInput from "../../components/FormInput";
import ActionButton from "../../components/ActionButton";
import Button from "../../components/SocialButton";

import GetOtpModal from "./otpModal";
import toast from "react-hot-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUp = () => {
  const { handleGoogleSignUp } = useGoogleAuth();
  const [agreed, setAgreed] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch("password");
  const mutation = useSignUp();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.password !== data.repeatPassword) {
      toast.error("Passwords don't match");
      return;
    }

    const { firstName, lastName, email, password } = data;

    mutation.mutate(
      { firstName, lastName, email, password },
      {
        onSuccess: (user) => {
         
          if (!user.isVerified) {
            setOtpModalOpen(true);
          }
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-800 text-white font-plus">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between px-6 sm:px-10 md:px-16 py-10">
        {/* Header */}
        <div className="w-full max-w-xl mx-auto flex justify-between mb-10">
          <img
            src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
            alt="Logo"
            className="h-6"
          />
          <Link
            to="/login"
<<<<<<< HEAD:src/components/SignUp/index.tsx
            className="text-sm text-stem-green-700 hover:underline"
=======
            className="text-sm text-stem-green-500 hover:underline"
>>>>>>> 32d456cb6e03723c3dfcbc0306b89f5e8b16d8f5:src/pages/SignUp/index.tsx
          >
            Log in
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Connect with your team and bring your creative ideas to life.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="text-sm text-noble-black-200 mb-1 block">
                  First name
                </label>
                <FormInput
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "Must be at least 2 characters",
                    },
                  })}
                  error={errors.firstName?.message}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="text-sm text-noble-black-200 mb-1 block">
                  Last name
                </label>
                <FormInput
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Must be at least 2 characters",
                    },
                  })}
                  error={errors.lastName?.message}
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="text-sm text-noble-black-200 mb-1 block">
                  Email
                </label>
                <FormInput
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors.email?.message}
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-noble-black-200 mb-1 block">
                  Password
                </label>
                <FormInput
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                      message: "Must contain uppercase, lowercase, and number",
                    },
                  })}
                  error={errors.password?.message}
                  autoComplete="new-password"
                />
              </div>

              {/* Repeat Password */}
              <div>
                <label className="text-sm text-noble-black-200 mb-1 block">
                  Repeat password
                </label>
                <FormInput
                  placeholder="Repeat password"
                  type="password"
                  {...register("repeatPassword", {
                    required: "Please repeat your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  error={errors.repeatPassword?.message}
                  autoComplete="new-password"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4"
                id="terms"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <label htmlFor="terms" className="text-sm">
                I agree with{" "}
                <a href="/terms" className="text-day-blue-300 underline">
                  Terms and conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <ActionButton
              text={
                mutation.isPending
                  ? "Creating Account..."
                  : "Create new free Account"
              }
              disabled={!agreed || mutation.isPending}
            />
          </form>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-noble-black-500"></div>
          <span className="mx-4 text-sm text-noble-black-300">
            or sign up with
          </span>
          <div className="flex-grow h-px bg-noble-black-500"></div>
        </div>

        {/* Social Media Buttons */}
        <div className="w-full flex justify-center">
          <SocialButton
            text="Sign up with Google"
            icon={<FaGoogle size={20} />}
            onClick={handleGoogleSignUp}
            isLoading={mutation.isPending}
          />
        </div>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center text-noble-black-400 text-xs sm:text-sm mt-12 max-w-xl w-full mx-auto gap-2 sm:gap-0">
          <span>Artificium.app © {new Date().getFullYear()}</span>
          <a href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </a>
        </footer>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src="https://i.postimg.cc/brTZfThC/abstract-03.png"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* OTP Modal */}
      {otpModalOpen && mutation.data && (
        <GetOtpModal
          onClose={() => setOtpModalOpen(false)}
          id={mutation.data.id}
          email={mutation.data.email}
        />
      )}
    </div>
  );
};

export default SignUp;
