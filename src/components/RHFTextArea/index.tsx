import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';
import FormErrorDisplay from '../FormErrorDisplay';

interface RHFInputProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  rules?: Partial<RegisterOptions<T, Path<T>>>;
  placeholder?: string;
  rows?: number;
}

export default function RHFInput<T extends FieldValues>({
  label,
  name,
  control,
  rules,
  placeholder,
  rows = 4,
}: RHFInputProps<T>) {
  const isRequired = Boolean(rules?.required);

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className='block text-sm font-medium text-noble-black-100 mb-1 text-start'
        >
          {label} {isRequired && <span className='text-red-500'>*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <textarea
              id={name}
              placeholder={placeholder}
              {...field}
              rows={rows}
              className={`w-full p-2 bg-noble-black-600 border border-noble-black-500 rounded-md text-noble-black-100 placeholder-noble-black-400 focus:outline-none  ${
                fieldState.error
                  ? 'focus:ring-1 focus:ring-red-power-600 border-red-power-600'
                  : 'focus:ring-2 focus:ring-day-blue-500'
              }`}
            />
            {fieldState.error && (
              <FormErrorDisplay message={fieldState.error.message} />
            )}
          </>
        )}
      />
    </div>
  );
}
