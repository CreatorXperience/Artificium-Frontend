export default function FormErrorDisplay({ message }: { message?: string }) {
  return <span className='text-red-500 text-xs'>{message || 'Error'}</span>;
}
