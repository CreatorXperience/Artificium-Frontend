import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { IntegrationFormHandler } from '../types/integrationTypes';
import { useImperativeHandle } from 'react';

function useIntegrationFormHandler<T extends FieldValues>(
  ref: React.Ref<IntegrationFormHandler>,
  form: UseFormReturn<T>,
  onSubmit: (data: T) => Promise<boolean>,
) {
  const {
    handleSubmit,
    formState: { isDirty, isSubmitSuccessful },
  } = form;

  useImperativeHandle(ref, () => ({
    submitForm: async () => {
      let success = false;
      await handleSubmit(async (data) => {
        const result = await onSubmit(data);
        success = result;
      })();

      return success;
    },
    isDirty,
    isSubmitted: isSubmitSuccessful,
  }));
}

export default useIntegrationFormHandler;
