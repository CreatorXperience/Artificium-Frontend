import { FaDownload, FaFile } from 'react-icons/fa';

interface FileCardProps {
  fileName: string;
  fileUrl: string;
  label?: string;
}

const FileCard = ({ fileName, fileUrl, label }: FileCardProps) => {
  const fileExt = fileName.split('.').pop()?.toUpperCase() || 'FILE';

  return (
    <div className='bg-noble-black-500 rounded-lg p-4 w-full max-w-md shadow-md'>
      {label && <p className='text-sm text-noble-black-100 mb-2'>{label}</p>}
      <div className='flex items-center justify-between bg-noble-black-600 rounded-lg py-1 px-3'>
        <div className='flex items-center gap-3'>
          <div className='text-electric-green-600 rounded-md p-3'>
            <FaFile size={20} />
          </div>
          <div>
            <p className='text-xs text-electric-green-600 font-semibold'>
              {fileExt}
            </p>
            <p className='text-sm text-noble-black-400'>{fileName}</p>
          </div>
        </div>

        <a
          aria-label='download file'
          href={fileUrl}
          download={fileName}
          className='text-electric-green-600 hover:text-electric-green-400 transition'
        >
          <FaDownload size={20} />
        </a>
      </div>
    </div>
  );
};

export default FileCard;
