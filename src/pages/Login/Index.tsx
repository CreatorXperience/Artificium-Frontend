import { useForm } from "react-hook-form";
import { FaGoogle, FaLock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router";
import Button from "../../components/SocialButton";
import FormInput from "../../components/FormInput";
import ActionButton from "../../components/ActionButton";
import { useState } from "react";
import { useGoogleAuth } from "../../feature/auth/services/googleAuth";
import { useSignIn } from "../../hooks/useSignIn";

type SignInFormData = {
  email: string;
  password: string;
};

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://artificium-v2.onrender.com";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const [rememberMe, setRememberMe] = useState(false);
  const { handleGoogleSignIn } = useGoogleAuth();
  const mutation = useSignIn(BASE_URL);
  const onSubmit = (data: SignInFormData) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
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
        </div>

        {/* Intro */}
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Let's get{" "}
            <span className="text-heisenberg-blue-600">creative!</span>
          </h2>
          <p className="text-sm text-noble-black-300">
            Log in to Artificium to start creating magic.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xl mx-auto mt-8"
        >
          {/* Email */}
          <div className="mb-4">
            <FormInput
              placeholder="Email"
              icon={<FiMail />}
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
          <FormInput
            placeholder="Password"
            icon={<FaLock />}
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />

          {/* Remember me / Forgot password */}
          <div className="flex items-center justify-between my-4 text-sm text-noble-black-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4"
              />
              Remember me
            </label>
            <Link
              to="/Forget-Password"
              className="text-day-blue-300 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <ActionButton
            text={mutation.isPending ? "Logging in..." : "Log in"}
            disabled={mutation.isPending}
          />
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center max-w-xl mx-auto">
          <div className="flex-grow h-px bg-noble-black-500"></div>
          <span className="mx-4 text-sm text-noble-black-300">
            or continue with
          </span>
          <div className="flex-grow h-px bg-noble-black-500"></div>
        </div>

        {/* Social Media Buttons */}
        <div className="w-full mx-auto flex flex-col justify-center sm:flex-row gap-4 mb-6">
          <Button
            text="Sign in with Google"
            icon={<FaGoogle size={20} />}
            onClick={() => handleGoogleSignIn()}
            isLoading={mutation.isPending}
          />
        </div>

        {/* Footer */}
        <div className="w-full max-w-xl mx-auto text-sm text-noble-black-300">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-stem-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src="https://i.postimg.cc/tTCMKGWs/088ccc453ba99f896c0aae884c59522ca46e28b6.png"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
