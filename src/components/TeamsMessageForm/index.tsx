import { forwardRef } from 'react';
import type { IntegrationFormHandler } from '../../types/integrationTypes';
import { useForm } from 'react-hook-form';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

interface TeamsMessageFormData {
  channel: string;
  message: string;
}

const TeamsMessageForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<TeamsMessageFormData>({
    defaultValues: {
      channel: '',
      message: '',
    },
  });

  const { control } = form;

  const onSubmit = async (
    data: TeamsMessageFormData,
  ): Promise<TeamsMessageFormData> => {
    console.log('Teams Message:', data);
    return data;
  };

  useIntegrationFormHandler(ref, form, onSubmit);

  return (
    <form className='space-y-4'>
      <RHFInput
        label='Channel'
        name='channel'
        control={control}
        placeholder='General'
        type='text'
        rules={{ required: 'Channel is required' }}
      />

      <RHFTextArea
        rows={4}
        label='Message'
        name='message'
        control={control}
        placeholder='Write your message...'
        rules={{ required: 'Message cannot be empty' }}
      />
    </form>
  );
});

export default TeamsMessageForm;
