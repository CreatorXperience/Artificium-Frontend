import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import React, { Fragment } from 'react';
import type {
  IntegrationAction,
  IntegrationGroup,
} from '../../types/integrationTypes';
import IntegrationListModal from '../IntegrationListModal';
import { FaRegTrashAlt } from 'react-icons/fa';

interface IntegrationModalProps {
  onClose: () => void;
  selectedIntegration: IntegrationAction | null;
  onSelectIntegration: (action: IntegrationAction) => void;
  integrationGroups: IntegrationGroup[];
  children?: React.ReactNode;
  handleCreateRule: () => void;
}

export default function IntegrationModal({
  onClose,
  selectedIntegration,
  onSelectIntegration,
  integrationGroups,
  children,
  handleCreateRule,
}: IntegrationModalProps) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-noble-black-900/70' />
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
              <DialogPanel className='bg-noble-black-800 rounded-lg shadow-xl w-[800px] max-w-full overflow-hidden'>
                <div className='flex h-full'>
                  {/* Left panel: integration form or placeholder */}
                  <div className='flex-1 p-6 border-r border-noble-black-600'>
                    {selectedIntegration ? (
                      <>
                        <DialogTitle className='flex items-center gap-3 text-lg font-semibold text-noble-black-100 mb-4 justify-between'>
                          <div className='flex items-center gap-2'>
                            {/* Integration icon and name */}
                            <img
                              src={selectedIntegration.icon}
                              alt={selectedIntegration.name}
                              className='h-6 w-6'
                            />
                            {selectedIntegration.name}
                          </div>
                          <FaRegTrashAlt
                            className='cursor-pointer hover:text-red-power-600'
                            onClick={onClose}
                          />
                        </DialogTitle>

                        {children}
                      </>
                    ) : (
                      <p className='text-gray-400'>
                        Select an integration to get started.
                      </p>
                    )}
                  </div>

                  {/* Right panel: integration list */}
                  <div className='w-64 bg-noble-black-700 p-4 overflow-y-auto custom-scrollbar'>
                    <IntegrationListModal
                      integrationGroups={integrationGroups}
                      onSelectIntegration={onSelectIntegration}
                      selectedIntegration={selectedIntegration}
                    />
                  </div>
                </div>
                <div className='flex justify-end gap-3 mt-6'>
                  <button
                    className='border px-4 py-2 rounded'
                    onClick={onClose}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCreateRule}
                    className='bg-green-600 text-white px-4 py-2 rounded'
                  >
                    Create Rule
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
