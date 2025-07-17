import { FaGoogle } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";
import { useGoogleAuth } from "../../feature/auth/services/googleAuth";

// Or, if the actual named export is different, for example 'googleSignUp':
// import { googleSignUp as handleGoogleSignUp } from "../../feature/auth/services/googleAuth";

import { useSignUp } from "../../hooks/useSignUp";
import FormInput from "../../components/FormInput";
import ActionButton from "../../components/ActionButton";
import Button from "../../components/SocialButton";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
};
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://artificium-v2.onrender.com";
const SignUp = () => {
  const { handleGoogleSignUp } = useGoogleAuth();
  const [agreed, setAgreed] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch("password");
  const mutation = useSignUp(BASE_URL);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
    // Handle signup logic here
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
            className="text-sm text-stem-green-500 hover:underline"
          >
            Log in
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Connect with your team and bring your creative ideas to life.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* First Name */}
              <div>
                <label className="text-sm text-noble-black-200 mb-1 block">
                  First name
                </label>
                <FormInput
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First name is required",
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
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  error={errors.password?.message}
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
                    required: "Repeat password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  error={errors.repeatPassword?.message}
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center mb-6">
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
                  ? "Creating Account"
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
        <div className="w-full flex flex-col justify-center sm:flex-row gap-4 mb-6">
          <Button
            text="Sign up with Google"
            icon={<FaGoogle size={20} />}
            onClick={() => handleGoogleSignUp()}
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
    </div>
  );
};

export default SignUp;
