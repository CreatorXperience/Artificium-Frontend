import { useRef } from 'react';

interface ImagePreviewProps {
  imageUrl: string;
  label?: string;
}

export default function ImagePreview({ imageUrl, label }: ImagePreviewProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  const toggleFullscreen = function () {
    const img = imageRef.current;
    if (!img) return;

    if (!document.fullscreenElement) {
      img.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      className='w-full max-w-[18rem] h-full max-h-[50vh] p-4 rounded-lg shadow-lg bg-noble-black-500 flex flex-col overflow-hidden group cursor-pointer'
      onClick={toggleFullscreen}
    >
      {label && <p className='mb-3 text-sm text-noble-black-100'>{label}</p>}

      <div className='flex-1 flex items-center justify-center min-h-0 h-[40vh] max-h-[40vh] overflow-hidden'>
        <img
          src={imageUrl}
          alt={label || imageUrl}
          className='w-full h-full object-contain'
          ref={imageRef}
        />
      </div>
    </div>
  );
}
