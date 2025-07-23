import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import type { IntegrationFormHandler } from '../../types/integrationTypes';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

interface SlackChannelFormData {
  channel: string;
  message: string;
}

const SlackChannelMessageForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<SlackChannelFormData>({
    defaultValues: {
      channel: '',
      message: '',
    },
  });

  const { control } = form;

  const onSubmit = async (data: SlackChannelFormData) => {
    console.log('Slack Channel Message:', data);
    return true;
  };

  useIntegrationFormHandler(ref, form, onSubmit);

  return (
    <form className='space-y-4'>
      <RHFInput
        label='Channel'
        name='channel'
        control={control}
        placeholder='e.g #general'
        type='text'
        rules={{ required: 'Channel is required' }}
      />
      <RHFTextArea
        rows={4}
        label='Message'
        name='message'
        control={control}
        placeholder='Write your Slack message...'
        rules={{ required: 'Message cannot be empty' }}
      />
    </form>
  );
});

export default SlackChannelMessageForm;
