import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import React, { Fragment } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  cancelText?: string;
  confirmText?: string;
  variant?: 'danger' | 'success' | 'info';
}
export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed with current action?',
  cancelText = 'Cancel',
  confirmText = 'Proceed',
  variant = 'danger',
}: ConfirmModalProps) {
  const variantClasses = {
    danger:
      'bg-red-power-600 text-white hover:bg-red-700 transition-colors duration-500',
    success:
      'bg-day-blue-600 text-white hover:bg-day-blue-700 transition-colors duration-500',
    info: 'bg-heisenberg-blue-600 text-white hover:bg-heisenberg-blue-700',
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' onClose={onClose} className='relative z-50'>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='bg-noble-black-700/80 inset-0 fixed' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-noble-black-600 p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle className='text-lg font-bold text-noble-black-100'>
                  {title}
                </DialogTitle>
                <div className='mt-4 text-sm text-noble-black-200'>
                  {message}
                </div>

                <div className='mt-6 flex justify-end gap-4'>
                  <button
                    onClick={onClose}
                    className='px-4 py-2 text-sm border border-noble-black-100 hover:bg-noble-black-700 transition-colors duration-300 rounded-md cursor-pointer'
                  >
                    {cancelText}
                  </button>
                  <button
                    onClick={() => {
                      onConfirm();
                      onClose();
                    }}
                    className={`${
                      variantClasses[variant ?? 'danger']
                    } px-4 py-2 text-sm rounded-md  cursor-pointer`}
                  >
                    {confirmText}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
