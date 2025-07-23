import { forwardRef } from 'react';
import type { IntegrationFormHandler } from '../../types/integrationTypes';
import FormErrorDisplay from '../FormErrorDisplay';
import { useForm } from 'react-hook-form';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

interface PagerDutyIncidentFormData {
  service: string;
  title: string;
  urgency: 'low' | 'high' | '';
  description: string;
}

const PagerDutyIncidentForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<PagerDutyIncidentFormData>({
    defaultValues: {
      service: '',
      title: '',
      urgency: '',
      description: '',
    },
  });

  const {
    control,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: PagerDutyIncidentFormData) => {
    console.log('PagerDuty Incident:', data);
    return true;
  };

  useIntegrationFormHandler(ref, form, onSubmit);

  return (
    <form className='space-y-4'>
      <RHFInput
        label='Service'
        name='service'
        control={control}
        placeholder='Service name'
        type='text'
        rules={{ required: 'Service is required' }}
      />

      <RHFInput
        label='Title'
        name='title'
        control={control}
        placeholder='Incident title'
        type='text'
        rules={{ required: 'Title is required' }}
      />

      <div>
        <label className='block text-sm font-medium mb-1'>Urgency *</label>
        <select
          {...register('urgency', { required: 'Urgency is required' })}
          className={`w-full p-2 bg-noble-black-600 border border-noble-black-500 rounded-md text-noble-black-100 placeholder-noble-black-400 focus:outline-none  ${
            errors.urgency
              ? 'focus:ring-1 focus:ring-red-power-600 border-red-power-600'
              : 'focus:ring-2 focus:ring-day-blue-500'
          }`}
        >
          <option value='' disabled>
            Select urgency
          </option>
          <option value='low'>Low</option>
          <option value='high'>High</option>
        </select>
        {errors.urgency && (
          <FormErrorDisplay message={errors.urgency.message!} />
        )}
      </div>

      <RHFTextArea
        rows={3}
        label='Description'
        name='description'
        control={control}
        placeholder='Incident details'
        rules={{ required: 'Description is required' }}
      />
    </form>
  );
});

export default PagerDutyIncidentForm;
