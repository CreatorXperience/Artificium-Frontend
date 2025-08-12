import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { formatTime } from '../../utils/helpers';
import { useMediaManager } from '../../hooks/useMediaManager';

interface AudioPlayerProps {
  audioUrl?: string;
  label?: string;
}

export default function AudioPlayer({ audioUrl, label }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const idRef = useRef<string>(crypto.randomUUID());
  const progressRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { currentMediaId, setCurrentMediaId } = useMediaManager();

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (next) setCurrentMediaId(idRef.current);
      return next;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentMediaId !== idRef.current && isPlaying) setIsPlaying(false);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentMediaId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetaData = () => setDuration(audio.duration);

    const handleTimeUpdate = () => setProgress(audio.currentTime);

    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetaData);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetaData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleClickSeek = function (e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const audioWidth = rect.width;
    const newTime = (clickX / audioWidth) * duration;
    audio.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <div className='bg-noble-black-500 rounded-lg p-4 w-full max-w-md'>
      {label && <p className='text-sm text-noble-black-100 mb-2'>{label}</p>}

      <div className='flex justify-between bg-noble-black-600 rounded-lg gap-2 items-center px-3 py-2'>
        <button
          onClick={togglePlayPause}
          className='cursor-pointer text-3xl text-electric-green-600'
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className='flex-1 mt-2'>
          <div
            className='bg-noble-black-500 h-2 rounded mb-1'
            ref={progressRef}
            onClick={handleClickSeek}
          >
            <div
              style={{ width: `${(progress / duration) * 100 || 0}%` }}
              className='bg-electric-green-600 h-full rounded cursor-pointer'
            />
          </div>
          <div className='text-xs text-noble-black-300 flex justify-between'>
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <audio src={audioUrl} ref={audioRef} preload='metadata' />
    </div>
  );
}
