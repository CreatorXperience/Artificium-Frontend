import { useEffect, useRef, useState } from 'react';
import ChatInputBox from '../ChatInputBox';
import IntegrationListModal from '../IntegrationListModal';
import IntegrationDetailModal from '../IntegrationDetailModal';
import ConfirmModal from '../ConfirmModal';
import { integrationGroups } from '../../data/integrationData';
import type {
  IntegrationAction,
  IntegrationActionTypes,
  IntegrationFormHandler,
} from '../../types/integrationTypes';
import SendEmailForm from '../SendEmailForm';
import SlackChannelMessageForm from '../SlackSendChannelMessageForm';
import SlackDMForm from '../SlackDMForm';
import TeamsMessageForm from '../TeamsMessageForm';
import PagerDutyIncidentForm from '../PagerDutyIncidentForm';
import GitHubIssueForm from '../GitHubIssueForm';
import GitHubPRForm from '../GitHubPRForm';
import toast from 'react-hot-toast';

export default function IntegrationManager() {
  const [chatInputValue, setChatInputValue] = useState('');
  const [showIntegrationList, setShowIntegrationList] = useState(false);
  const [inputRect, setInputRect] = useState<DOMRect | null>(null);
  const [selectedIntegration, setSelectedIntegration] =
    useState<IntegrationAction | null>(null);
  const [pendingIntegration, setPendingIntegration] =
    useState<IntegrationAction | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    open: boolean;
    message: string;
    onConfirm: () => void;
  }>({ open: false, message: '', onConfirm: () => {} });

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listRef.current &&
        !listRef.current.contains(event.target as Node) &&
        showIntegrationList
      ) {
        setShowIntegrationList(false);
        setInputRect(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showIntegrationList]);

  // ✅ Close on scroll
  useEffect(() => {
    if (!showIntegrationList) return;

    const handleScroll = () => {
      setShowIntegrationList(false);
      setInputRect(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showIntegrationList]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowIntegrationList(false);
        setInputRect(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formRef = useRef<IntegrationFormHandler>(null);

  const integrationForms: Record<
    IntegrationActionTypes,
    React.ForwardRefExoticComponent<React.RefAttributes<IntegrationFormHandler>>
  > = {
    'send-email': SendEmailForm,
    'send-channel-message': SlackChannelMessageForm,
    'send-direct-message': SlackDMForm,
    'send-teams-message': TeamsMessageForm,
    'create-incident': PagerDutyIncidentForm,
    'create-issue': GitHubIssueForm,
    'create-pull-request': GitHubPRForm,
  };

  const FormComponent = selectedIntegration
    ? integrationForms[selectedIntegration.type]
    : null;

  // ✅ Trigger slash input detection
  const handleSlashTyped = (rect?: DOMRect) => {
    console.log('rect', rect);
    if (rect?.height) {
      setInputRect(rect);
      setShowIntegrationList(true);
    } else {
      setInputRect(null);
      setShowIntegrationList(false);
    }
  };

  const handleCloseIntegrationDetails = () => {
    if (formRef.current?.isDirty && !formRef.current?.isSubmitted) {
      setConfirmModal({
        open: true,
        message: 'Discard changes and close?',
        onConfirm: () => {
          setSelectedIntegration(null);
          setConfirmModal((prev) => ({ ...prev, open: false }));
        },
      });
    } else {
      setSelectedIntegration(null);
      setShowIntegrationList(false);
    }
  };

  const handleSelectIntegration = (action: IntegrationAction) => {
    if (formRef.current?.isDirty && !formRef.current?.isSubmitted) {
      setPendingIntegration(action);
      setConfirmModal({
        open: true,
        message: 'Discard changes and switch integration?',
        onConfirm: () => {
          if (pendingIntegration) {
            setSelectedIntegration(pendingIntegration);
            setPendingIntegration(null);
            setConfirmModal((prev) => ({ ...prev, open: false }));
          }
        },
      });
    } else {
      setSelectedIntegration(action);
      setInputRect(null);
    }
  };

  const handleSubmitIntegration = async () => {
    const success = await formRef.current?.submitForm();
    if (success) {
      setSelectedIntegration(null);
      setShowIntegrationList(false);
    } else {
      toast.error('Form submission failed');
    }
  };

  return (
    <>
      {/* Confirm Modal */}
      {confirmModal.open && (
        <ConfirmModal
          isOpen={confirmModal.open}
          onClose={() => setConfirmModal((prev) => ({ ...prev, open: false }))}
          onConfirm={confirmModal.onConfirm}
          title='Unsaved Changes'
          message={confirmModal.message}
          confirmText='Discard'
          variant='danger'
        />
      )}

      {/* ✅ Input to type commands */}
      <ChatInputBox
        value={chatInputValue}
        onChange={(value) => setChatInputValue(value)}
        onSlashTyped={handleSlashTyped}
      />

      {/* Integration List */}
      {showIntegrationList && inputRect && (
        <div
          ref={listRef}
          className='fixed z-50 w-64'
          style={{
            top: inputRect ? inputRect.top - 16 : 0, // show above the input
            left: inputRect ? inputRect.left : 0,
            transform: 'translateY(-100%)', // aligns above input
          }}
        >
          <IntegrationListModal
            integrationGroups={integrationGroups}
            onSelectIntegration={handleSelectIntegration}
            selectedIntegration={selectedIntegration}
          />
        </div>
      )}

      {/* Integration Detail Modal */}
      {selectedIntegration && (
        <IntegrationDetailModal
          onClose={handleCloseIntegrationDetails}
          selectedIntegration={selectedIntegration}
          onSelectIntegration={handleSelectIntegration}
          integrationGroups={integrationGroups}
          handleCreateRule={handleSubmitIntegration}
        >
          {FormComponent && <FormComponent ref={formRef} />}
        </IntegrationDetailModal>
      )}
    </>
  );
}
