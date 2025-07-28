import { forwardRef } from 'react';
import type { IntegrationFormHandler } from '../../types/integrationTypes';
import { useForm } from 'react-hook-form';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

interface GitHubIssueFormData {
  repository: string;
  title: string;
  description: string;
}

const GitHubIssueForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<GitHubIssueFormData>({
    defaultValues: {
      repository: '',
      title: '',
      description: '',
    },
  });

  const { control } = form;

  const onSubmit = async (
    data: GitHubIssueFormData,
  ): Promise<GitHubIssueFormData> => {
    console.log('GitHub Issue:', data);
    return data;
  };

  useIntegrationFormHandler(ref, form, onSubmit);

  return (
    <form className='space-y-4'>
      <RHFInput
        label='Repository'
        name='repository'
        control={control}
        placeholder='e.g. my-org/my-repo'
        rules={{
          required: 'Repository name is required',
        }}
      />
      <RHFInput
        label='Issue Title'
        name='title'
        control={control}
        placeholder='Brief issue title'
        rules={{ required: 'Title is required' }}
      />

      <RHFTextArea
        label='Description'
        name='description'
        control={control}
        placeholder='Detailed description of the issue'
        rows={3}
        rules={{ required: 'Description is required' }}
      />
    </form>
  );
});

export default GitHubIssueForm;
