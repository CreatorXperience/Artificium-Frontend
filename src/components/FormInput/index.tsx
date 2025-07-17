import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  placeholderPosition?: "left" | "center" | "right";
  error?: string;
}

// Forward ref to allow react-hook-form to register the input
const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      icon,
      placeholderPosition = "left",
      error,
      ...rest
    },
    ref
  ) => {
    const placeholderAlignClass = {
      left: "text-left placeholder:text-left",
      center: "text-center placeholder:text-center",
      right: "text-right placeholder:text-right",
    }[placeholderPosition];

    return (
      <div className="w-auto">
        <div
          className={`
            relative p-[2px] rounded-lg
            transition-colors duration-300
            bg-transparent
            focus-within:bg-gradient-blue-green-500
            focus-within:shadow-[0_0_0_3px_#82dbf7,0_0_10px_#b6f09c]
          `}
        >
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[rgba(26,29,33,1)] border border-transparent">
            {icon && <span className="text-noble-black-300">{icon}</span>}
            <input
              type={type}
              placeholder={placeholder}
              ref={ref}
              className={`w-full bg-transparent outline-none text-stem-green-600 placeholder:text-noble-black-400 text-sm ${placeholderAlignClass}`}
              {...rest}
            />
          </div>
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-400 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput"; // Required when using forwardRef

export default FormInput;
