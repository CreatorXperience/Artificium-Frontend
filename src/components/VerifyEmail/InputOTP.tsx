import React, { useRef } from "react";

type InputOTPProps = {
  length: number;
  value: string;
  onChange: (value: string) => void;
};

const InputOTP: React.FC<InputOTPProps> = ({ length, value, onChange }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, char: string) => {
    const newValue = value.split("");
    newValue[index] = char.slice(-1);
    onChange(newValue.join(""));

    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 sm:gap-3 justify-center overflow-x-auto">
      {Array.from({ length }).map((_, idx) => (
        <input
          type="text"
          key={idx}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          maxLength={1}
          value={value[idx] || ""}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="w-10 h-10 sm:w-14 sm:h-14 text-lg sm:text-2xl text-center rounded-lg border border-color-noble-black-500 bg-color-noble-black-700 text-white focus:outline-none focus:ring-2 focus:ring-color-day-blue-400 transition duration-200"
        />
      ))}
    </div>
  );
};

export default InputOTP;
