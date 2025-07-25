import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { IntegrationFormHandler } from '../types/integrationTypes';
import { useImperativeHandle } from 'react';

function useIntegrationFormHandler<T extends FieldValues>(
  ref: React.Ref<IntegrationFormHandler>,
  form: UseFormReturn<T>,
  onSubmit: (data: T) => Promise<T>,
) {
  const {
    handleSubmit,
    formState: { isDirty, isSubmitSuccessful },
  } = form;

  useImperativeHandle(ref, () => ({
    submitForm: async () => {
      let payload: T | null = null;
      await handleSubmit(async (data) => {
        const result = await onSubmit(data);
        payload = result;
      })();

      return payload;
    },
    isDirty,
    isSubmitted: isSubmitSuccessful,
  }));
}

export default useIntegrationFormHandler;
