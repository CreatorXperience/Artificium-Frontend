import { forwardRef } from 'react';
import type { IntegrationFormHandler } from '../../types/integrationTypes';
import { useForm } from 'react-hook-form';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

interface SlackDMFormData {
  user: string;
  message: string;
}

const SlackDMForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<SlackDMFormData>({
    defaultValues: {
      user: '',
      message: '',
    },
  });

  const { control } = form;

  const onSubmit = async (data: SlackDMFormData): Promise<SlackDMFormData> => {
    console.log('Slack DM:', data);
    return data;
  };

  useIntegrationFormHandler(ref, form, onSubmit);

  return (
    <form className='space-y-4'>
      <RHFInput
        label='User'
        name='user'
        control={control}
        placeholder='@username'
        type='text'
        rules={{ required: 'User is required' }}
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

export default SlackDMForm;
