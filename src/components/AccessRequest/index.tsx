import ActionButton from "../ActionButton";

const AccessRequest = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-900 text-white font-plus overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between sm:px-10 md:px-16 py-10 relative">
        {/* Logo at the top-left */}
        <div className="mb-6">
          <img
            src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
            alt="Logo"
            className="h-6"
          />
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          {/* Avatars */}
          <div className="flex -space-x-3 mb-6">
            {[
              "/avatar1.jpg",
              "/avatar2.jpg",
              "/avatar3.jpg",
              "/avatar4.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-noble-black-900"
              />
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 max-w-md leading-snug">
            Sophia, Kamil, Emily and 2,012 others are already here!
          </h1>
          <p className="text-sm sm:text-base text-noble-black-300 mb-8 max-w-sm leading-relaxed">
            But... it looks like you don’t have access to this workspace.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-3 w-[200px] max-w-xs">
            <div className="w-[200px]">
              <ActionButton text="Access Request" />
            </div>
            <span className="text-noble-black-300 textsm">or</span>
            <div className="w-[1 00px]">
              <ActionButton text="Back" active={false} />
            </div>
          </div>
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
          src="https://i.postimg.cc/c4xjZPTx/1f867457e8a72ca41bfe3580945af97f73e4bd96.png"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AccessRequest;
