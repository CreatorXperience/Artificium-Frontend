import { useEffect, useRef } from 'react';
import { FiMic, FiPaperclip, FiSend } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

interface BaseIntegrationAction {
  service: string;
}

interface ChatInputProps<T extends BaseIntegrationAction | null> {
  value?: string;
  onChange?: (value: string) => void;
  onSlashTyped?: (rect?: DOMRect) => void;
  integrationAction: T;
  onSend: () => void;
  handleCancelIntegration: () => void;
}

function ChatInput<T extends BaseIntegrationAction | null>({
  value,
  onChange,
  onSlashTyped,
  integrationAction,
  onSend,
  handleCancelIntegration,
}: ChatInputProps<T>) {
  console.log(onSend);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange?.(inputValue);

    if (inputValue.endsWith('/') || inputValue === '/') {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        onSlashTyped?.(rect);
      }
    } else {
      onSlashTyped?.();
    }
  };

  return (
    <div
      className='w-full px-4 py-3 pt-5 rounded-xl bg-[rgba(6,7,8,1)] flex items-center gap-3 font-plus   
          focus-within:shadow-[0_0_0_3px_#82dbf7,0_0_10px_#b6f09c] relative'
    >
      {/* Microphone Icon */}
      <button className='cursor-pointer text-[rgba(155, 156, 158, 1)]'>
        <FiMic className='w-5 h-5' />
      </button>

      {integrationAction && (
        <span className='bg-noble-black-700 text-heisenberg-blue-600 px-2 py-1 rounded-full flex items-center gap-2 shadow-[0_0_0_1px_#1A1D21,0_0_5px_#1A1D21] inset-shadow-2xs'>
          <span>@{integrationAction.service.toLowerCase()}</span>
          <span className='cursor-pointer' onClick={handleCancelIntegration}>
            <IoCloseOutline />
          </span>
        </span>
      )}

      {/* Input Field */}
      <input
        ref={inputRef}
        type='text'
        placeholder='You can ask me anything! I am here to help.'
        className='flex-1 bg-transparent text-white placeholder-[rgba(155, 156, 158, 1)] focus:outline-none'
        value={value}
        onChange={handleUserInput}
      />

      {/* Attachment Icon */}
      <button className='text-[rgba(155, 156, 158, 1)] cursor-pointer'>
        <FiPaperclip className='w-5 h-5' />
      </button>

      {/* Send Button */}
      <button
        className='bg-[rgba(19,22,25,1)] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'
        onClick={onSend}
      >
        <FiSend className='w-4 h-4 text-white' />
      </button>
    </div>
  );
}

export default ChatInput;
