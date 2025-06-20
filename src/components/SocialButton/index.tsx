import React from "react";

// Define the props for the Button component
interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
  const buttonClasses = `
    bg-noble-black-600 text-noble-black-100
    py-2 px-4 rounded-md
    border border-noble-black-600
    cursor-pointer
    text-base font-medium
    hover:bg-noble-black-400 hover:border-noble-black-400
    active:bg-noble-black-600 active:border-noble-black-600
    flex items-center justify-center gap-2
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-noble-black-600 focus:ring-opacity-50
    
    // --- Responsive Width Adjustments ---
    w-full                  // Full width on mobile by default
    max-w-full              // Ensures it never overflows its direct parent on mobile
    md:w-auto               // On medium screens and up, width adapts to content
    md:max-w-sm             // Optional: Limit desktop width to a maximum (e.g., 24rem/384px)
    lg:w-1/3                // Example: Takes 33.33% width on large screens and up
    xl:w-1/4                // Example: Takes 25% width on extra-large screens and up
  `;

  const iconClasses = `w-5 h-5 flex-shrink-0 text-noble-black-100`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span className={iconClasses}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
