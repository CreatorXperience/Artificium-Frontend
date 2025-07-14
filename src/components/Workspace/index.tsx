import { useState } from "react";
import ActionButton from "../ActionButton";
import FormInput from "../FormInput";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
const Workspace = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-800 text-white font-plus">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between px-6 sm:px-10 md:px-16 py-10">
        {/* Logo */}
        <div className="w-full max-w-xl mx-auto">
          <img
            src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
            alt="Logo"
            className="h-6 mb-8"
          />
        </div>

        <div className="w-full max-w-xl mx-auto mt-5">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Join or Create a Workspace
          </h1>
          <p className="text-noble-black-300 mb-8 text-base leading-relaxed">
            Connect with others by joining an existing workspace or create a new
            one to collaborate with your team.
          </p>

          {/* Input + Join */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
            <div className="flex-1">
              <FormInput
                placeholder="Your workspace URL .artificium.app"
                placeholderPosition="center"
              />
            </div>
            <div className="w-full sm:w-auto">
              <ActionButton text="Join Workspace" />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-noble-black-600" />
            <span className="mx-3 text-noble-black-400 text-sm">or</span>
            <hr className="flex-grow border-noble-black-600" />
          </div>

          {/* Create */}
          <ActionButton
            text="Create new Workspace"
            active={false}
            onClick={() => setShowModal(true)}
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

      {/* Right Section (hidden on small screens) */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src="https://i.postimg.cc/brTZfThC/abstract-03.png"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {showModal && (
        <CreateWorkspaceModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Workspace;
