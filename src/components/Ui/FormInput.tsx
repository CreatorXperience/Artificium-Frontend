import React from "react";

interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const FormInput: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className="w-auto">
      <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[rgba(26,29,33,1)] border border-[rgba(54,58,61,1)] focus-within:border-day-blue-500 transition-colors">
        {icon && <span className="text-noble-black-300">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none text-[rgba(232,233,233,1)] placeholder:text-noble-black-400 text-sm"
        />
      </div>
    </div>
  );
};

export default FormInput;
