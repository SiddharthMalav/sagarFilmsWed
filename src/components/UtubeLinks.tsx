// YouTubeVideo.js
import React from 'react';

// Function to extract video ID from YouTube link
const extractVideoId = (url: string) => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeVideo = ({ videoUrl = "" }) => {
  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <iframe
        className='md:h-[315px] md:w-[560px] '
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
