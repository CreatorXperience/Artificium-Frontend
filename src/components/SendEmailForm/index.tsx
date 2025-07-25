import { forwardRef } from 'react';
import { type IntegrationFormHandler } from '../../types/integrationTypes';
import { useForm } from 'react-hook-form';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

export interface SendEmailFormData {
  to: string;
  replyTo: string;
  subject: string;
  message: string;
}

const SendEmailForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<SendEmailFormData>({
    defaultValues: {
      to: '',
      replyTo: '',
      subject: '',
      message: '',
    },
  });

  const { control } = form;

  const onSubmit = async (
    data: SendEmailFormData,
  ): Promise<SendEmailFormData> => {
    console.log(data);
    return data;
  };

  useIntegrationFormHandler(ref, form, onSubmit);

  return (
    <form className='space-y-4'>
      {/* To input */}
      <RHFInput
        label='To'
        name='to'
        control={control}
        placeholder='e.g. email@domain.com'
        type='email'
        rules={{
          required: 'Please enter an email address',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
      />

      {/* Reply to input */}
      <RHFInput
        label='Reply to'
        name='replyTo'
        control={control}
        type='email'
        placeholder='e.g. email@domain.com'
        rules={{
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
      />

      {/* Subject input  */}
      <RHFInput
        label='Subject'
        name='subject'
        control={control}
        placeholder='e.g. Project Update Notification'
        type='text'
        rules={{
          required: 'Please enter a subject',
        }}
      />
      <RHFTextArea
        label='Message'
        name='message'
        control={control}
        placeholder='Your email content here...'
        rows={2}
        rules={{
          required: 'Please enter a message',
        }}
      />

      {/* Disclaimer text */}
      <p className='text-xs text-noble-black-400 mt-4'>
        Email will be sent from your email address by Artificuim on your behalf.
      </p>
    </form>
  );
});

export default SendEmailForm;
