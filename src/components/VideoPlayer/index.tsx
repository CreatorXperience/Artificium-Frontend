import { useCallback, useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaDownload } from 'react-icons/fa';
import { formatTime } from '../../utils/helpers';
import { MdFullscreen, MdOutlineFullscreenExit } from 'react-icons/md';

interface VideoPlayerProps {
  videoUrl: string;
  autoplay?: boolean;
  label?: string;
}

export default function VideoPlayer({ videoUrl, label }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = useCallback(
    function () {
      const video = videoRef.current;
      if (!video) return;

      setIsPlaying(!isPlaying);
    },
    [isPlaying],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = function () {
      setProgress(video.currentTime);
    };

    const handleLoadedMetaData = function () {
      setDuration(video.duration);
    };

    const handleEnded = function () {
      setIsPlaying(false);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetaData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetaData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeOutId: ReturnType<typeof setTimeout>;

    const handleMouseMove = function () {
      setShowControls(true);
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => setShowControls(false), 3000);
    };

    const handleMouseLeave = function () {
      setShowControls(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeOutId);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleKeyDown = function (e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === ' ') {
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [togglePlay]);

  const handleClickSeek = function (e: React.MouseEvent<HTMLDivElement>) {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const videoWidth = rect.width;
    const newTime = (clickX / videoWidth) * duration;

    video.currentTime = newTime;
    setProgress(newTime);
  };

  const toggleFullscreen = function () {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className='w-full max-w-lg h-full max-h-[70vh] p-4 rounded-lg shadow-lg bg-noble-black-500 flex flex-col overflow-hidden group'>
      {label && <p className='mb-3 text-sm text-noble-black-100'>{label}</p>}

      <div
        className='relative w-full aspect-video mx-auto bg-noble-black-900 overflow-hidden rounded-lg'
        ref={containerRef}
      >
        <video
          className='h-full w-auto max-h-full mx-auto object-contain'
          ref={videoRef}
          onClick={togglePlay}
        >
          <source src={videoUrl} />
        </video>

        <div
          className={`absolute left-0 bottom-0 w-full bg-noble-black-700/50 rounded-t-md transition-all duration-500 p-4 ${
            showControls ? 'h-16 opacity-100' : 'h-0 opacity-0'
          }`}
        >
          <div className='flex items-center justify-between w-full gap-4'>
            <button
              className='text-electric-green-600 cursor-pointer text-2xl'
              onClick={togglePlay}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <div
              className='bg-noble-black-500 h-2 rounded mb-1 flex-1'
              ref={progressRef}
              onClick={handleClickSeek}
            >
              <div
                style={{ width: `${(progress / duration) * 100 || 0}%` }}
                className='w-1/2 bg-electric-green-600 h-full rounded cursor-pointer'
              />
            </div>
            <div className='text-xs text-electric-green-600'>
              <span>{formatTime(progress)}</span> /{' '}
              <span>{formatTime(duration)}</span>
            </div>
            <button
              onClick={toggleFullscreen}
              className='cursor-pointer text-electric-green-600'
            >
              {isFullScreen ? <MdOutlineFullscreenExit /> : <MdFullscreen />}
            </button>
            <a
              aria-label='download file'
              href={videoUrl}
              download={videoUrl}
              className='text-electric-green-600 hover:text-electric-green-400 transition'
            >
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
