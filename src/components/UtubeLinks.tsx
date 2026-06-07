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
    return <p className="text-red-500 text-sm">Invalid YouTube URL</p>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full bg-white p-2 border border-neutral-200/40 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-300">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
