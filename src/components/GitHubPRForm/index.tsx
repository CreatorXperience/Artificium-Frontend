import { forwardRef } from 'react';
import type { IntegrationFormHandler } from '../../types/integrationTypes';
import { useForm } from 'react-hook-form';
import useIntegrationFormHandler from '../../hooks/useIntegrationFormHandler';
import RHFInput from '../RHFInput';
import RHFTextArea from '../RHFTextArea';

interface GitHubPRFormData {
  repository: string;
  branch: string;
  baseBranch: string;
  title: string;
  description: string;
}

const GitHubPRForm = forwardRef<IntegrationFormHandler>((_, ref) => {
  const form = useForm<GitHubPRFormData>({
    defaultValues: {
      repository: '',
      branch: '',
      baseBranch: '',
      title: '',
    },
  });

  const { control } = form;

  const onSubmit = async (
    data: GitHubPRFormData,
  ): Promise<GitHubPRFormData> => {
    console.log('GitHub Pull Request:', data);
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
        label='Branch'
        name='branch'
        control={control}
        placeholder='feature-branch'
        rules={{ required: 'Source branch is required' }}
      />

      <RHFInput
        label='Base Branch'
        name='baseBranch'
        control={control}
        placeholder='main'
        rules={{ required: 'Base branch is required' }}
      />

      <RHFInput
        label='Title'
        name='title'
        control={control}
        placeholder='Brief PR title'
        rules={{ required: 'Pull request title is required' }}
      />

      <RHFTextArea
        label='Description'
        name='description'
        control={control}
        placeholder='Optional description for request'
        rows={1}
      />
    </form>
  );
});

export default GitHubPRForm;
