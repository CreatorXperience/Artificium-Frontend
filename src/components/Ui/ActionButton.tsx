import { forwardRef } from 'react';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

// Using forwardRef to pass ref to the button
const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ text, onClick, active = true }, ref) => {
    const baseClasses = `
      font-bold
      py-1 // Reduced from py-2
      px-4 // Reduced from px-8
      rounded-xl
      shadow-lg
      focus:outline-none
      focus:ring-2
      focus:ring-opacity-75
      transition-colors
      duration-300
      outkiine-none
      w-full
      text-base
      
      `;

      const stateClasses = active
      ? `
      text-noble-black-600
      bg-stem-green-500
      bg-lime-400
      text-gray-900
      hover:bg-lime-500
      active:bg-lime-600
      focus:ring-lime-300
      cursor-pointer
      `
      : `
      bg-gray-300
      text-noble-black-100
      hover:bg-noble-black-700
      active:bg-noble-black-700
      focus:ring-noble-black-700

      bg-noble-black-600
        `;

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${stateClasses}`}
        onClick={onClick}

      >
        {text}
      </button>
    );
  }
);

export default ActionButton;