import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  placeholderPosition?: "left" | "center" | "right";
}

const FormInput: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  placeholderPosition = "left",
}) => {
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
            value={value}
            onChange={onChange}
            className={`w-full bg-transparent outline-none text-[rgba(232,233,233,1)] placeholder:text-noble-black-400 text-sm ${placeholderAlignClass}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FormInput;
