import React from 'react';

interface VideoPlayerProps {
  videoURL?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoURL }) => {
  const url = videoURL || "https://www.youtube.com/embed/dQw4w9WgXcQ";
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={url}
        title="Magickal Video"
        frameBorder="0"
        allowFullScreen
        className="rounded-md w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
