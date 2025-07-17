import React from "react";

// Define the props for the Button component
interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick, isLoading }) => {
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
    
  `;

  const iconClasses = `w-5 h-5 flex-shrink-0 `;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={isLoading}>
      {isLoading && <span className="loader"></span>}{" "}
      {/* Optional loading indicator */}
      {icon && <span className={iconClasses}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
